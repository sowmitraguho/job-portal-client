import React from 'react';

const JobCard = ({ job }) => {
    console.log(job);
    const { title, description, jobType, requirements, applicationDeadline, category, company, company_logo, location } = job;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <div className="title-section flex items-center gap-1">
                        <img className='w-16' src={company_logo} alt="" />
                        <div>
                            <h2 className="card-title">{company}</h2>
                            <h2 className="text-gray-600">{location}</h2>
                        </div>
                    </div>
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <div>
                        <p>Job Type: {jobType}</p>
                        <p> DeadLine: {applicationDeadline}</p>
                    
                    </div>
                    <p>{description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {requirements.map((item, idx) => <div key={idx} className="badge badge-outline">{item}</div>)}
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;