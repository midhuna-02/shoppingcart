import React,{useState} from 'react';


import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import './Header.css';
function Header({cartItems}) {
    const [state, setState] = useState(false);
  return (
     <header className={state===false?"header":"header1"}> 

    <div>
        <h1>
           <Link to="/" className="logo">
            Electronics Shop
           </Link>
        </h1>
       
    </div>
    <FontAwesomeIcon className='iconbar' icon={faBars} onClick={()=>setState(!state)}/>{console.log(state)}
    <div className="header-links">
    
    
<ul>
    <li>
        <Link to="/">Home</Link>
    </li>
</ul>
<ul>
    <li>
        <Link to="/signup">Signup</Link>
    </li>
</ul>
<ul>
    <li>
        <Link to="/cart" className='cart'>
        <i class="fa-solid fa-cart-shopping"></i>
    <span className='cart-length'>{cartItems.length===0 ? "":cartItems.length}</span>
        </Link>
    </li>
</ul>
    </div>
</header>
  )
}

export default Header