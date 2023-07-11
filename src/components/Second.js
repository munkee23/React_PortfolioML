import React from 'react'
import './Second.css'
import woman from './images/woman-4063856.jpg'
import pleasureisland from './images/pleasure_island.webp'
import viscious from './images/viscious_cycles.webp'
import wpport from './images/wordpressport.jpg'
import logo from './images/mary-anne-lanier-3-3.webp'

const Second = () => {
  return (
    <section className='main'>
        <div className='container'>
        <h1>My Works</h1>
                <div class="row">
                    <div class="column">
                        <img src={pleasureisland} alt=""/>
                    </div>
                    <div class="column">
                        <img src={viscious} alt=""/>
                    </div>
                    <div class="column">
                        <img src={wpport} alt=""/>
                    </div>
                </div>
                

        </div>
 
    </section>
  )
}

export default Second;