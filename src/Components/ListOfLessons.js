import React from "react"
import { Link } from "react-router-dom"
import lesson from "../img/icons8-laptop-play-video-50.png"

export default function ListOfLessons(props) {
    return (
        <div>
            <Link to={props.lesson.link} className="py-1 flex">
                <img src={props.lesson.previewImageLink + '/' + props.lesson.order + '.webp'} alt="--" width="20" height="20" />{props.lesson.title}
            </Link>
        </div>
    )
}
