import React, { Component } from 'react';
import { Carousel, Space, Tooltip } from 'antd';
import Texty from 'rc-texty';
import { AiFillGithub, AiFillWechat, AiFillQqCircle } from "react-icons/ai";
import { BsChevronCompactDown } from 'react-icons/bs';
import cls from 'classnames';
import { DownSolidUpShallow, FadeIn, ScaleInHorCenter } from '../../Animista/index';
import yaml from '../../../config/common.yml';
import style from './index.module.less';

class Banner extends Component {
    state = {
        carouselImg: []
    };

    componentDidMount() {
        this.setState({carouselImg: yaml.banner});
    }

    render() {
        const {scrollToContainer} = this.props;
        const {carouselImg} = this.state;

        const context = cls("context", style.bannerText);

        return (
            <>
                <Carousel autoplay dotPosition="right">
                    {
                        carouselImg.map((value, index) => (
                                <div key={index}>
                                    <div className={style.carouselImg}
                                         style={{backgroundImage: `url(${value.img})`}}/>
                                </div>
                            )
                        )
                    }
                </Carousel>

                <div className={context}>
                    <Texty className={style.bannerTextMainer}>
                        YuI HessTina
                    </Texty>
                    <ScaleInHorCenter delay={1000}>
                        <div className={style.combinedBar}/>
                    </ScaleInHorCenter>
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

                <DownSolidUpShallow duration={1500}>
                    <BsChevronCompactDown className={style.headerDown} onClick={scrollToContainer}/>
                </DownSolidUpShallow>
            </>
        );
    }
}

export default Banner;