import { AspectRatio, Box, Typography } from '@mui/joy';
import React from 'react';

const CategoryCard = ({ catgory }) => {
    const { category, jobs_available } = catgory;
    return (
        <>
            <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
                <div className='card bg-base-100 shadow-sm p-4 border-2 border-gray-500'>
                    <h2 className="card-title text-2xl">{category}</h2>
                    <p className="">{jobs_available}</p>

                </div>
            </Box>
        </>
    );
};

export default CategoryCard;