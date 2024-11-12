
import React from 'react';
import teacherImg from '../../assets/teacher.jpeg'
import { useNavigate } from 'react-router-dom';
const CourseAdminCard = () => {
  const navigate=useNavigate();
  return (
    <div
  
      className="block mb-8 md:m-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:bg-green-50 transition-transform transform hover:scale-105"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-2">Course Admin</h3>
        <img src={teacherImg} alt="teacher img" className='mb-4 mx-auto w-56 h-56  object-cover' />
        <p className="text-gray-700 font-semibold">Manage courses, students, and content.</p>
        <button className='bg-blue-600 p-4 m-2 rounded-lg text-white shadow-lg' onClick={()=>{
          navigate('/admin')
        }}>Go to Admin Dashboard</button>
      </div>
    </div>
  );
};

export default CourseAdminCard;
