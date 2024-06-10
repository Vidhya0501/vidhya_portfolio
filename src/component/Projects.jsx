import React from 'react'
import Card from './Card'
import {projectData} from './data/projectData'
function projects() {
 
  return (
    <>
    <div className="container-fluid bg-dark project p-5">
    <section id="projects" className='bg-dark text-white p-5'>
    <h4 className='fst-italic fw-bold fs-4 text-center heading mt-5 pt-5'>PROJECTS</h4>
            <div className="row pt-3">
            {
          projectData.map((project)=>{
            return <Card data={project}/>
          })
        }
            </div>
            </section>
        </div>
    </>
    
  )
}

export default projects