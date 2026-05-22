function DashboardSidebar({ role, activeItem }) {
    const userLinks = [
        { name: 'Overview', icon: 'icon-layout-dashboard', path: '#' },
        { name: 'My Profile', icon: 'icon-user', path: '#' },
        { name: 'Applied Jobs', icon: 'icon-briefcase', path: '#' },
        { name: 'Saved Jobs', icon: 'icon-bookmark', path: '#' },
        { name: 'Messages', icon: 'icon-message-circle', path: '#' },
        { name: 'Settings', icon: 'icon-settings', path: '#' },
    ];

    const adminLinks = [
        { name: 'Dashboard', icon: 'icon-layout-dashboard', path: '#' },
        { name: 'Manage Jobs', icon: 'icon-briefcase', path: '#' },
        { name: 'Applicants', icon: 'icon-users', path: '#' },
        { name: 'Companies', icon: 'icon-building', path: '#' },
        { name: 'Analytics', icon: 'icon-chart-bar', path: '#' },
        { name: 'Settings', icon: 'icon-settings', path: '#' },
    ];

    const links = role === 'admin' ? adminLinks : userLinks;

    return (
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col" data-name="dashboard-sidebar" data-file="components/DashboardSidebar.js">
            <div className="h-16 flex items-center px-6 border-b border-gray-200 cursor-pointer" onClick={() => window.location.href = 'index.html'}>
                <div className="w-8 h-8 rounded bg-[var(--primary-color)] flex items-center justify-center text-white mr-2">
                    <div className="icon-briefcase"></div>
                </div>
                <span className="text-xl font-bold text-gray-900">JobHub</span>
            </div>
            
            <div className="p-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                    Main Menu
                </div>
                <nav className="space-y-1">
                    {links.map((link, idx) => (
                        <a 
                            key={idx} 
                            href={link.path}
                            className={`flex items-center px-2 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeItem === link.name ? 'bg-blue-50 text-[var(--primary-color)]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <div className={`${link.icon} text-lg mr-3 ${activeItem === link.name ? 'text-[var(--primary-color)]' : 'text-gray-400'}`}></div>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
            
            <div className="mt-auto p-4 border-t border-gray-200">
                <a href="index.html" className="flex items-center px-2 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="icon-log-out text-lg mr-3"></div>
                    Logout
                </a>
            </div>
        </div>
    );
}

window.DashboardSidebar = DashboardSidebar;