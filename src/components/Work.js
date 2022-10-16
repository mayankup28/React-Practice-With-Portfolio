import "./Work.css"

import React from 'react'
import WorkCard from "./WorkCard"
import Workdata from "./Workdata"

function Work() {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
            {Workdata.map((ele,ind)=>{
                return(
                    <WorkCard
                    key={ind} 
                    imgsrc={ele.imgsrc}
                    title={ele.title}
                    text={ele.text}
                    view={ele.view}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default Work