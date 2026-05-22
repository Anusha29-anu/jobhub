function Navbar() {

    return (

        <nav className="sticky top-0 z-50 glass-panel border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between h-16 items-center">

                    {/* LOGO */}

                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => window.location.href = 'index.html'}
                    >

                        <div className="w-10 h-10 rounded-xl bg-[var(--primary-color)] flex items-center justify-center text-white shadow-md">

                            <div className="icon-briefcase text-lg"></div>

                        </div>

                        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">

                            JobHub

                        </span>

                    </div>

                    {/* DESKTOP MENU */}

                    <div className="hidden md:flex items-center space-x-8">

                        <a
                            href="index.html"
                            className="text-gray-700 font-semibold hover:text-[var(--primary-color)] transition"
                        >
                            Home
                        </a>

                        <a
                            href="jobs.html"
                            className="text-gray-700 font-semibold hover:text-[var(--primary-color)] transition"
                        >
                            Find Jobs
                        </a>

                        <a
                            href="user-dashboard.html"
                            className="text-gray-700 font-semibold hover:text-[var(--primary-color)] transition"
                        >
                            User Dashboard
                        </a>

                        <a
                            href="admin-dashboard.html"
                            className="text-gray-700 font-semibold hover:text-[var(--primary-color)] transition"
                        >
                            Admin Dashboard
                        </a>

                    </div>

                    {/* AUTH BUTTONS */}

                    <div className="hidden md:flex items-center space-x-4">

                        <a
                            href="login.html"
                            className="text-gray-700 hover:text-[var(--primary-color)] font-semibold transition"
                        >
                            Log in
                        </a>

                        <a
                            href="register.html"
                            className="bg-[var(--primary-color)] hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition"
                        >
                            Sign Up
                        </a>

                    </div>

                    {/* MOBILE MENU */}

                    <div className="md:hidden">

                        <button
                            className="text-gray-700 hover:text-[var(--primary-color)]"
                            onClick={() => {

                                const mobileMenu =
                                    document.getElementById("mobile-menu");

                                mobileMenu.classList.toggle("hidden");

                            }}
                        >

                            <div className="icon-menu text-3xl"></div>

                        </button>

                    </div>

                </div>

            </div>

            {/* MOBILE DROPDOWN */}

            <div
                id="mobile-menu"
                className="hidden md:hidden bg-white border-t border-gray-200 shadow-lg"
            >

                <div className="px-4 py-4 space-y-4">

                    <a
                        href="index.html"
                        className="block text-gray-700 font-medium hover:text-[var(--primary-color)]"
                    >
                        Home
                    </a>

                    <a
                        href="jobs.html"
                        className="block text-gray-700 font-medium hover:text-[var(--primary-color)]"
                    >
                        Find Jobs
                    </a>

                    <a
                        href="user-dashboard.html"
                        className="block text-gray-700 font-medium hover:text-[var(--primary-color)]"
                    >
                        User Dashboard
                    </a>

                    <a
                        href="admin-dashboard.html"
                        className="block text-gray-700 font-medium hover:text-[var(--primary-color)]"
                    >
                        Admin Dashboard
                    </a>

                    <a
                        href="login.html"
                        className="block text-gray-700 font-medium hover:text-[var(--primary-color)]"
                    >
                        Log in
                    </a>

                    <a
                        href="register.html"
                        className="block bg-[var(--primary-color)] text-white text-center py-3 rounded-xl font-semibold"
                    >
                        Sign Up
                    </a>

                </div>

            </div>

        </nav>

    );
}

window.Navbar = Navbar;