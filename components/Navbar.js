function Navbar() {
    return (
        <nav className="sticky top-0 z-50 glass-panel border-b border-gray-200" data-name="navbar" data-file="components/Navbar.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = 'index.html'}>
                        <div className="w-8 h-8 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                            <div className="icon-briefcase"></div>
                        </div>
                        <span className="text-xl font-bold text-gray-900">JobHub</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-6">
                        <a href="index.html" className="text-gray-900 font-medium hover:text-[var(--primary-color)]">Home</a>
                        <a href="jobs.html" className="text-gray-500 font-medium hover:text-[var(--primary-color)]">Find Jobs</a>
                        <a href="user-dashboard.html" className="text-gray-500 font-medium hover:text-[var(--primary-color)]">User Dashboard</a>
                        <a href="admin-dashboard.html" className="text-gray-500 font-medium hover:text-[var(--primary-color)]">Admin Dashboard</a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="login.html" className="text-gray-600 hover:text-gray-900 font-medium">Log in</a>
                        <a href="register.html" className="btn btn-primary">Sign up</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-900">
                            <div className="icon-menu text-2xl"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

window.Navbar = Navbar;