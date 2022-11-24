import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeTopBanner from './HomeTopBanner';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div className='container mx-auto'>
            <HomeTopBanner></HomeTopBanner>

            <div >
                {
                    categories.map( category =>  <p> { category.category} </p>)
                }
            </div>
        </div>
    );
};

export default Home;