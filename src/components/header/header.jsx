import {useState, useEffect} from 'react'

import logo1 from "../../assets/images/logo-ru.svg";
import video from "../../assets/video/video.mp4";
import Examples from "../modal/modal";

import "./header.scss";

  

function Header() {
  
  return (
      <div className='container'>
        <div className="header">
          <div className="logo-menu">
            <a href="#">
              <img className="logo1" src={logo1} alt="logo" />
            </a>
            <Examples/>
          </div>
        </div>
      
        <div className="bgVideo">
          <video src={video} style={{width: '100%'}} autoPlay loop muted></video>
        </div>
      </div>
  );
}

export default Header;
