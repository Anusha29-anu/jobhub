from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

CORS(app)

# DATABASE CONFIG
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobs.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# DATABASE MODEL
class Job(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(100), nullable=False)

    company = db.Column(db.String(100), nullable=False)

    location = db.Column(db.String(100), nullable=False)

# HOME ROUTE
@app.route('/')
def home():

    return "Flask Backend Running"

# GET ALL JOBS
@app.route('/jobs', methods=['GET'])
def get_jobs():

    jobs = Job.query.all()

    jobs_list = []

    for job in jobs:

        jobs_list.append({

            "id": job.id,
            "title": job.title,
            "company": job.company,
            "location": job.location

        })

    return jsonify(jobs_list)

# ADD NEW JOB
@app.route('/add-job', methods=['POST'])
def add_job():

    data = request.json

    new_job = Job(

        title=data['title'],
        company=data['company'],
        location=data['location']

    )

    db.session.add(new_job)

    db.session.commit()

    return jsonify({

        "message": "Job Added Successfully"

    })

# RUN SERVER
if __name__ == '__main__':

    with app.app_context():

        db.create_all()

    app.run(debug=True)