import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen rounded-2xl" style={{ backgroundImage: `url("https://i.ibb.co/0hQTKdC/images.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-white uppercase font-bold">Join Our Bikroy Bazar </h1>
                        <h2 className="text-4xl">checked</h2>
                        <h1 className="mb-5 text-5xl text-blue-700 uppercase font-bold">RESELL SHOP IN BD </h1>
                        <p className="mb-5 text-xl">You can choose your any necessary here in cheap price without any hassles. <br />
                            And You can sell your unnecessary products. 
                        </p>
                        <Link to='/signup'><button className="btn btn-primary px-12 text-lg mt-6"> Join Us</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;