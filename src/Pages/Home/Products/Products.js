import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowProduct from '../../AllProducts/ShowProduct';
import Loading from '../../Shared/Loading/Loading';

const Products = () => {
    const params = useParams();
    console.log(params.id);

    // const [products, setProducts] = useState([]);
    // const [productLoading, setProductLoading] = useState(false);
    // useEffect(() => {
    //     setProductLoading(true)
    //     if (params.id) {
    //         fetch(`http://localhost:5000/category/${params.id}}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setProducts(data);
    //                 setProductLoading(false)
    //             })
    //             .catch(err => console.log(err))
    //     }
    // }, [params.id])

    // const {data = []} = useQuery({
    //     queryKey: ['products', params.id],
    //     queryFn: async () =>{
    //         const res = await axios.get(`http://localhost:5000/category/${params.id}`);
    //         console.log(res);
    //         return res.data;
    //     }
    // })

    const {data : products = [] } = useQuery({
        queryKey: ['products', params.id],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/category/${params.id}`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })




    return (
        <div className='container mx-auto my-14'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
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