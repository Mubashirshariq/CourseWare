import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface Course {
  title: string;
  description: string;
  price: number;
  CourseImg: FileList;
  published: string;
}

const api = "http://localhost:3000/admin/create-course";

export default function CourseForm() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm<Course>();
  const token = localStorage.getItem("jwt_token");

  async function createCourse(data: Course) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("published", data.published);
    
    if (data.CourseImg && data.CourseImg.length > 0) {
      formData.append("CourseImg", data.CourseImg[0]);
    }

    try {
      const response = await axios.post(api, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Course Created");
      console.log("response", response);
      reset();
    } catch (error) {
      toast.error("Error occurred while creating a course");
      console.log("error", error);
    }
  }

  return (
    <div className="max-w-md max-h-screen mx-auto mt-10 p-6 bg-slate-500 shadow-lg rounded-lg">
      <Toaster />
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create New Course</h2>
      <form onSubmit={handleSubmit(createCourse)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="Description"
            {...register("description", { required: "Description is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: "Price is required", valueAsNumber: true })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <input
            type="file"
            {...register("CourseImg", { required: "Image link is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.CourseImg && <p className="text-red-500 text-sm mt-1">{errors.CourseImg.message}</p>}
        </div>

        <div>
          <select
            {...register("published", { required: "Published status is required" })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Published Status</option>
            <option value="true">Published</option>
            <option value="false">Unpublished</option>
          </select>
          {errors.published && <p className="text-red-500 text-sm mt-1">{errors.published.message}</p>}
        </div>
        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Create Course
        </button>
      </form>
    </div>
  );
}
