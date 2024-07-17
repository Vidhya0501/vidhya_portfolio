import React from 'react'
import Card from './Card'
import {projectData} from './data/projectData'
function Projects() {
 
  return (
    <>
    <div className="container-fluid bg-dark bg-image project p-5 text-white" id="projects">
   
    <h4 className='fst-italic fw-bold fs-4 text-center heading mt-5 pt-5'>PROJECTS</h4>
            <div className="row pt-3">
            {
          projectData.map((project)=>{
            return <Card data={project}/>
          })
        }
            </div>
            
        </div>
    </>
    
  )
}

export default Projects