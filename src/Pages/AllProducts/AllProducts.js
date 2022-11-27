import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
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
        <div className='container mx-auto'>
            {/* <div className='grid grid-cols-3 gap-10'>
                {
                    products?.map( product => <ShowProduct
                        key={product._id}
                        product={product}
                    ></ShowProduct> )
                }
            </div> */}
        </div>
    );
};

export default AllProducts;