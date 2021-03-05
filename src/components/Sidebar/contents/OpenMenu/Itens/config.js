import React from 'react'
import '../style.css'

import Config from "../../../assets/svg/configuracoes.svg"
import Denuncia from "../../../assets/svg/historico-denuncia.svg"
import Ajuda from "../../../assets/svg/ajuda.svg"
import Feedback from "../../../assets/svg/feedback.svg"

export default function Configuracoes(){
  return(
    <ul>
      <div id="linha"></div>
      <li>
        <img src={Config} />
        Configurações
      </li>
      <li>
        <img src={Denuncia} />
        Histórico de denúncias
      </li>
      <li>
        <img src={Ajuda} />
        Ajuda
      </li>
      <li>
        <img src={Feedback} />
        Enviar feedback
      </li>
      <div id="linha"></div>
    </ul>
  )
}