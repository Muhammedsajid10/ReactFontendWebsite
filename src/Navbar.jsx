import React from 'react'
import './Nav.css'
import './HeadingSect'
import './Article'

function Navbar() {
  return (
    <div>
        <header>
            <ol className='navBar'>
                <li><h2>Sporty</h2></li>
                <li><a href="#img">Home</a></li>
                <li><a href="#heading">UpcomingProducts</a></li>
                <li><a href="#Article"> About us</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ol>
            
        </header>
        
    </div>
  )
}

export default Navbar