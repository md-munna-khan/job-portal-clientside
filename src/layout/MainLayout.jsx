import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto my-10">
            <nav>
<Navbar></Navbar>
            </nav>
            <main>
<Outlet></Outlet>
            </main>
            <footer>
<Footer></Footer>
            </footer>
            
        </div>
    );
};

export default MainLayout;