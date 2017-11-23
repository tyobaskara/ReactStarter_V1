import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './navigation';

import {Title, SubTitle} from './home';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Skills: ['HTML5','CSS/SCSS/SASS','Javascript','Jquery','Gulp','React']
        }
    }

    render() {
        let Skills = this.state.Skills;
        Skills = Skills.map( (item,index) => {
            return (
                <li key={index}>{item}</li>
            );
        });

        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <link rel="shortcut icon" type="image/x-icon" href="http://oflisback.github.io/react-favicon/public/img/github.ico" />
                    <title>About - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="About"/>

                <div className="wrapper-outside">
                    <Title title="About"/>
                    <SubTitle subtitle="This is about.."/>

                    <div className="skills">
                        <h2>Skills</h2>
                        <ul>
                            {Skills}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;