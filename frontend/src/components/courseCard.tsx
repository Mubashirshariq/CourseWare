import React from 'react';

interface CourseProps{
    courseName:string,
    courseImg:string,
    className?: string;

}
function CourseCard({ courseName, courseImg, className }:CourseProps) {
  return (
    <div
      className={`${className} bg-gray-800 rounded-lg shadow-lg   transition duration-300 hover:shadow-xl`}
    >
      <img src={courseImg} alt={`${courseName} image`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-indigo-400 mb-2">{courseName}</h3>
        <p className="text-gray-400 mb-4">
          This is a comprehensive course that covers the fundamentals of {courseName}. Learn from
          industry experts and enhance your skills.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg w-full transition duration-200">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
