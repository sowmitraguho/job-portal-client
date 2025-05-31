import React, { use } from 'react';
import CategoryCard from '../Shared/CategoryCard.jsx'
import { Box } from '@mui/joy';

const Category = ({ categoriesPromises }) => {

    const allCategories = use(categoriesPromises);

    console.log(allCategories);

    //grid grid-cols-2 md:grid-cols-4 gap-2 bg-base-100
    return (
        <div className="px-12 pt-5 pb-30 bg-base-200">
            <div className='hero-content flex-col w-full text-center bg-base-200 py-10'>
                <h2 className="text-5xl font-bold">Browse by category</h2>
                <p className='text-gray-500 text-xl font-semibold'>Find the job that's perfect for you. about 800+ new jobs everyday</p>
            </div>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1.5,
                    py: 1,
                    overflow: 'auto',
                    width: 1200,
                    scrollSnapType: 'x mandatory',
                    '& > *': {
                        scrollSnapAlign: 'center',
                    },
                    '::-webkit-scrollbar': { display: 'none' },
                }}
            >
                {allCategories.map(catgory => <CategoryCard  orientation="horizontal" size="sm"  key={catgory._id} catgory={catgory}></CategoryCard>)}
            </Box>
        </div>
    );
};

export default Category;