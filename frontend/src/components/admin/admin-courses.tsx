
import { useEffect, useState } from 'react';
import CourseCard from './courseCard';
import axios from 'axios';

const api = "http://localhost:3000/admin/courses";
type Tcourse={
  title:string,
  description:string,
  price:number,
  imageUrl:string,
  published:boolean,
  userId:number,
}

function AdminCourses() {
    const token=localStorage.getItem("jwt_token");
    const [courses,setCourses]=useState<Tcourse[]>();
    useEffect(()=>{
        async function fetchCourses(){
            try {
                const resp=await axios.get(api,{
                    headers:{
                        Authorization:token
                    }
                });
                setCourses(resp.data.courses);
            } catch (error) {
                console.log("error occured while creating courses")
            }
        }
       fetchCourses();
    },[])

  return (
    <div className=" text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-400">
        My Courses
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {courses && courses.map((course)=>{
          return <CourseCard className="w-full sm:w-1/2 lg:w-1/4" courseName={course.title}  courseImg={course.imageUrl} courseDesc={course.description} coursePrice={course.price}/>
        })}
      </div>
    </div>
  );
}

export default AdminCourses;
