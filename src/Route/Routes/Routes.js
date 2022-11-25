import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";


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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddAProduct></AddAProduct>
            },
            {
                path : '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/signin',
                element: <SignIn></SignIn>
            }
        ]
    },
    {
        path: '*', 
        element: <PageNotFound></PageNotFound>
    }
]);

export default routes