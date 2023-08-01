import grey from "../../assets/images/Rectangle-grey.png";
import purple from "../../assets/images/Rectangle-purple.png";

import "./purpose.scss";

function Purpose({sc, inView}) {


  return (
    <div className="container" ref={sc} inView={inView}>
      <div className="center-text" >
        <div className="rectangles">
          <img className="grey" src={grey} alt="" />
          <img className="purple" src={purple} alt="" />
        </div>
        <div className="text"  >
          <p>
            Целью Фонда является построение творческого межкультурного диалога и
            интеграция искусства Узбекистана в мировой художественный мир и
            культурное пространство.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
