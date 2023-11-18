import React from 'react'
import {Link} from 'react-scroll'


function Navbar() {
  return <>
        <div className="nav">
                <h2 className="logo">Vidhya</h2>
            
            <div className="nav-menu">
                <Link className='nav-menu-list-item'>Home</Link>
                <Link className='nav-menu-list-item'>Skills</Link>
                <Link className='nav-menu-list-item'>Projects</Link>
                <Link className='nav-menu-list-item'>Contact</Link>
            </div>

        </div>
       
  </>
}

export default Navbar