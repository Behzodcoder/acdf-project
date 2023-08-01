import footerbg from "../../assets/images/footerbg.svg";
import footlogo from "../../assets/images/logo-ru.svg";
import telegram from "../../assets/icons/telegram1.svg";
import linked from "../../assets/icons/linkedin2.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
    {/* <div className="container"> */}
      <div className="logo-social">
        <img className="footlogo" src={footlogo} alt="footerlogo" />
        <div className="footer-logo">
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
      </div>
      <div className="contact-politics">
        <div className="con-pol">
          <div className="contacts">
            Контакты <br />
            Телефон +998 (71) 207 40 80
            <br />
            Email{" "}
            <a className="email" href="mailto: info@acdf.uz">
              info@acdf.uz
            </a>
          </div>
          <br />
          <div className="address">
            улица Тараса Шевченко, д. 1 <br /> Узбекистан, Ташкент
          </div>
        </div>

        <div className="politics">
        <div className="pol">
          <a href="https://www.iubenda.com/privacy-policy/95974638">
            Политика конфиденциальности
          </a>
        </div>
        <div className="cookie">
          <a href="https://www.iubenda.com/privacy-policy/95974638/cookie-policy">
            Политика использования файлов Cookie
          </a>
        </div>
        <div className="confidence">
          <a href="#">выбор конфиденциальности</a>
        </div>
      </div>
      </div>

      
    {/* </div> */}
 </div>
  );
}

export default Footer;
