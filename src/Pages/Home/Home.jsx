import React, { Suspense } from 'react';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    const categoriesPromises = fetch('http://localhost:3000/jobcategories').then(res=>res.json());
    return (
        <div className='bg-[#F2F6FD]'>
            <Banner/>
            <div className="category">
                <Suspense>
                    <Category categoriesPromises={categoriesPromises}/>
                </Suspense>
            </div>
        </div>
    );
};

export default Home;