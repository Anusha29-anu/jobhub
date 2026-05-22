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
      'ErrorBoundary caught an error:',
      error,
      errorInfo.componentStack
    );
  }

  render() {

    if (this.state.hasError) {

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

          <div className="text-center p-8 bg-white rounded-xl shadow-sm">

            <div className="icon-triangle-alert text-4xl text-red-500 mx-auto mb-4"></div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>

            <p className="text-gray-600 mb-6">
              We're sorry, but the page failed to load.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Reload Page
            </button>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

function Hero() {

    return (
        <div className="bg-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">

                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">

                    Find your
                    <span className="text-[var(--primary-color)]">
                        dream job
                    </span>

                    <br/>

                    and build your career

                </h1>

                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">

                    Discover jobs from top companies around the globe.

                </p>

                <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2">

                    <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-xl">

                        <div className="icon-search text-gray-400 text-xl mr-3"></div>

                        <input
                            type="text"
                            placeholder="Job title, keywords, or company"
                            className="w-full bg-transparent border-none focus:outline-none py-3 text-gray-700 placeholder-gray-400"
                        />

                    </div>

                    <button className="btn btn-primary py-3 px-8 text-lg w-full md:w-auto">

                        Search Jobs

                    </button>

                </div>

            </div>

        </div>
    );
}

function Categories() {

    return (

        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-end mb-12">

                    <div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Explore by Category
                        </h2>

                        <p className="text-gray-500">
                            Find the role that best suits your skills
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                    {window.DUMMY_DATA.categories.map(category => (

                        <div
                            key={category.id}
                            className="card p-6 text-center cursor-pointer group hover:border-[var(--primary-color)]"
                        >

                            <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors mb-4">

                                <div className={`${category.icon} text-2xl`}></div>

                            </div>

                            <h3 className="font-semibold text-gray-900 mb-1">
                                {category.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {category.count} Jobs
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

function FeaturedJobs() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        fetchJobs();

    }, []);

    async function fetchJobs() {

        try {

            const response = await axios.get(
                'http://127.0.0.1:5000/jobs'
            );

            console.log("Jobs from Flask:", response.data);

            setJobs(response.data);

        } catch(error) {

            console.log("API Error:", error);

        }
    }

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-end mb-12">

                    <div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Featured Jobs
                        </h2>

                        <p className="text-gray-500">
                            Hand-picked opportunities for you
                        </p>

                    </div>

                </div>

                <div className="space-y-6">

                    {jobs.length > 0 ? (

                        jobs.map(job => (

                            <div
                                key={job.id}
                                className="card p-6"
                            >

                                <h2 className="text-xl font-bold text-gray-900">
                                    {job.title}
                                </h2>

                                <p className="text-gray-600 mt-2">
                                    {job.company}
                                </p>

                                <p className="text-gray-500">
                                    {job.location}
                                </p>

                            </div>

                        ))

                    ) : (

                        <p className="text-gray-500">
                            Loading jobs...
                        </p>

                    )}

                </div>

            </div>

        </section>

    );
}

function Stats() {

    return (

        <section className="py-16 bg-[var(--primary-color)]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400">

                    <div className="py-6 md:py-0">

                        <h3 className="text-4xl font-bold text-white mb-2">
                            1200+
                        </h3>

                        <p className="text-blue-100 font-medium">
                            Active Jobs
                        </p>

                    </div>

                    <div className="py-6 md:py-0">

                        <h3 className="text-4xl font-bold text-white mb-2">
                            300+
                        </h3>

                        <p className="text-blue-100 font-medium">
                            Companies Hiring
                        </p>

                    </div>

                    <div className="py-6 md:py-0">

                        <h3 className="text-4xl font-bold text-white mb-2">
                            5000+
                        </h3>

                        <p className="text-blue-100 font-medium">
                            Candidates Placed
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );
}

function App() {

    return (

        <div className="min-h-screen flex flex-col">

            <window.Navbar />

            <main className="flex-grow">

                <Hero />

                <Categories />

                <FeaturedJobs />

                <Stats />

            </main>

            <window.Footer />

        </div>

    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(

    <ErrorBoundary>

        <App />

    </ErrorBoundary>

);