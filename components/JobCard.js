function JobCard({ job }) {
    return (
        <div className="card p-6 flex flex-col sm:flex-row gap-6 hover:-translate-y-1 transition-transform duration-300" data-name="job-card" data-file="components/JobCard.js">
            <div className="flex-shrink-0">
                <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-lg object-cover border border-gray-100" />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--primary-color)] cursor-pointer">
                            {job.title}
                        </h3>
                        <p className="text-[var(--primary-color)] font-medium text-sm">{job.company}</p>
                    </div>
                    <button className="text-gray-400 hover:text-[var(--primary-color)]">
                        <div className="icon-bookmark text-xl"></div>
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <div className="icon-map-pin"></div>
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="icon-clock"></div>
                        <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="icon-banknote"></div>
                        <span>{job.salary}</span>
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-50 text-[var(--primary-color)] text-xs font-medium rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="btn btn-outline py-1 px-4 text-sm">Apply</button>
                </div>
            </div>
        </div>
    );
}

window.JobCard = JobCard;