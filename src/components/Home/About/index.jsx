import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import yaml from '../../../config/common.yml';
import style from './index.module.less';

class About extends Component {
    state = {
        img: ''
    };

    componentDidMount() {
        this.setState({img: yaml.about.img});
    }

    render() {
        const {img} = this.state;
        const context = cls("context");

        return (
            <section>
                <div className={context}>
                    <ModuleSplit title="About me"/>
                    <div className={style.aboutContext}>
                        <div className={style.aboutContextLeft} style={{backgroundImage: `url(${img})`}}/>
                        <div className={style.aboutContextRight}>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;