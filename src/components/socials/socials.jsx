import telegram from "../../assets/icons/telegram1.svg";
import linked from "../../assets/icons/linkedin2.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

import "./socials.scss";

function Socials() {
    return (
        <div className="socials">
            <a href="">
            <img className="tg" src={telegram} alt="telegram" />
          </a>
          <a href="">
            <img className="linked" src={linked} alt="linkedin" />
          </a>
          <a href="">
            <img className="face" src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img className="insta" src={instagram} alt="instagram" />
          </a>
          <a href="">
            <img className="youtube" src={youtube} alt="youtube" />
          </a>
        </div>
    )
}

export default Socials;