import CourseCard from './courseCard';
import CourseImg from '../assets/download.jpeg';
import Navbar from './navbar';



function Courses(){
    return (
        <div>
           <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <div className="flex flex-wrap justify-start gap-4 p-4">
          <CourseCard className="w-3/4" courseName="Dsa Classes" courseImg={CourseImg} />
          <CourseCard className="w-1/4" courseName="Dsa Classes" courseImg={CourseImg} />
          <CourseCard className="w-1/4" courseName="Dsa Classes" courseImg={CourseImg} />
          <CourseCard className="w-1/4" courseName="Dsa Classes" courseImg={CourseImg} />
          <CourseCard className="w-1/4" courseName="Dsa Classes" courseImg={CourseImg} />
          <CourseCard className="w-1/4" courseName="Dsa Classes" courseImg={CourseImg} />
        </div>
      </div>
    </div>
    );
}

export default Courses;