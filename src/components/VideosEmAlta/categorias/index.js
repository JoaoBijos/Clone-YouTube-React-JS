import React, { Component } from 'react'
import './style.css'

import Music from '../assets/music.png'
import Jogos from '../assets/gaming.png'
import News from '../assets/news.png'
import Filmes from '../assets/movies.png'

export default class Categorias extends Component{
  render(){
    return(
      <div id='categorias'>
        <div>
            <img src={Music}/>
            <span>Música</span>
        </div>
        <div>
          <img src={Jogos}/>
          <span>Jogos</span>
        </div>
        <div>
          <img src={News}/>
          <span>Notícias</span>
        </div>
        <div>
          <img src={Filmes}/>
          <span>Filmes</span>
        </div>
      </div>
    )
  }
}