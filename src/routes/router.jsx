import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AdventureDetails from "../Pages/AdventureDetails";
import Profile from "../Pages/Profile";
import Update from "../Pages/Update";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ConditionalRoute from "./ConditionalRoute";
import TitleProvider from "../providers/TitleProvider";
import ForgetPassword from "../Pages/ForgetPassword";
import MailProvider from "../providers/MailProvider";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
            },
            {
                path: "/Details/:adventure",
                element: <PrivateRoute> <AdventureDetails></AdventureDetails> </PrivateRoute>,
                loader: () => fetch('../categories.json'),
            },
            {
                path: "/profile",
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute> ,
            },
            {
                path: "/update",
                element: <PrivateRoute> <Update></Update> </PrivateRoute> ,
            },
        ]
    },
    {
        path: "auth/login",
        element: <MailProvider> <TitleProvider><ConditionalRoute><Login></Login></ConditionalRoute></TitleProvider> </MailProvider>,
    },
    {
        path: "auth/signup",
        element: <TitleProvider><ConditionalRoute><SignUp></SignUp></ConditionalRoute></TitleProvider> ,
    },
    {
        path: "auth/resetPassword",
        element: <MailProvider><TitleProvider><ConditionalRoute><ForgetPassword></ForgetPassword></ConditionalRoute></TitleProvider></MailProvider> ,
    },


])

export default router;