import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AdvertiseProduct from './AdvertiseProduct/AdvertiseProduct';
import ShowProduct from './ShowProduct';

const AllProducts = () => {

    const {data : products, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            return data 
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto my-16'>
            <h3 className="text-4xl text-center font-semibold text-blue-600 mb-8"> Advertise Product </h3>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products?.map( product => <AdvertiseProduct
                        key={product._id}
                        product={product}
                    ></AdvertiseProduct> )
                }
            </div>
        </div>
    );
};

export default AllProducts;