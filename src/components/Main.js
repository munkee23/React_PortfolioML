import React from 'react'
import './Main.css'
import woman from './images/woman-4063856.jpg'
import pleasureisland from './images/pleasure_island.webp'
import viscious from './images/viscious_cycles.webp'

const Main = () => {
  return (
    <section className='main'>
        <div className='container'>
      
            <div className='content'>
                <h1>Hello, My name is</h1>
                <h1 className='h1-large'>Mary Lanier</h1>
                <p>Welcome to my Web Developer journey...</p>
            </div>
            <div className='image'>
                <img src={woman} alt=""/>
            </div>
    
        </div>
        <div className='container2'>
      
          <div className='about'>
              <p>I am currently in my second year at Wake Tech Community College studying as a WEb Developer.  My skill set includes creating responsive web pages as well as utilizing various frameworks to enhance the pages.</p>
          </div>

  


  </div>
 
    </section>



    
  )
}

export default Main