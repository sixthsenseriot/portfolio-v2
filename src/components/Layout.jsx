import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";

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
