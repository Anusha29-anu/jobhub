class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  render() { return this.state.hasError ? <h1>Error loading admin dashboard</h1> : this.props.children; }
}

function StatCard({ title, value, icon, colorClass }) {
    return (
        <div className="card flex items-center">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${colorClass}`}>
                <div className={`${icon} text-xl`}></div>
            </div>
            <div>
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

function AdminDashboard() {
    const data = window.DUMMY_DATA.adminDashboard;

    return (
        <div className="flex min-h-screen bg-gray-50" data-name="admin-dashboard">
            <window.DashboardSidebar role="admin" activeItem="Dashboard" />
            
            <div className="flex-1 flex flex-col">
                <window.DashboardHeader title="Admin Overview" userName="Admin User" role="Administrator" />
                
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Total Users" value={data.totalUsers} icon="icon-users" colorClass="bg-blue-100 text-blue-600" />
                        <StatCard title="Active Jobs" value={data.totalJobs} icon="icon-briefcase" colorClass="bg-green-100 text-green-600" />
                        <StatCard title="Applications" value={data.totalApplications} icon="icon-file-text" colorClass="bg-purple-100 text-purple-600" />
                        <StatCard title="Companies" value={data.activeCompanies} icon="icon-building" colorClass="bg-orange-100 text-orange-600" />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Job Postings</h2>
                            <button className="px-4 py-2 bg-[var(--primary-color)] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                Add New Job
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                                        <th className="px-6 py-3 font-medium">Job Title</th>
                                        <th className="px-6 py-3 font-medium">Company</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Applicants</th>
                                        <th className="px-6 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.recentJobs.map(job => (
                                        <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                                            <td className="px-6 py-4 text-gray-500">{job.company}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                                                    job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                    {job.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{job.applicants}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex space-x-2">
                                                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded"><div className="icon-pencil"></div></button>
                                                    <button className="p-1 text-red-600 hover:bg-red-50 rounded"><div className="icon-trash"></div></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><AdminDashboard /></ErrorBoundary>);