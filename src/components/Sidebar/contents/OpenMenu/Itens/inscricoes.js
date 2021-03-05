import React, {Component} from 'react'
import '../style.css'

export default class Inscricoes extends Component{

  render(){
    return(
      <div>
        <ul>
          <div id="linha"></div>
          <titulo>INSCRIÇÕES</titulo>
            {this.props.data && this.props.data.length > 0 &&
              this.props.data.map((item,index) => {
              const { canal, capa } = item;
          
                return(
                  <li key={index.toString()}>
                   <img src={capa} />
                   <span>{canal}</span>
                  </li>
                )
              })
            }
        </ul>
      </div>
    )
  }
}