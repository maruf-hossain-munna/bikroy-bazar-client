import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const ReportedItems = () => {
    const params = useParams();
    console.log(params.id);

    // const {data } = useQuery({
    //     queryKey : ['repotedItems'],
    //     queryFn: async () =>{
    //         const res = await fetch(`http://localhost:5000/reported/${params.id}`)
    //     }
    // })
    return (
        <div className='container mx-auto'>
            <h2 className="text-4xl text-center divider font-semibold">Reported Items</h2>
        </div>
    );
};

export default ReportedItems;