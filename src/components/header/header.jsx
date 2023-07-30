import logoRu from "../../assets/images/logo-ru.svg";
import video from "../../assets/video/video.mp4";
import Examples from "../modal/modal";

import "./header.scss";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-menu">
          <a href="#">
            <img src={logoRu} alt="logo" />
          </a>
          {/* <button></button>
           */}
           <Examples/>
        </div>
        <div className="bgVideo">
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </div>
  );
}

export default Header;
