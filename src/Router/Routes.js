import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import ServicesDetails from "../Pages/ServicesDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MyReview from "../Pages/MyReview";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Blog from "../Pages/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/services',

                element: <Services />
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({ params }) => fetch(`https://assing11-server.vercel.app/services/${params.id}`),
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog />
            },

            {
                path: '/my-review',
                element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
            }
        ]
    }
])