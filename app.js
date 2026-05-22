const { useState, useEffect } = React;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error, errorInfo) {
        console.error(
            "ErrorBoundary caught an error:",
            error,
            errorInfo.componentStack
        );
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                    <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
                        <div className="text-red-500 text-5xl mb-4">
                            ⚠️
                        </div>

                        <h1 className="text-3xl font-bold mb-4">
                            Something went wrong
                        </h1>

                        <p className="text-gray-600 mb-6">
                            Failed to load application.
                        </p>

                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

/* =========================
   HERO SECTION
========================= */

function Hero({ searchTerm, setSearchTerm }) {
    return (
        <section className="bg-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Find your
                    <span className="text-blue-600"> dream job </span>
                    <br />
                    and build your career
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover jobs from top companies around the globe.
                </p>

                <div className="mt-10 bg-white shadow-xl rounded-2xl p-3 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">

                    <input
                        type="text"
                        placeholder="Search jobs, company, skills..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    />

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                        Search Jobs
                    </button>

                </div>

            </div>
        </section>
    );
}

/* =========================
   JOB CARD
========================= */

function JobCard({ job }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {job.title}
                    </h2>

                    <p className="text-gray-700 mt-2 font-medium">
                        {job.company}
                    </p>

                    <p className="text-gray-500 mt-1">
                        📍 {job.location}
                    </p>

                    <p className="text-gray-500 mt-1">
                        💼 {job.type}
                    </p>

                    <p className="text-gray-500 mt-1">
                        💰 {job.salary}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
                        Apply Now
                    </button>

                    <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold">
                        Save Job
                    </button>
                </div>

            </div>

        </div>
    );
}

/* =========================
   FEATURED JOBS
========================= */

function FeaturedJobs({ searchTerm }) {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

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

            console.log("API Error:", error);

        } finally {

            setLoading(false);

        }
    }

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-20 px-4 bg-white">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">

                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Featured Jobs
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Latest opportunities from top companies
                        </p>
                    </div>

                    <div className="bg-blue-100 text-blue-700 px-5 py-3 rounded-xl font-semibold">
                        {filteredJobs.length} Jobs Found
                    </div>

                </div>

                {loading ? (
                    <div className="text-center text-gray-500 text-xl">
                        Loading jobs...
                    </div>
                ) : filteredJobs.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl">
                        No jobs found.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredJobs.map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                            />
                        ))}
                    </div>
                )}

            </div>

        </section>
    );
}

/* =========================
   STATS SECTION
========================= */

function Stats() {
    return (
        <section className="bg-blue-600 py-20 px-4">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                <div className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm">
                    <h2 className="text-5xl font-bold text-white">
                        1200+
                    </h2>

                    <p className="text-blue-100 mt-3 text-lg">
                        Active Jobs
                    </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm">
                    <h2 className="text-5xl font-bold text-white">
                        300+
                    </h2>

                    <p className="text-blue-100 mt-3 text-lg">
                        Companies
                    </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-10 backdrop-blur-sm">
                    <h2 className="text-5xl font-bold text-white">
                        5000+
                    </h2>

                    <p className="text-blue-100 mt-3 text-lg">
                        Candidates
                    </p>
                </div>

            </div>

        </section>
    );
}

/* =========================
   FOOTER
========================= */

function FooterSection() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        JobHub
                    </h2>

                    <p className="text-gray-400">
                        Find your dream career with the best companies worldwide.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-gray-400">
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Companies</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contact
                    </h3>

                    <p className="text-gray-400">
                        support@jobhub.com
                    </p>
                </div>

            </div>

        </footer>
    );
}

/* =========================
   APP
========================= */

function App() {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen flex flex-col">

            <window.Navbar />

            <main className="flex-grow">

                <Hero
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <FeaturedJobs
                    searchTerm={searchTerm}
                />

                <Stats />

            </main>

            <FooterSection />

        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
);