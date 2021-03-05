import React, {Component} from "react";
import "./style.css";

export default class Videos extends Component {

  
  render(){
    return(
      <div id='global'>
        {this.props.data && this.props.data.length > 0 &&
          this.props.data.map((item,index) => {
            const { icone, infoVideo, nomeCanal, src, titulo, dataUp } = item;

            return(
              <div id="content">
                <div id="video-content" key={index.toString()}>
                <img
                  className="capa"
                  alt="capa-video"
                  src={src}
                />
                <div id="info">
                <img
                  alt="icone-canal"
                  src={icone}
                />
                <div>
                  <h1>{titulo}</h1>
                  <span>{nomeCanal}</span>
                  <span>{infoVideo} . {dataUp}</span>
                </div>
                </div>
              </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
