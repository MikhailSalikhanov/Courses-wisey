import CourseDetails from './Components/CourseDetails';
import AllCourses from './Components/AllCourses';
import {Routes, Route, Link } from "react-router-dom"

function App() {
  return (
     <Routes>
          <Route path='/' element={<AllCourses />} />
          <Route path='/course/:courseId' element={<CourseDetails/>} />
      </Routes> 
  );
}

export default App;
