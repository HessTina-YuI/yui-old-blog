import React, { Component } from 'react';
import { Carousel } from 'antd';
import TweenOne from 'rc-tween-one';
import { BsChevronCompactDown } from 'react-icons/bs';
import style from './index.module.less';

class Banner extends Component {
    state = {
        carouselImg: [
            {
                id: '1',
                src: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-17.png'
            },
            {
                id: '2',
                src: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-17.png'
            }
        ]
    };

    render() {
        const {scrollToContainer} = this.props;
        const {carouselImg} = this.state;

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
                <TweenOne animation={{y: 10, yoyo: true, repeat: -1, duration: 1000}}>
                    <BsChevronCompactDown className={style.headerDown} onClick={scrollToContainer}/>
                </TweenOne>
            </>
        );
    }
}

export default Banner;