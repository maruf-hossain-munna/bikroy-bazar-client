import React from 'react';
import bannerImg from '../../../Assests/images/bikroy-login.png';

const HomeTopBanner = () => {
    return (
        <div>
            <div className="  py-12">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2'>
                        <img src={bannerImg} alt='' className="w-3/4 rounded-lg shadow-xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-5xl font-bold">Bikroy Bazar!</h1>
                        <p className="py-6">Hey, This is our Bikroy Bazar website. You can buy any products with reasonable price.  <br />
                            If you want to sell your unnecessary products you can sell post in our site.
                        </p>
                        <h4 className="text-2xl font-semibold mb-4">Happy Resale!!!</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTopBanner;