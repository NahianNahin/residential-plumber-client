import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddReview from "../pages/AddReview/AddReview";
import EditReview from "../pages/EditReview/EditReview";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/Services/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services/Services";
import Signup from "../pages/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: `/services/:id`,
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: `/add_reviews/:id`,
                element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: `/edit_reviews/:id`,
                element: <EditReview></EditReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path: '/my_reviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    
]);

export default router;