from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

jobs = [
    {
        "id": 1,
        "title": "Frontend Developer",
        "company": "Google",
        "location": "Hyderabad"
    },
    {
        "id": 2,
        "title": "Backend Developer",
        "company": "Microsoft",
        "location": "Bangalore"
    },
    {
        "id": 3,
        "title": "React Developer",
        "company": "Amazon",
        "location": "Pune"
    }
]

@app.route("/")
def home():
    return "JobHub Backend Running"

@app.route("/jobs")
def get_jobs():
    return jsonify(jobs)

if __name__ == "__main__":
    app.run(debug=True)