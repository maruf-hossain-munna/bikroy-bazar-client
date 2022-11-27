import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders , isLoading} = useQuery({
        queryKey: ['myOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingProducts?email=${user?.email}`)
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='container mx-auto'>
            <h2 className="my-8 text-center text-3xl font-semibold">My Orders</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th> Product Name</th>
                            <th>  Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, i) => <tr key={order._id}>
                                <th> {i + 1} </th>
                                <td> {order.productName} </td>
                                <td> {order.price} </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;