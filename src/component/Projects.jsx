import React from 'react'
import Card from './Card'

function projects() {
  const projectData=[
    {
      image:"https://res.cloudinary.com/dwnymc8jy/image/upload/v1711529730/project-images/Dice_Game_okwzfk.png",
      name:"Dice Game",
      description:"Two player dice game using DOM ",
      link:"https://vidhya-dice-game.netlify.app/"
    },
    {
        image:"https://res.cloudinary.com/dwnymc8jy/image/upload/v1711530200/project-images/notes_app_utjyg7.png",
        name:"Notes App",
        description:"Notes App using Router and Context API",
        link:"https://vermillion-biscotti-289947.netlify.app/"
    },
    {
        image:"https://res.cloudinary.com/dwnymc8jy/image/upload/v1711530713/project-images/Food_survey_jbvqjf.png",
        name:"Favourite Food Survey Form",
        description:"Favourite food survey form using DOM.",
       link:"https://favourite-food-survey-form-vidhya.netlify.app/"
    },
    {
      image:"https://res.cloudinary.com/dwnymc8jy/image/upload/v1711530858/project-images/calculator_kc0df2.png",
      name:"Calculator",
      description:"Simple Calculator using DOM.",
      link:"https://simple-calculator-vidhya.netlify.app/"
    },
    {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
        name:"Automation Test Engineer Resume: 10 Important Things To Consider",
        description:"The world is moving towards automating the testing of products in order to increase work efficiency.",
        footerText:"01 December 2023  No Comments"
    },
    {
        image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1536x804.webp",
        name:"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
        description:"The world is moving towards modernization leading to an increase in the popularity of civil engineering. ",
        footerText:"1 December 2023  No Comments"
    }

  ]
  return (
    <>
    <div className="container-fluid bg-dark project p-5">
    <section id="projects" className='bg-dark text-white p-5'>
    <h4 className='fst-italic fw-bold fs-4 text-center heading mt-5 pt-5'>PROJECTS</h4>
            <div className="row p-5 m-5">
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