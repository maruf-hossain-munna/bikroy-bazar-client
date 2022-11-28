import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blogs from "../../Pages/Blogs/Blogs";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


const routes = createBrowserRouter ([
    {
        path: '/',
        element : <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/category/:id',
                element: <Products></Products>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute> <AddAProduct></AddAProduct> </SellerRoute> 
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute> <MyProducts></MyProducts> </SellerRoute> 
            },
            {
                path: '/myOrders',
                element: <BuyerRoute> <MyOrders></MyOrders> </BuyerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
                loader : () => fetch('http://localhost:5000/users')
            },
            {
                path: '/dashboard/allseller',
                element : <AdminRoute> <AllSellers></AllSellers> </AdminRoute> 
            },
            {
                path: '/dashboard/allBuyer',
                element : <AdminRoute> <AllBuyers></AllBuyers> </AdminRoute>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            },
            {
                path : '/allProducts',
                element : <AllProducts></AllProducts>
            }
        ]
    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
]);

export default routes