import { useEffect, useState } from 'react';
import CourseItem from './CourseItem';
import PaginatedItems from './Pagination';

function AllCourses() {
  const [allCourses, setallCourses] = useState([]);
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMmU3YzA2Ny1lNzUxLTQ3ZDMtYWU2Yi1iYTNlZTFjYjNlOTQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NzQ5OTEsImV4cCI6MTY3OTg3NDk5MX0.qeEWreLnwmldy_gfWzR1UYu0KAzJZiDthPMThWwMU9o"

    // fetch("http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       token = result.token
    //     }
    //   )
    //   .catch(error => console.log('Authorization failed : ' + error.message));
  
useEffect(() => {
  fetch("http://api.wisey.app/api/v1/core/preview-courses", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,  
    }
  })
    .then(res => res.json())
        .then(
          (result) => {
            setallCourses(result.courses)
          }
        )
    .catch(error => console.log('Something went wrong: ' + error.message));
  }, [])

  let courseTitlesArray = allCourses.map((course, index) => <CourseItem key={index} course={course} />) 

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className=" flex flex-col justify-center items-center w-3/4">
        <h1 className='text-6xl'>All courses</h1>
        <PaginatedItems itemsPerPage={10} items={courseTitlesArray} />
      </div>
    </div>
  );
}

export default AllCourses;
