import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
