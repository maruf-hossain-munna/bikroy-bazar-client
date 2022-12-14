import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import useBuyer from '../../../Hooks/useBuyer';
import useSeller from '../../../Hooks/useSeller';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    console.log(isSeller, isBuyer, isAdmin)
    // console.log(user);
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center divider'>My Dashboard</h2>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold">

                        {
                            isBuyer && <>
                                <li> <Link to='/myOrders'>My Orders</Link>  </li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li> <Link to='addProducts'>Add A product</Link>  </li>
                                <li> <Link to='myProducts'>My Products</Link>  </li>
                                <li> <Link to=''>My buyers</Link>  </li>
                            </>
                        }


                        {
                            isAdmin && <>
                                <li> <Link to='allusers'>All Users</Link>  </li>
                                <li> <Link to='allseller'>All Sellers</Link>  </li>
                                <li> <Link to='allBuyer'>All Buyers</Link>  </li>
                                <li> <Link to='reportedItemd'>Reported Items</Link>  </li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;