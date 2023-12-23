import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NewTasks from "../pages/NewTasks/NewTasks";
import Alltasks from "../pages/AllTask/AllTasks";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    {

        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Alltasks></Alltasks>
            },
            {
                path: '/dashboard/newtask',
                element: <NewTasks></NewTasks>
            }
        ]

    }
]);