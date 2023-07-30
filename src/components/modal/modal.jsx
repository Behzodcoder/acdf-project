import React, { Component } from "react";
import Modal from "react-awesome-modal";
import close from "../../assets/icons/close.svg";
import modalLogo from "../../assets/images/logo-ru.svg";
import telegram from "../../assets/icons/telegram1.svg";
import linked from "../../assets/icons/linkedin2.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

import "./modal.scss";

export default class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        {/* <h1>МЕНЮ</h1> */}
        <input
          className="menu"
          type="button"
          value="МЕНЮ"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          width="1360"
          height="600"
          effect="fadeInRight"
          onClickAway={() => this.closeModal()}>
          <div className="modal-info">
            <img className="modal-logo" src={modalLogo} alt="" />
            <a className="closea" href="javascript:void(0);" onClick={() => this.closeModal()}>
              <img className="close" src={close} />
            </a>
            <div className="menu-nav">
              <a className="projects" href="#">Проекты</a>
              <a className="news" href="#">Новости</a>
              <a className="about" href="#">О нас</a>
              <a className="contacts" href="#">Контакты</a>
              <form>
                <input type="text" placeholder="Поиск" />
                <button className="search">→</button>
              </form>
              <div className="langs">
                <a className="uz" href="#">O'Z</a>
                <a className="ru" href="#">РУ</a>
                <a className="en" href="#">EN</a>
              </div>
            </div>
            {/* <div className="logo-social">
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
            </div> */}
          </div>
        </Modal>
      </section>
    );
  }
}
