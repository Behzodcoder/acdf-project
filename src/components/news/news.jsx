import tovoq from "../../assets/images/tovoq.png";
import "./news.scss";

function News() {
  return (
    <div className="container">
      <div className="news-section">
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
    </div>
  );
}

export default News;
