import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        
    }
    return (
        <>
            <Navbar />
        </>
    )
}


export default Layout;