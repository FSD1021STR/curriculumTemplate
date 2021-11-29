import React from "react";
import "./curriculum.css"

function Icons (props) {
    console.log(props)
    return(
        <div className="techIcon">
            <h3 className="tech">{props.tech}</h3>
            <div>
                <img className="icon" src={props.icon}/>
            </div>
        </div>
    )
}

export default Icons;






