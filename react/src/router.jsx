import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import Submit from "./views/Submit.jsx";
import Claim from "./views/Claim.jsx";
import Personal from "./views/Personal.jsx";
import Status from "./views/Status.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/Login',
        element: <Login />
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
                path: '/supportingDocuments',
                element: <supportingDocuments />
            },
            {
                path: '/Personal',
                element: <Personal />
            }
        ]
    }
    

])

export default router;