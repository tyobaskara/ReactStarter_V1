import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Home from './jsx/home';
import About from './jsx/about';
import Ajax from './jsx/ajax';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <div>
                    <Route exact path={'/'} component={Home}></Route>
                    <Route path={'/About'} component={About}></Route>
                    <Route path={'/Ajax'} component={Ajax}></Route>
                </div>
            </Router>
        );
    }

    componentWillMount(){
        console.log('none');
        document.body.style.display = "none";
    }
    componentDidMount(){
        setTimeout(function(){
            document.body.style.display = "block";
        },250);
    }
};


ReactDOM.render(<App/>, root);