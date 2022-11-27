import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/seller')
            const data = await res.json()
            return data;

        }
    })

    const handleDelete = (seller) =>{
        console.log(seller._id);
        fetch(`http://localhost:5000/user/seller/${seller._id}`, {
            method: 'DELETE', 
            
        })
        .then(res => res.json())
        .then( data =>{
            console.log(data)
        })
    }

    return (
        <div className='container mx-auto'>
            <h2 className='my-8 text-center text-3xl font-semibold'>All Sellers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th> Seller Name</th>
                            <th> Seller Email</th>
                            <th> Verify </th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th> {i+1} </th>
                                <td> {seller.name} </td>
                                <td> {seller.email} </td>
                                <td> <button className='btn btn-xs btn-primary'>Verify</button> </td>
                                <td> <button onClick={() => handleDelete(seller)} className='btn btn-xs'>Delete</button> </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;