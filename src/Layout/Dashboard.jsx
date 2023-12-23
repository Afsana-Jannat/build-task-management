import { FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-red-300">
                <ul className="menu p-4 flex flex-col gap-2 font-bold text-white">
                    <li>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-15 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <li>
                                <button className="btn btn-sm btn-ghost">
                                    {user?.displayName}
                                </button>
                            </li>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/">
                            <FaList></FaList>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            <FaList></FaList>
                            All Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/newtask">
                            <FaList></FaList>
                            New Tasks</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;