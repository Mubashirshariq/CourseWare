import './App.css';
import Courses from './components/Courses';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CourseForm from './components/CourseForm';

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <Courses />
          </Layout>
        } 
      />
      <Route 
        path="/login" 
        element={<Login />}
      />
      <Route 
        path="/signup" 
        element={<Register />}
      />
      <Route
        path='/create-course'
        element={
          <Layout>
            <CourseForm />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;
