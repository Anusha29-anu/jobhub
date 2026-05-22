const { useEffect, useState } = React;

function JobsPage() {

  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchJobs();

  }, []);

  async function fetchJobs() {

    try {

      const response = await axios.get(
        "https://my-jobhub-backend.onrender.com/jobs"
      );

      setJobs(response.data);

    } catch (error) {

      console.log(error);

    }
  }

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return (

    <div className="min-h-screen flex flex-col">

      <window.Navbar />

      <div className="max-w-7xl mx-auto w-full px-4 py-10 flex-grow">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Find Your Dream Job
        </h1>

        <div className="bg-white p-4 rounded-2xl shadow mb-10">

          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full border p-4 rounded-xl"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredJobs.map(job => (

            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-2xl font-bold text-gray-900">
                  {job.title}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Full Time
                </span>

              </div>

              <p className="text-gray-700 mb-2">
                <i className="fa-solid fa-building mr-2"></i>
                {job.company}
              </p>

              <p className="text-gray-500 mb-4">
                <i className="fa-solid fa-location-dot mr-2"></i>
                {job.location}
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">

                Apply Now

              </button>

            </div>

          ))}

        </div>

      </div>

      <window.Footer />

    </div>

  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<JobsPage />);