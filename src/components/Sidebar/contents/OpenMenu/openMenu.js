import React, {Component} from "react";
import "./style.css";

import firebase from '../../../conections'
import TopoMenu from './Itens/topoMenu'
import OpcoesMenu from './Itens/opcoesmenu'
import Inscricoes from './Itens/inscricoes'
import MaisYt from './Itens/maisYt'
import Config from './Itens/config'
import Info from './Itens/infos'

export default class openMenu extends Component{
 
  constructor(props){
    super(props)
    this.state = {
      canais: [],
    }
  }

  componentDidMount(){
    this.getInfos()
  }

  getInfos = () => {
    firebase.database().ref('inscricoes').on('value', (snapshot) => {
      const state = snapshot.val()
      this.setState({canais: state})
    })
  }
 
  render(){
    return (
      <div className="menu">
        <TopoMenu/>
        <OpcoesMenu/>
        <Inscricoes data={this.state.canais}/>
        <MaisYt/>
        <Config/>
        <Info/>
      </div>
    );
  }
}
