import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './navigation';

export const Title = (props) => {
    return (
        <h1 className="title">{props.title} - Prasetya A. Baskara</h1>
    );
}
export const SubTitle = (props) => {
    return (
        <h2 className="subtitle">{props.subtitle}</h2>
    )
}

class Home extends React.Component {
    constructor(props){
        super(props);
        this.testAlert = this.testAlert.bind(this);
    }

    testAlert(event) {
        console.log(event);
        alert('this button text is: ' + event.target.textContent + '\n' + 'this button class is: ' + event.currentTarget.className);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <link rel="shortcut icon" type="image/x-icon" href="http://oflisback.github.io/react-favicon/public/img/github.ico" />
                    <title>Home - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Home"/>

                <div className="wrapper-outside">
                    <Title title="Home"/>
                    <SubTitle subtitle="This is home.."/>
                    <div>
                        <button type="button" className="btn btn-large btn-block btn-default" onClick={this.testAlert}>button</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;