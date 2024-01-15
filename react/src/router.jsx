import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import Claim from "./views/Claim.jsx";
import Submit from "./views/Submit.jsx";
import Personal from "./views/Personal.jsx";
import Status from "./views/Status.jsx";
import Edit from "./views/Edit.jsx";
import ViewClaims from "./views/ViewClaims.jsx";
import Lecturers from "./views/Lecturers.jsx";
import SignUp from "./views/SignUp.jsx"
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import AdminLayout from "./views/Lecturers.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/Login',
                element: <Login />
            },
            {
                path: 'Signup',
                element: <SignUp />
        
            },
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/Lecturers',
                element: <Lecturers />
            },
            {
                path: '/ViewClaims',
                element: <ViewClaims />
            },
        ]
    },
    {
        path: '/Edit',
        element: <Edit />
    },
    {
        path: '/ViewClaims',
        element: <ViewClaims />
    },
    
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/Status',
                element: <Status />
            },
            {
                path: '/Submit',
                element: <Submit />
            },
            {
                path: '/Claim',
                element: <Claim />
            },
            {
                path: '/Personal',
                element: <Personal />
            }
        ]
    },
   
    

])

export default router;