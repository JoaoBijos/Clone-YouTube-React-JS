import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Home from './pages/Home/index';
import EmAlta from './pages/EmAlta/index';
import Inscricoes from './pages/Incricoes/index';
import Erro from './pages/Erro';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/em-alta" component={EmAlta}/>
                <Route exact path="/inscricoes" component={Inscricoes}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;