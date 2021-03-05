import React, {Component} from 'react';
import Routes from './routes';
import './index.css'

export default class App extends Component{
    render(){
        return(
            <div className="app">
                <Routes/>
            </div>
        );
    }
}