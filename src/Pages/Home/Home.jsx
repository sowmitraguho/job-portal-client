import React, { Suspense} from 'react';
import Banner from './Banner';
import Category from './Category';
import AllJobs from './AllJobs';

const Home = () => {
    const categoriesPromises = fetch('http://localhost:3000/jobcategories').then(res=>res.json());
    const jobsPromises = fetch('http://localhost:3000/alljobs').then(res=>res.json());

   
   
    return (
        <div className='bg-[#F2F6FD]'>
            <Banner/>
            <div className="category">
                <Suspense fallback="loading ....">
                    <Category categoriesPromises={categoriesPromises}/>
                </Suspense>
            </div>
            <div>
                <Suspense fallback="loading ....">
                    <AllJobs jobsPromises={jobsPromises} />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;