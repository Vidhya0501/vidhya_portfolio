import React from 'react'
import vid from '../assets/Vid_img.jpg'

function Home() {
  return <>
        <section id="home">
            <div className="home-text">
                <h3>Hi,</h3>
                <p>I'm <span className='name'> Vidhya</span>. <br/> 
                An enthusiastic <span className='role'>MERN Stack Developer.</span></p>
            </div>

            <div className="home-img">
                <img src={vid} alt="MyImage" className='myImage'></img>
            </div>
        </section>
  
  </>
}

export default Home