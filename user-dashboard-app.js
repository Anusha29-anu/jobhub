class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  render() { return this.state.hasError ? <h1>Error loading dashboard</h1> : this.props.children; }
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

function UserDashboard() {
    const data = window.DUMMY_DATA.userDashboard;

    return (
        <div className="flex min-h-screen bg-gray-50" data-name="user-dashboard">
            <window.DashboardSidebar role="user" activeItem="Overview" />
            
            <div className="flex-1 flex flex-col">
                <window.DashboardHeader title="Dashboard Overview" userName="John Doe" role="Candidate" />
                
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <StatCard title="Applied Jobs" value={data.applied} icon="icon-briefcase" colorClass="bg-blue-100 text-blue-600" />
                        <StatCard title="Saved Jobs" value={data.saved} icon="icon-bookmark" colorClass="bg-yellow-100 text-yellow-600" />
                        <StatCard title="Interviews" value={data.interviews} icon="icon-users" colorClass="bg-green-100 text-green-600" />
                        <StatCard title="Profile Views" value={data.profileViews} icon="icon-eye" colorClass="bg-purple-100 text-purple-600" />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
                            <button className="text-sm text-[var(--primary-color)] font-medium hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-200">
                                        <th className="px-6 py-3 font-medium">Job Role</th>
                                        <th className="px-6 py-3 font-medium">Company</th>
                                        <th className="px-6 py-3 font-medium">Applied Date</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.recentApplications.map(app => (
                                        <tr key={app.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{app.role}</td>
                                            <td className="px-6 py-4 text-gray-500">{app.company}</td>
                                            <td className="px-6 py-4 text-gray-500">{app.date}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                                                    app.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    app.status === 'Interview' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-gray-400 hover:text-[var(--primary-color)]">
                                                    <div className="icon-more-vertical"></div>
                                                </button>
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
root.render(<ErrorBoundary><UserDashboard /></ErrorBoundary>);