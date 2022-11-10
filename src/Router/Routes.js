import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import ServicesDetails from "../Pages/ServicesDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MyReview from "../Pages/MyReview";

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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),

                // loader: ({ params }) => fetch(`http://localhost:5000/reviews?service=${params.id}`)
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
                path: '/my-review',
                element: <MyReview></MyReview>
            }
        ]
    }
])