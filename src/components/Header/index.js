import React, {Component} from "react";
import "./header.css";
import {Link} from "react-router-dom"
 
import LogoCompleta from "./assets/img/Logo-completa.png";
import Lupa from "./assets/SVG/botao-lupa.svg";
import Mic from "./assets/SVG/mic.svg";
import Teclado from "./assets/img/image.png";
import AddVideo from "./assets/SVG/addVideo.svg";
import Apps from "./assets/SVG/apps.svg";
import Sino from "./assets/SVG/sino.svg";
import Perfil from "./assets/img/foto-perfil.jpg";

export default class Header extends Component{

  render(){
    return(
      <div className="container">
        <Link to={"/"} id="lado-esquerdo">
          <img src={LogoCompleta} />
        </Link>
        <div className="centro">
          <div>
            <input placeholder="Pesquisar" />
            <img src={Teclado} />
          </div>
          <button className="btn-pesquisar">
            <img src={Lupa} />
          </button>
          <button className="btn-mic">
            <img src={Mic} />
          </button>
        </div>
        <div className="lado-direito">
          <img className="icones" src={AddVideo} />
          <img className="icones" src={Apps} />
          <img className="icones" src={Sino} />
          <img className="icone-perfil" src={Perfil} />
        </div>
      </div>
    );
  }
}
