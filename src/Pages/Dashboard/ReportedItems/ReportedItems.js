import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const ReportedItems = () => {
    const params = useParams();
    console.log(params.id);

    const {data : reportedProducts } = useQuery({
        queryKey : ['repotedItems'],
        queryFn: async () =>{
            const res = await fetch(`https://bikroy-bazar-server-maruf21hossain.vercel.app/reported`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='container mx-auto'>
            <h2 className="text-4xl text-center divider font-semibold mb-12">Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product Image </th>
                            <th> Product Name</th>
                            <th>Seller Name</th>
                            <th>Reported Count</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reportedProducts?.map((reportedProduct, i) => <tr key={reportedProduct._id}>
                                <th> {i+1} </th>
                                <td> <img className='w-20 h-20 rounded-full' src={reportedProduct.image} alt="" /> </td>
                                <td> {reportedProduct.productName} </td>
                                <td> {reportedProduct.name} </td>
                                <td> {reportedProduct.reportedCount} </td>
                                
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;