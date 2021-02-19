import React, { Component } from 'react';
import cls from 'classnames';
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
            <section className={style.section}>
                <div className={context}>
                    <div className={style.aboutTitle}>
                        <div className={style.aboutTitleText}>
                            About Me
                        </div>
                    </div>
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