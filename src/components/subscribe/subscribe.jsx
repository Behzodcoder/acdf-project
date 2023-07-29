import grey from "../../assets/images/grey.svg";
import purple from "../../assets/images/purple.svg";

import "./subscribe.scss";

function Subscribe() {
    return (
        <div className="container">
            <div className="subscribe">
                <div className="subscribe-text">
                    <h2>Подпишитесь на нашу рассылку, <br />чтобы быть постоянно в курсе</h2>
                </div>
                
                <div className="inp">
                    <input type="email" placeholder="Введите свой email"/>
                    <button>Подтвердить</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;