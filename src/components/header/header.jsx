import logoRu from "../../assets/images/logo-ru.svg";
import video from "../../assets/video/video.mp4";

import "./header.scss";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo-menu">
          <a href="#">
            <img src={logoRu} alt="logo" />
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
