import React, { Component } from 'react';
import { Carousel, Space, Tooltip } from 'antd';
import Texty from 'rc-texty';
import TweenOne from 'rc-tween-one';
import { AiFillGithub, AiFillWechat, AiFillQqCircle } from "react-icons/ai";
import { BsChevronCompactDown } from 'react-icons/bs';
import cls from 'classnames';
import {FadeIn} from '../../Animista/index';
import style from './index.module.less';

class Banner extends Component {
    state = {
        carouselImg: [
            {
                id: '1',
                src: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-17-01.png'
            },
            {
                id: '2',
                src: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-17-02.png'
            }
        ]
    };

    render() {
        const {scrollToContainer} = this.props;
        const {carouselImg} = this.state;

        const context = cls("context", style.bannerText);

        return (
            <>
                <Carousel autoplay dotPosition="right">
                    {
                        carouselImg.map((value => (
                                <div key={value.id}>
                                    <div className={style.carouselImg}
                                         style={{backgroundImage: `url(${value.src})`}}/>
                                </div>
                            )
                        ))
                    }
                </Carousel>

                <div className={context}>
                    <Texty className={style.bannerTextMainer}>
                        YuI HessTina
                    </Texty>
                    <TweenOne
                        className={style.combinedBar}
                        animation={{delay: 1000, width: 0, x: 250, type: 'from', ease: 'easeInOutExpo'}}
                    />
                    <Texty className={style.bannerTextContent} type="bottom" mode="sync" delay={1200} duration={500}>
                        Black Tea
                    </Texty>

                    <FadeIn className={style.bannerIconQueue} delay={1200} duration={500}>
                        <Space size="large">
                            <Tooltip placement="bottom" title="Github">
                                <AiFillGithub className={style.bannerIcon}/>
                            </Tooltip>
                            <Tooltip placement="bottom" title="WeChat">
                                <AiFillWechat className={style.bannerIcon}/>
                            </Tooltip>
                            <Tooltip placement="bottom" title="QQ">
                                <AiFillQqCircle className={style.bannerIcon}/>
                            </Tooltip>
                        </Space>
                    </FadeIn>
                </div>

                <TweenOne animation={{y: 10, yoyo: true, repeat: -1, duration: 1000}}>
                    <BsChevronCompactDown className={style.headerDown} onClick={scrollToContainer}/>
                </TweenOne>
            </>
        );
    }
}

export default Banner;