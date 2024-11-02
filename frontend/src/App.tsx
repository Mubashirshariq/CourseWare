import './App.css';
import Home from './components/home';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import CourseForm from './components/CourseForm';
import AdminCourses from './components/admin/admin-courses';

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/admin/login" 
        element={<Login />}
      />
      <Route 
        path="/admin/signup" 
        element={<Register />}
      />
      <Route
        path='/admin/create-course'
        element={
          <Layout>
            <CourseForm />
          </Layout>
        } 
      />
      <Route
      path='/admin/my-courses'
      element={<Layout>
       <AdminCourses/>
      </Layout>}
      />
    </Routes>
  );
}

export default App;
