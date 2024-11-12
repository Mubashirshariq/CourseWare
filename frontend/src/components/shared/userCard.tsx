
import React from 'react';
import studentImg from '../../assets/student.jpeg'
import { useNavigate } from 'react-router-dom';

const StudentCard = () => {
  const navigate=useNavigate();
  return (
    <div
      className="block m-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">Student</h3>
        <img src={studentImg} alt="Student illustration" className="mb-4 mx-auto w-56 h-56  object-cover" />
        <p className="text-gray-700 font-semibold">Access courses, assignments, and more.</p>
        <button className='bg-blue-600 p-4 m-2 rounded-lg text-white shadow-lg' 
        onClick={()=>{
          navigate('/admin')
        }}>Go to Student Dashboard</button>
      </div>
    </div>
  );
};

export default StudentCard;
