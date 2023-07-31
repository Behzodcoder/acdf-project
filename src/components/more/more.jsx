import gumbaz from "../../assets/images/gumbaz.svg";
import gumbazTwo from "../../assets/images/gumbazdavomi.svg";

import "./more.scss";

function More() {
  return (
    <div className="container">
      <div className="knowMore">
        <div className="knowMoreTitle">
          <h2>
            Узнайте больше о наших <br /> программах
          </h2>
          <div className="bgGumbaz">
            <img className="gumbaz" src={gumbaz} alt="" />
            {/* <img className="gumbazTwo" src={gumbazTwo} alt="" /> */}
          </div>
        </div>
        <div className="knowMoreText">
          <p>
            Фонд развития культуры и искусства Республики Узбекистан
            способствует развитию международного сотрудничества и популяризации
            культуры Узбекистана на международной арене. Фонд распространяет
            национальное наследие, развивая и поддерживая инициативы в области
            изобразительного искусства и архитектуры, литературы, театра, музыки
            и танца. Наша миссия – создание инклюзивной и доступной среды в
            культурных учреждениях страны, содействие обновлению музеев,
            развитие культурного меценатства и профессиональной подготовки в
            сфере искусства и культуры.
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;
