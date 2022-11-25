import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HomeTopBanner from './HomeTopBanner';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div className='container mx-auto'>
            <HomeTopBanner></HomeTopBanner>

            <div className='mb-14'>
                <h2 className="text-3xl text-center mb-10 font-semibold">Categories</h2>
                <div className='grid grid-cols-4'>
                    {
                        categories.map(category => <p key={category._id}>
                            <Link className='btn btn-ghost text-xl'> {category.categoryName} </Link>
                        </p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;