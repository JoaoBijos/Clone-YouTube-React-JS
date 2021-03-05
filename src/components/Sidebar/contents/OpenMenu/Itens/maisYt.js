import React from 'react'
import '../style.css'

import Premium from "../../../assets/svg/premium.svg"
import Filmes from "../../../assets/svg/filme.svg"
import Jogos from "../../../assets/svg/jogos.svg"
import AoVivo from "../../../assets/svg/ao-vivo.svg"
import Aprender from "../../../assets/svg/aprender.svg"
import Esportes from "../../../assets/svg/esportes.svg"

export default function MaisYt(){
  return(
    <ul>
        <div id="linha"></div>
        <titulo>MAIS DO YOUTUBE</titulo>
        <li>
          <img src={Premium} />
          YouTube Premium
        </li>
        <li>
          <img src={Filmes} />
          Filmes
        </li>
        <li>
          <img src={Jogos} />
          Jogos
        </li>
        <li>
          <img src={AoVivo} />
          Ao vivo
        </li>
        <li>
          <img src={Aprender} />
          Aprender
        </li>
        <li>
          <img src={Esportes} />
          Esportes
        </li>
      </ul>
  )
}