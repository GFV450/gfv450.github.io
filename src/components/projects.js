import React, {Component} from 'react'
import Project from './single-project'

export default function(props) {
    const projectInfo = [
            {
                projectName: "intellihome",
                src: "../img/project/intellihome.png",
                title: "IntelliHome",
                text: "A curated smart home marketplace where you shop based on features you desire instead of products",
                buttonRef: "shopintellihome.com",
                buttonDesc: "Website"
            },
            {
                projectName: "iChallenge",
                src: "../img/project/Rectangle.png",
                title: "iChallenge",
                text: "An app made for challenging your friends to have new experiences and break their day to day routines",
                buttonRef: "shopintellihome.com",
                buttonDesc: "App Store"
            }
        ]

    return (
        <div className="projectsBox" id="projects" >
            <Project projectArray={projectInfo} />
        </div>
    )
}
