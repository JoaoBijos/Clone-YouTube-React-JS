import React, {Component} from "react";
import "./style.css";

export default class Videos extends Component {

  
  render(){
    return(
      <div id='global-3'>
        {this.props.data && this.props.data.length > 0 &&
          this.props.data.map((item,index) => {
            const { icone, infoVideo, nomeCanal, src, titulo, dataUp } = item;

            return(
              <div id="content-3">
                <div id="video-content-3" key={index.toString()}>
                <img
                  className="capa-3"
                  alt="capa-video"
                  src={src}
                />
                <div id="info-3">
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
