import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import img6 from "../../assets/images/6.png";
import img7 from "../../assets/images/7.png";
import gumbaz2 from "../../assets/images/gumbazdavomi.svg";

import "./gallery.scss";

function Gallery() {
  return (
      <div className="main-gallery">
    <div className="container">
          <div className="gallery">
            <div className="gallery-img" style={{
              backgroundImage:`url('${img1}')`
            }}>
              {/* <img src={img1} alt="" /> */}
            </div>

            <div className="gallery-info">
              <h2>Архитектурные проекты</h2>
              <p className="fond">
                Фонд развития культуры и искусства при Кабинете Министров
                Республики Узбекистан является инициатором крупных архитектурных
                проектов в Ташкенте.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-info">
              <h2>Выставки</h2>
              <p className="fond">
                Фонд развития культуры и искусства организует широкий спектр
                выставок, демонстрирующих богатую и яркую культуру и
                историческое наследие Узбекистана.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
            <div className="gallery-img" style={{
              backgroundImage:`url('${img2}')`
            }}>
              {/* <img src={img2} alt="" /> */}
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-img" style={{
              backgroundImage:`url('${img3}')`
            }}>
              {/* <img src={img3} alt="" /> */}
            </div>
            <div className="gallery-info">
              <h2>
                Организация <br /> мероприятий
              </h2>
              <p className="fond">
                Фонд регулярно организует и поддерживает мероприятия в области
                изобразительного искусства, литературы, театра, музыки,
                архитектуры и хореографии. Фонд устанавливает международные
                культурные связи и продвигает культуру Узбекистана на мировой
                арене.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-info">
              <h2>Реновация учреждений культуры</h2>
              <p className="fond">
                Программа, направленная на обновление учреждений культуры в
                Узбекистане, является одним из ключевых направлений деятельности
                Фонда.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
            <div className="gallery-img" style={{
              backgroundImage:`url('${img4}')`
            }}>
              {/* <img src={img4} alt="" /> */}
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-img" style={{
              backgroundImage:`url('${img5}')`
            }}>
              {/* <img src={img5} alt="" /> */}
            </div>
            <div className="gallery-info">
              <h2>Инклюзивная среда</h2>
              <p className="fond">
                В 2019 году Фонд инициировал и организовал проведение первого
                международного благотворительного забега в истории Узбекистана
                Samarkand Half Marathon. Цель проекта – привлечь внимание
                общественности к проблеме инклюзии и доступности объектов
                культуры для людей с инвалидностью.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-info">
              <h2>Образование</h2>
              <p className="fond">
                Долгосрочная стратегия Фонда развития культуры и искусства при
                Кабинете Министров Республики Узбекистан в области образования
                состоит из множества элементов и тесно связана с другими
                программами Фонда.
              </p>
              <p className="readMore">Читать далее</p>
            </div>
            <div className="gallery-img" style={{
              backgroundImage:`url('${img6}')`
            }}>
              {/* <img src={img6} alt="" /> */}
            </div>
          </div>

          <div className="gallery">
            <div className="gallery-img" style={{
              backgroundImage:`url('${img7}')`
            }}>
              {/* <img src={img7} alt="" /> */}
            </div>
            <div className="gallery-info">
              <h2>Развитие культурного меценатства</h2>
              <p className="fond">
                Фонд является инициатором и автором законопроектов, создающих
                правовую базу для меценатства и негосударственной финансовой
                поддержки культуры. Это законы «О меценатстве», «О целевых
                капиталах некоммерческих организаций», а также Постановление
                Кабинета министров «Об утверждении типового положения о
                попечительских советах учреждений культуры и искусства».
              </p>
              <p className="readMore">Читать далее</p>
            </div>
          </div>
          <div className="gradient"></div>
      </div>
    </div>
  );
}

export default Gallery;
