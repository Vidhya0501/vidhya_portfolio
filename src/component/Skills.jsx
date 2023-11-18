import React from 'react'
import html from '../assets/html5.png'
import css from '../assets/css3.png'
import js from '../assets/javascript.webp'
import reactlogo from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.jpg'
import expressjs from '../assets/expressjs.png'
import mongodb from '../assets/mongodb.png'

function Skills() {
  return (
    <section id="skills">
      <h4>Skills</h4>
      <span className='tech'>Technologies</span>
      <div className='tech-list'>
        <ul>
          <li><img src={html} alt="html5" className='tech-list-item'/></li>
          <li><img src={css} alt="css3" className='tech-list-item'/></li>
          <li><img src={js} alt="js" className='tech-list-item'/></li>
          <li><img src={reactlogo} alt="react" className='tech-list-item'/></li>
          <li><img src={nodejs} alt="NodeJS" className='tech-list-item'/></li>
          <li><img src={expressjs} alt="ExpressJS" className='tech-list-item'/></li>
          <li><img src={mongodb} alt="MongoDB" className='tech-list-item'/></li>
        </ul>
      </div>
    </section>
  )
}

export default Skills