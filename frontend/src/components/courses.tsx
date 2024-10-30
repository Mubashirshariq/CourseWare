// Courses.js
import CourseCard from './courseCard';
import CourseImg from '../assets/download.jpeg';

function Courses() {
  return (
    <div className=" bg-gray-900 text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">
        Explore Our Courses
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="DSA Classes" courseImg={CourseImg} />
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="Web Development" courseImg={CourseImg} />
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="Machine Learning" courseImg={CourseImg} />
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="Data Science" courseImg={CourseImg} />
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="Cybersecurity" courseImg={CourseImg} />
        <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName="AI & Robotics" courseImg={CourseImg} />
      </div>
    </div>
  );
}

export default Courses;
