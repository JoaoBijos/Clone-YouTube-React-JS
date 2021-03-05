import React from 'react'
import {Link} from 'react-router-dom'

import '../style.css'
import Casinha from "../../../assets/svg/casinha.svg";
import EmAlta from "../../../assets/svg/emAlta.svg";
import Inscricoes from "../../../assets/svg/inscricoes.svg";

export default function TopoMenu(){
  return(
    <ul>
        <div id="linha"></div>
          <li>
            <img src={Casinha} />
            <Link id='link' to={'/'}>Início</Link>
          </li>
          <li>
            <img src={EmAlta} />
            <Link id='link' to='/em-alta'>Em alta</Link>
          </li>
          <li>
            <img src={Inscricoes} />
            <Link id='link' to='/inscricoes'>Incrições</Link>
          </li>
    </ul>
  )
}