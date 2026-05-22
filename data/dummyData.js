const DUMMY_DATA = {
    categories: [
        { id: 1, name: 'Technology', icon: 'icon-cpu', count: 1250 },
        { id: 2, name: 'Design', icon: 'icon-pen-tool', count: 430 },
        { id: 3, name: 'Marketing', icon: 'icon-megaphone', count: 890 },
        { id: 4, name: 'Sales', icon: 'icon-trending-up', count: 1100 },
        { id: 5, name: 'Finance', icon: 'icon-chart-pie', count: 650 },
        { id: 6, name: 'Engineering', icon: 'icon-settings', count: 980 }
    ],
    featuredJobs: [
        {
            id: 'job-1',
            title: 'Senior Frontend Developer',
            company: 'TechFlow Solutions',
            logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&q=80',
            location: 'San Francisco, CA (Remote)',
            type: 'Full-time',
            salary: '$120k - $150k',
            postedAt: '2 days ago',
            tags: ['React', 'TypeScript', 'Tailwind']
        },
        {
            id: 'job-2',
            title: 'Product Designer',
            company: 'Creative Studio',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80',
            location: 'New York, NY',
            type: 'Full-time',
            salary: '$90k - $120k',
            postedAt: '5 hours ago',
            tags: ['Figma', 'UI/UX', 'Prototyping']
        },
        {
            id: 'job-3',
            title: 'Marketing Manager',
            company: 'GrowthOps',
            logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop&q=80',
            location: 'London, UK (Hybrid)',
            type: 'Contract',
            salary: '£60k - £80k',
            postedAt: '1 day ago',
            tags: ['SEO', 'Content', 'Strategy']
        }
    ],
    stats: {
        activeJobs: '45k+',
        companies: '10k+',
        candidates: '2M+'
    },
    userDashboard: {
        applied: 12,
        saved: 8,
        interviews: 3,
        profileViews: 145,
        recentApplications: [
            { id: 1, role: 'Frontend Developer', company: 'TechFlow', status: 'Pending', date: 'Oct 24, 2023' },
            { id: 2, role: 'UI Designer', company: 'Creative Studio', status: 'Interview', date: 'Oct 20, 2023' },
            { id: 3, role: 'React Engineer', company: 'Startup Inc', status: 'Rejected', date: 'Oct 15, 2023' }
        ]
    },
    adminDashboard: {
        totalUsers: 12543,
        totalJobs: 843,
        totalApplications: 4521,
        activeCompanies: 156,
        recentJobs: [
            { id: 1, title: 'Senior Developer', company: 'Google', status: 'Active', applicants: 124 },
            { id: 2, title: 'Product Manager', company: 'Amazon', status: 'Active', applicants: 89 },
            { id: 3, title: 'UX Researcher', company: 'Apple', status: 'Closed', applicants: 210 }
        ]
    }
};

window.DUMMY_DATA = DUMMY_DATA;
