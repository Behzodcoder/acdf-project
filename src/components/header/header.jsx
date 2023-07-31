import {useState, useEffect} from 'react'

import logo1 from "../../assets/images/logo-ru.svg";
import logo2 from "../../assets/images/logo-letter-black.svg";
import video from "../../assets/video/video.mp4";

import "./header.scss";

  

function Header() {

  
  
  return (
    <div className="container">
      <div className="header">
        <div className="logo-menu">
          <a href="#">
            <img className="logo1" src={logo1} alt="logo" />
            <img className="logo2" src={logo2} alt="" />
          </a>
          <button>МЕНЮ</button>
        </div>
        <div className="bgVideo">
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default Header;
