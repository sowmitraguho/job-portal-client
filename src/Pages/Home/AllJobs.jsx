import React, { use } from 'react';
import JobCard from '../Shared/JobCard/JobCard';

const AllJobs = ({jobsPromises}) => {
    const allJobsData = use(jobsPromises);
    return (
        <div>
            <div className='hero-content flex-col w-full text-center bg-base-200 py-10'>
                <h2 className="text-5xl font-bold">Jobs of the day</h2>
                <p className='text-gray-500 text-xl font-semibold'>Search and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {allJobsData.map(job=><JobCard key={job._id} job={job}></JobCard>)}
            </div>
        </div>
    );
};

export default AllJobs;