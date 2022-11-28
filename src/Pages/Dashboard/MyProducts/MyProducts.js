import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    // const {data } = useQuery({
    //     queryKey : ['myProducts', user?.email],
    //     queryFn : async () =>{
    //         const res = await fetch(`https://bikroy-bazar-server-maruf21hossain.vercel.app/products/${user?.email}`);
    //         const data = await res.json();
    //         console.log(data);
    //         return data
    //     }
    // })
    
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold divider">My Products</h2>
        </div>
    );
};

export default MyProducts;