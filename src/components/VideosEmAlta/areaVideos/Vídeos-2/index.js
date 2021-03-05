import React, {Component} from "react";
import "./style.css";

export default class Videos extends Component {

  render(){
    return(
      <div id='global-2'>
        {this.props.data && this.props.data.length > 0 &&
          this.props.data.map((item,index) => {
            const { bio, infoVideo, nomeCanal, src, titulo, dataUp } = item;

            return(
              <div id="content-2">
                <div id="video-content-2" key={index.toString()}>
                  <img
                    className="capa-2"
                    alt="capa-video"
                    src={src}
                  />
                  <div id="info-2">
                    <h1>{titulo}</h1>
                    <div>
                      <span>{nomeCanal} {infoVideo} . {dataUp}</span>
                    </div>
                    <span>{bio}</span>
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
