import React from "react";


function CourseCard(props){
    return(
        <div className=" w-80 h-96  flex flex-col border border-sky-500">
            <img src={props.courseImg} alt="CourseImg"  className="p-2"/>
            <h1 className="text-xl p-2">{props.courseName}</h1>
            <button className="bg-amber-400 p-2 m-2 rounded-lg">View Course</button>
        </div>
    );
}

export default CourseCard;