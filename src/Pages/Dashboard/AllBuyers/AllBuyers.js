import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user/buyer')
            const data = await res.json()
            return data;

        }
    })
    return (
        <div className='container mx-auto'>
            <h2 className='my-8 text-center text-3xl font-semibold'>All Buyers</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th> Buyer Name</th>
                            <th> Buyer Email</th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th> {i+1} </th>
                                <td> {buyer.name} </td>
                                <td> {buyer.email} </td>
                                <td> <button  className='btn btn-xs'>Delete</button> </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;