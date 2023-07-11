import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
 <div>
  <p> © 2023 Copyright</p>
  <ul>
        <li>
            <Link to='#'>Github</Link>
        </li>
        <li>
          <Link to='#'>LinkedIn</Link>
        </li>
  </ul>
 </div>
  )
}

export default Footer;