import React, { Component } from "react";
import "./style.css";
import Videos from "../Vídeos/index";

import firebase from '../../conections'

export default class AreaVideos extends Component {
  constructor(props){
    super(props)
    this.state = {
      infoVideos: [],
      infoVideosMusica: [],
      infoVideosGamePlay: [],
    }
  } 

  componentDidMount(){
    this.getVideos()
  }

  getVideos = () => {
    firebase.database().ref('videos').on('value', (snapshot) => {
      const state = snapshot.val()
      this.setState({infoVideos: state})
    })

    firebase.database().ref('videos-musica').on('value', (snapshot) => {
      const state = snapshot.val()
      this.setState({infoVideosMusica: state})
    })

    firebase.database().ref('videos-game-play').on('value', (snapshot) => {
      const state = snapshot.val()
      this.setState({infoVideosGamePlay: state})
    })
  }

  render() {
    
    return (
      <div>
        <section>
          <Videos data={this.state.infoVideos}/>
        </section>
        <section>
          <hr/>
          <h2>Músicas</h2>
          <Videos data={this.state.infoVideosMusica}/>
        </section>
        <section>
          <hr/>
          <h2>Game Play</h2>
          <Videos data={this.state.infoVideosGamePlay}/>
        </section>
      </div>
    );
  }
}