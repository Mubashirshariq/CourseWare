import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className=" bg-gray-900 pt-24 pl-14 md:pl-48 flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
