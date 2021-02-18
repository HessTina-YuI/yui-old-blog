import React, { Component } from 'react';
import { Row, Col } from 'antd';
import cls from 'classnames';
import style from './index.module.less';

class About extends Component {
    state = {
        imgUrl: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-18-01.png'
    };

    render() {
        const {imgUrl} = this.state;
        const context = cls("context");

        return (
            <section className={style.section}>
                <div className={context}>
                    <Row className={style.aboutTitle}>
                        <Col span={24}>
                            <div className={style.aboutTitleText}>
                                About Me
                            </div>
                        </Col>
                    </Row>
                    <Row className={style.aboutContext}>
                        <Col span={8} style={{background: `url(${imgUrl})`}}>
                        </Col>
                        <Col span={16} style={{background: "yellow"}}>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default About;