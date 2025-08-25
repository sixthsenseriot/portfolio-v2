import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";

// Layout wrapper for persistend UI like the navbar
// Outlet here, changes the route

const Layout = () => {
    return (
        <div className="Layout">
            <TopNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
