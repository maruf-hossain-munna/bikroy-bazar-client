import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import AdvertiseProduct from './AdvertiseProduct/AdvertiseProduct';
import ShowProduct from './ShowProduct';

const AllProducts = () => {

    const {data : products, isLoading} = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch('https://bikroy-bazar-server-maruf21hossain.vercel.app/products')
            const data = await res.json()
            return data 
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto my-16'>
            <h2 className="text-4xl text-center text-blue-600 mb-12 font-semibold divider"> Advertise Product</h2>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
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