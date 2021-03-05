import React, {Component} from "react";
import "./style.css";

import AreaVideos from "../../components/AreaVideos/Content/index";

export default class Home extends Component {
  render(){
    return(
      <div className="container-1">
        <AreaVideos/>
      </div>
    );
  }
}