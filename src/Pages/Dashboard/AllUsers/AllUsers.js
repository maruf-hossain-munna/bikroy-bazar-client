import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data;

        }
    });


    const handleMakeAdmin  = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method :'PUT',
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Make admin successful');
                refetch();
            }
        })
    }

    return (
        <div className='container mx-auto'>
            <h2 className='my-8 text-center text-3xl font-semibold'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th> {i+1} </th>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> { user?.role !== 'admin' &&  <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary font-semibold '>Make Admin</button>} </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;