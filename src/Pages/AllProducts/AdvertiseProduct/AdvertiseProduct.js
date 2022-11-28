import React from 'react';

const AdvertiseProduct = ({product}) => {
    const { name, productName, image, phone, description, location, _id, price, usedMonth, condition, createDate } = product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img className='w-1/2 bg-cover' src={image} alt="Shoes" /></figure>
                <div className="card-body mt-16">
                    <h2 className="card-title text-4xl"> {productName}</h2>
                    <p className='text-lg font-semibold'>Only {price}$ </p>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;