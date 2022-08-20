import PropTypes from 'prop-types';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Header(prop) {
  let mode = prop.mode;
  function Theme(){
    prop.Theme();
  }
  function Yourname(){
    prop.Yourname();
  }

  //page navigator
  const [click, setclick]=useState(["active",""]);
  function active(event){
    let acbtn = event.target.name;
    if(acbtn === "home"){
      setclick(["active",""]);
    }else{
      setclick(["","active"]);
    }
  }

  return (
    <header className={mode}>
    <nav>
    <div className='innav'>
    <span className="material-symbols-outlined">
    notes
    </span>
      <div className="nav-links">
        <Link name="home" to="/" className={click[0]} onClick={active}>Home</Link>
        <a href="http://raxmice.in">WS-Blog</a>
        <Link name="about" to="/about" className={click[1]} onClick={active}>About</Link>
      </div>
      </div>
      
      <div className='uid'>
      <span className="material-symbols-outlined">
        account_circle
        </span>
        <h4 className="username" onClick={Yourname}>{prop.name}</h4>
        <div className='mode' onClick={Theme}>M<span className="material-symbols-outlined theme" >
        blur_circular
        </span>de</div>
      </div>
    </nav>
    </header>
  )
}

Header.propTypes = {
  uname: PropTypes.string.isRequired
}

Header.defaultProps = {
  uname: 'set Name'
}