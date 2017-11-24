import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './navigation';
import {Title, SubTitle} from './home';

class Ajax extends React.Component {
    render() {

        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Ajax - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Ajax"/>

                <div className="container-fluid wrapper-outside">
                    <div className="container">
                        <h1>This is Ajax..</h1>
                    </div>
                </div>
            </div>
        )
    }
};

export default Ajax;