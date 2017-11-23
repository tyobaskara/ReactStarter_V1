import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Home from './home';
import About from './about';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div>
                    <Route exact path={'/'} component={Home}></Route>
                    <Route path={'/About'} component={About}></Route>
                </div>
            </Router>
        );
    }
};

ReactDOM.render(<App/>, root);