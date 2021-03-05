import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import Casinha from "../../assets/svg/casinha.svg";
import EmAlta from "../../assets/svg/emAlta.svg";
import Inscricoes from "../../assets/svg/inscricoes.svg";
import Biblioteca from "../../assets/svg/biblioteca.svg";
import Botao from "../../assets/img/botao.png";

export default function Fixo(){
  
  let open = false
  function openLateral(classe){
    open = !open
    open ? classe[0].classList.add('open') : classe[0].classList.remove('open')
  }

  return(
      <div className="sidebar">
        <div id='div-button'>
            <button type="button" onClick={() => openLateral(document.getElementsByClassName('menu'))}>
              <img src={Botao} />
            </button>
        </div>
        <Link to={"/"}>
            <img src={Casinha} />
            Início
        </Link>
        <Link to={"/em-alta"}>
          <img src={EmAlta} />
          Em alta
        </Link>
        <Link to={"/inscricoes"}>
          <img src={Inscricoes} />
          Incrições
        </Link>
        <a>
          <img src={Biblioteca} />
          Biclioteca
        </a>
    </div>
  )
}