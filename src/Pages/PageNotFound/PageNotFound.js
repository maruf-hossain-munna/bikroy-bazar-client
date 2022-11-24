import React from 'react';
import PageNotFoundImg from '../../Assests/images/404-image.jpg';

const PageNotFound = () => {
    return (
        <div className='w-full'>
            <img className='w-full' src={PageNotFoundImg} alt="" />
        </div>
    );
};

export default PageNotFound;