import React, { Component } from "react";
import "./style.css";
import Videos from "../Vídeos-2/index";

import firebase from '../../../conections'

export default class AreaVideos extends Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
    }
  } 

  componentDidMount(){
    this.getVideos()
  }

  getVideos = () => {
    firebase.database().ref('videos').on('value', (snapshot) => {
      const state = snapshot.val()
      this.setState({videos: state})
    })
  }

  render() {
    
    return (
      <div id="videos-em">
        <Videos data={this.state.videos}/>
      </div>
    );
  }
}