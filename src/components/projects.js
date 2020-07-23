import React from "react"
import projectsStyles from "./projects.module.css"
import sal from "sal.js"

const Project = props => (
  <div
    data-sal="fade"
    data-sal-duration="300"
    data-sal-easing="ease"
    >
    <div className={projectsStyles.project}>
      <h3 className={projectsStyles.name}>{props.name}</h3>
      <p className={projectsStyles.summary}>{props.summary}</p>
      <a href={props.link} target="_blank">Check it out ></a>
    </div>
  </div>
)

export default ({ children }) => (
  <div className={projectsStyles.container}>
    <div className={projectsStyles.title} id='projects'>
      <h1>PROJECTS</h1>
    </div>
    <div>
      <Project
        name="Good Neighbors Club"
        summary="Rails app created to help support local businesses and foster community during COVID-19"
        link="http://www.goodneighbors.club"
      />
      <Project
        name="Awaken"
        summary="Raspberry Pi integrated web app serving as a daily personal dashboard"
        link="https://github.com/asmarshall/awaken"
      />
      <Project
        name="The Sunflower Queen"
        summary="PSA - not a coding project!! I wrote and illustrated a childrens book :)"
        link="https://www.blurb.com/books/8423501-the-sunflower-queen"
      />
    </div>
  </div>
)
