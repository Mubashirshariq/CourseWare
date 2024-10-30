import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className=" overflow-hidden pt-16 pl-52 bg-gray-900">
                {children}
            </div>
            
        </>
    );
}
