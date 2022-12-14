import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowProduct from '../../AllProducts/ShowProduct';
import Loading from '../../Shared/Loading/Loading';

const Products = () => {
    const params = useParams();
    console.log(params.id);


    // const {data = []} = useQuery({
    //     queryKey: ['products', params.id],
    //     queryFn: async () =>{
    //         const res = await axios.get(`https://bikroy-bazar-server-maruf21hossain.vercel.app/category/${params.id}`);
    //         console.log(res);
    //         return res.data;
    //     }
    // })

    const { data: products = [] } = useQuery({
        queryKey: ['products', params.id],
        queryFn: async () => {
            const res = await fetch(`https://bikroy-bazar-server-maruf21hossain.vercel.app/category/${params.id}`);
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })




    return (
        <div className='container mx-auto my-14'>
            <h2 className="text-4xl text-center text-blue-600 my-12 font-semibold divider">Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12'>
                {
                    products.map(product => <ShowProduct
                        key={product._id}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default Products;