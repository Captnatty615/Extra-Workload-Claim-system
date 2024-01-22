import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import Claim from "./views/Claim.jsx";
import Submit from "./views/Submit.jsx";
import Personal from "./views/Personal.jsx";
import Status from "./views/Status.jsx";
import Edit from "./views/Edit.jsx";
import AddUsers from "./components/admin/AddUsers.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Users from "./components/admin/Users.jsx";
import ViewClaims from "./components/admin/ViewClaims.jsx";
import SignUp from "./views/SignUp.jsx"
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import MasterLayout from "./admin/MasterLayout.jsx";


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
        element: <MasterLayout />,
        children: [
            {
                path: '/AddUsers',
                element: <AddUsers />
            },
            {
                path: '/Dashboard',
                element: <Dashboard />
            },
            {
                path: '/Users',
                element: <Users />
            },
            {
                path: '/ViewClaims',
                element: <ViewClaims />
            }
        ]
    },
    {
        path: '/Edit',
        element: <Edit />
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