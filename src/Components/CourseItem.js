import React from "react"
import ListOfSkills from "./ListOfSkills"
import ListOfLessons from "./ListOfLessons"
import Rating from "react-rating"
import {Link } from "react-router-dom"
import ReactHlsPlayer from 'react-hls-player';

export default function CourseItem(props) {
    
    let skillsArray = props.course.meta?.skills?.map((skill, index) => <ListOfSkills key={index} skill={skill} />) 
    let lessonsArray = props.course.lessons?.map((lesson, index) => <ListOfLessons key={index} lesson={lesson} />) 
    let unlockedLessons = props.course.lessons?.filter(item => item.status !== "locked")
    console.log(props.course);
    
    return(
        <div className="flex flex-col w-full py-2 border-2 border-blue-300 mt-2 gap-4">
            <div className="flex w-full gap-4">
                <div className="w-1/3 my-auto px-1">
                    <img src={props.course.previewImageLink + '/cover.webp'} alt="CourseImage"></img>
                </div>
                <div className="px-2 min-h-full w-1/3 flex flex-col justify-between">
                    <div>
                        <Link to={'/course/' + props.course.id} className="text-blue-600 text-3xl">
                            {props.course.title}
                        </Link>
                        <p>{props.course.description}</p>
                    </div>
                    <div className="flex mt-10">
                        <p className="pb-2 font-bold">Course rating: </p>
                        <Rating
                            initialRating={props.course.rating}
                            readonly
                        />
                    </div>
                    <div className="font-bold">
                        Number of unlocked lessons: {props.course.lessonsCount || unlockedLessons?.length}
                    </div>
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                    <p className="text-center text-xl font-bold">Skills:</p>
                    {skillsArray || "No information :( "}
                </div>
            </div>
                {lessonsArray ?
                    <div className="flex">
                        <div className="w-1/3 flex flex-col justify-center">
                            <p className="text-center text-xl font-bold">All lessons of this course:</p>
                            {lessonsArray}
                        </div>
                        <div className="border-2 border-slate-300 w-full">
                        {props.course.meta.courseVideoPreview
                            &&
                            <ReactHlsPlayer
                                src={props.course.meta.courseVideoPreview.link}
                                autoPlay={false}
                                controls={true}
                                width="100%"
                                height="auto"
                                className="w-2/3 mx-auto"
                            />
                        }
                        </div>
                    </div>
                : ""}
            </div>
    )
}
