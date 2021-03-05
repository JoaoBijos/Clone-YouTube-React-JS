import React from 'react'
import '../style.css'

import Biblioteca from "../../../assets/svg/biblioteca.svg";
import Historico from "../../../assets/svg/historico.svg"
import SeusVideos from "../../../assets/svg/seus-videos.svg"
import AssistirMais from "../../../assets/svg/assistir-mais-tarde.svg"
import Like from "../../../assets/svg/gostei.svg"

export default function OpcoesMenu(){
  return(
    <ul>
      <div id="linha"></div>
      <li>
        <img src={Biblioteca} />
        Biblioteca
      </li>
      <li>
        <img src={Historico} />
        Histórico
      </li>
      <li>
        <img src={SeusVideos} />
        Seus vídeos
      </li>
      <li>
        <img src={AssistirMais} />
        Assistir mais tarde
      </li>
      <li>
        <img src={Like} />
        Vídeos marcados co...
      </li>
    </ul>
  )
}