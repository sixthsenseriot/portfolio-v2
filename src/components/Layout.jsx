import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
// import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="AppLayout">
            <TopNavbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
