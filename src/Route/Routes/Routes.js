import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIn from "../../Pages/Login/SignIn/SignIn";
import SignUp from "../../Pages/Login/SignUp/SignUp";


const routes = createBrowserRouter ([
    {
        path: '/',
        element : <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
    }
]);

export default routes