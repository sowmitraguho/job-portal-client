import React from 'react';
import { motion } from "motion/react"
import image1 from '../../assets/images/team1.jpg'
import image2 from '../../assets/images/team2.jpg'
import { Link } from 'react-router';

const Banner = () => {
    const items = ['Designer', 'Web', 'IOS', 'Developer', 'PHP', 'Senior', 'Engineer'];
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <div className='flex-1'>
                        <motion.img animate={
                            {
                                y: [50, 0, 50],
                                transition: { duration: 5, repeat: Infinity }
                            }}
                            src={image1}
                            className="max-w-sm rounded-tr-3xl rounded-tl-3xl rounded-br-3xl shadow-2xl border-l-8 border-b-8 border-sky-500 mb-24"
                        />
                        <motion.img animate={
                            {
                                x: [150, 100, 150],
                                transition: { duration: 5, repeat: Infinity }
                            }}
                            src={image2}
                            className="max-w-3xs rounded-tr-3xl rounded-tl-3xl rounded-br-3xl shadow-2xl border-l-8 border-b-8 border-sky-500"
                        />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-7xl font-bold">The <motion.span animate={{ color: ["#3C65F5", "#3B25C1", "#6ABAA2"], transition: { duration: 5, repeat: Infinity } }}>Easiest Way </motion.span>
                            to Get Your New Job</h1>
                        <p className="py-6">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                            applications every single day

                        </p>
                        <div className="search">
                            <div className="relative sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-3 justify-between shadow-2xl">

                                <input class="bg-white text-base text-gray-400 flex-grow outline-none px-4 " type="text" placeholder="Search Jobs" />

                                <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">


                                    <button className="btn bg-[#3C65F5] text-white rounded-lg px-8 py-6 flex items-center gap-2 text-base">
                                        <svg
                                            version="1.1"
                                            className="h-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 52.966 52.966"
                                            xmlSpace="preserve"
                                            style={{ enableBackground: 'new 0 0 52.966 52.966' }}
                                        >
                                            <path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
      S32.459,40,21.983,40z"
                                            />
                                        </svg>
                                        Search
                                    </button>

                                </div>
                            </div>
                            <ul className="space-y-2 flex gap-1 mt-10">Popular Searches: 
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-600 underline">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;