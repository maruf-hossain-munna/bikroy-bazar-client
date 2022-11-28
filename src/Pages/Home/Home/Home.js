import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AllProducts from '../../AllProducts/AllProducts';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeTopBanner from './HomeTopBanner';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div className='container mx-auto'>

            <HomeBanner></HomeBanner>
            
            <AllProducts></AllProducts>

            <div className='my-14 mt-20'>
                <h2 className="text-4xl text-center text-blue-600 mb-10 font-semibold divider">All Categories</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        categories.map(category => <p key={category._id}>
                            <Link to={`/category/${category.categoryId}`} className='btn btn-ghost bg-base-300 w-full h-20 hover:shadow-xl text-xl'> {category.categoryName} </Link>
                        </p>)
                    }
                </div>
            </div>

            <HomeTopBanner></HomeTopBanner>
        </div>
    );
};

export default Home;