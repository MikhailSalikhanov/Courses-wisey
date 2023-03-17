import React from "react"
import skill from "../img/icons8-brainstorm-skill-50.png"

export default function ListOfSkills(props) {
    return (
        <div className="py-1 flex">
            <img src={skill} alt="icon" width="20" height="20" />{props.skill}
        </div>
    )
}
