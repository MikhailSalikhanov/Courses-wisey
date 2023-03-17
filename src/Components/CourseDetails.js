import React from "react"
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CourseItem from "./CourseItem";

export default function CourseDetails() {
    const params = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMmU3YzA2Ny1lNzUxLTQ3ZDMtYWU2Yi1iYTNlZTFjYjNlOTQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5NzQ5OTEsImV4cCI6MTY3OTg3NDk5MX0.qeEWreLnwmldy_gfWzR1UYu0KAzJZiDthPMThWwMU9o"
    const url = 'http://api.wisey.app/api/v1/core/preview-courses/' + params.courseId
    // fetch("http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       token = result.token
    //     }
    //   )
    //   .catch(error => console.log('Authorization failed : ' + error.message));
  
useEffect(() => {
  fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,  
    }
  })
    .then(res => res.json())
        .then(
          (result) => {
            setCourseDetails(result)    
          }
        )
    .catch(error => console.log('Something went wrong: ' + error.message));
  }, [url])

    return(
        <div>
            <nav className="flex items-center justify-center pb-4">
                <div className="text-6xl text-blue-600 hover:text-blue-800"><Link to="/">Main page (all courses)</Link></div>
            </nav>
            <CourseItem course={courseDetails} />          
        </div>
    )
}
