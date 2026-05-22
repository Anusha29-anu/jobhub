function DashboardHeader({ title, userName, role }) {
    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8" data-name="dashboard-header" data-file="components/DashboardHeader.js">
            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
            
            <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-gray-600 relative">
                    <div className="icon-bell text-xl"></div>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[var(--primary-color)] font-bold">
                        {userName.charAt(0)}
                    </div>
                    <div className="text-sm">
                        <p className="font-medium text-gray-700">{userName}</p>
                        <p className="text-xs text-gray-500 capitalize">{role}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

window.DashboardHeader = DashboardHeader;