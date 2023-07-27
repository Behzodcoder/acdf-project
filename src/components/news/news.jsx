import tovoq from "../../assets/images/tovoq.png";
import medal from "../../assets/images/medal.png";
import marafon from "../../assets/images/marafon.png";
import armin from "../../assets/images/armin.png";
import gustav from "../../assets/images/gustav.png";
import "./news.scss";

function News() {
  return (
    <div className="container">
      <div className="news-section">  {/* tovoq */}
        <h3>Наши последние новости</h3>
        <div className="line"></div>
      </div>
      <div className="allNews">
        <div className="tovoq-news">
          <img src={tovoq} alt="" />
          <div className="tovoq-text">
            <span className="newsBlack">НОВОСТИ</span>
            <span className="newsDate">24 Июль 2023</span>
            <h3 className="newsTitle">
              Шохрух Рахимов принят в престижную стипендиальную программу Homo
              Faber
            </h3>
            <p className="readMore">Читать далее</p>
          </div>
        </div>
      </div>

      <div className="news-section">   {/* medal */}
        <div className="line"></div>
      </div>
      <div className="allNews">
        <div className="tovoq-news">
          <img src={medal} alt="" />
          <div className="tovoq-text">
            <span className="newsBlack">НОВОСТИ</span>
            <span className="newsDate">22 Июнь 2023</span>
            <h3 className="newsTitle">
              18 июня 2023 года состоялся<br /> Международный ультрамарафон ZAAMIN <br />
              ULTRA 2023
            </h3>
            <p className="readMore">Читать далее</p>
          </div>
        </div>
      </div>

      <div className="news-section">   {/* marafon */}
        <div className="line"></div>
      </div>
      <div className="allNews">
        <div className="tovoq-news">
          <img src={marafon} alt="" />
          <div className="tovoq-text">
            <span className="newsBlack">НОВОСТИ</span>
            <span className="newsDate">12 Июнь 2023</span>
            <h3 className="newsTitle">
            Фонд развития культуры и искусства <br /> Узбекистана объявляет о проведении <br /> ультрамарафона ZAAMIN ULTRA 2023
            </h3>
            <p className="readMore">Читать далее</p>
          </div>
        </div>
      </div>

      <div className="news-section">   {/* armin */}
        <div className="line"></div>
      </div>
      <div className="allNews">
        <div className="tovoq-news">
          <img src={armin} alt="" />
          <div className="tovoq-text">
            <span className="newsBlack">НОВОСТИ</span>
            <span className="newsDate">08 Июнь 2023</span>
            <h3 className="newsTitle">10 июня лекция Армина Линке</h3>
            <p className="readMore">Читать далее</p>
          </div>
        </div>
      </div>

      <div className="news-section">   {/* gustav */}
        <div className="line"></div>
      </div>
      <div className="allNews">
        <div className="tovoq-news">
          <img src={gustav} alt="" />
          <div className="tovoq-text">
            <span className="newsBlack">НОВОСТИ</span>
            <span className="newsDate">06 Июнь 2023</span>
            <h3 className="newsTitle">Новая мультимедийная выставка «Густав <br />Климт и Великие импрессионисты»</h3>
            <p className="readMore">Читать далее</p>
          </div>
        </div>
      </div>
      <div className="news-section">   {/* gustav */}
        <div className="line"></div>
      </div>

      <a className="showAll">Посмотреть все</a>
    </div>
  );
}

export default News;
