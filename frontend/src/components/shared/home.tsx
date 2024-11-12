import React from "react";
import StudentCard from "./userCard";
import CourseAdminCard from "./adminCard";

export default function MainHome(){
    return(
        <div className="min-h-screen transform transition-all ease-in-out duration-200 bg-gradient-to-br from-gray-700 via-gray-800 to-slate-900 flex md:flex-row flex-col justify-center items-center gap-6">
            <StudentCard/>
            <CourseAdminCard/>
        </div>
        
    )
}