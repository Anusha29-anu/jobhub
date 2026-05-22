function Footer() {
    const currentYear = 2026;
    
    return (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                                <div className="icon-briefcase"></div>
                            </div>
                            <span className="text-xl font-bold text-gray-900">JobHub</span>
                        </div>
                        <p className="text-gray-500 mb-6">
                            Connecting top talent with the best companies worldwide. Your next career move starts here.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">For Candidates</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Browse Jobs</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Browse Categories</a></li>
                            <li><a href="user-dashboard.html" className="text-gray-500 hover:text-[var(--primary-color)]">Candidate Dashboard</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Job Alerts</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">For Employers</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Post a Job</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Browse Candidates</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Employer Dashboard</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Pricing Plans</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">About Us</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Contact Us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} JobHub. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-600"><div className="icon-twitter"></div></a>
                        <a href="#" className="text-gray-400 hover:text-gray-600"><div className="icon-linkedin"></div></a>
                        <a href="#" className="text-gray-400 hover:text-gray-600"><div className="icon-github"></div></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

window.Footer = Footer;