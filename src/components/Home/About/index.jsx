import React, { Component } from 'react';
import cls from 'classnames';
import style from './index.module.less';

class About extends Component {
    state = {
        imgUrl: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2020-02-19-01.png'
    };

    render() {
        const {imgUrl} = this.state;
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
                        <div className={style.aboutContextLeft} style={{backgroundImage: `url(${imgUrl})`}}/>
                        <div className={style.aboutContextRight} >
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;