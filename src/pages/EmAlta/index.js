import React,{Component} from 'react'
import './style.css'

import Categorias from '../../components/VideosEmAlta/categorias/index'
import VideosEmAlta from '../../components/VideosEmAlta/areaVideos/Content-2/index'

export default class EmAlta extends Component{
  render(){
    return(
      <div id='em-alta'>
        <Categorias/>
        <hr id='divisao'/>
        <VideosEmAlta/>
      </div>
    )
  }
}