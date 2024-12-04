import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TitleProvider from "../providers/TitleProvider";


const Root = () => {
    
    return (
        <div className="min-h-screen overflow-hidden">
            <TitleProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </TitleProvider>
        </div>
    );
};

export default Root;