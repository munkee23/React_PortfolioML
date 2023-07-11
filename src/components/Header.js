import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'


const Header = ()=>{
    return(
       <div className='header'>
        <nav>
            <div className='headShot'>

                </div>
            <ul className='ul-items'>
                <li>
                    <Link to='#'>Home</Link>
                </li>
                <li>
                    <Link to='.about'>About Me</Link>
                </li>
                <li>
                    <Link to='#'>My Works</Link>
                </li>
                <li>
                    <Link to='#'>Experience</Link>
                </li>


           
            </ul>
        </nav>
     
    
       </div> 
    
    )
    };

export default Header