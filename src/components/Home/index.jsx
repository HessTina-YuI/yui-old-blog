import React, { Component } from 'react';
import { Carousel } from 'antd';
import style from './index.module.less';

class Home extends Component {
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
        const {carouselImg} = this.state;

        return (
            <>
                <Carousel autoplay>
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
            </>
        );
    }
}

export default Home;