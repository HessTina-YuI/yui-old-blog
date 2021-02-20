import React, { Component } from 'react';
import Link from "next/link";
import { Typography } from 'antd';
import cls from 'classnames';
import { IoCalendar, IoPencil, IoTime, IoFolder } from "react-icons/io5";
import style from './index.module.less';


class BigArticleCard extends Component {
    state = {
        mouseSticky: false,
        url: 'https://cdn.jsdelivr.net/gh/Trafalgar-YuI/img-bed@master/img/2021-02-20-01.png',
        title: '',
        context: ''
    };

    enterArticle = () => {
        this.setState({mouseSticky: true});
    };

    leaveArticle = () => {
        this.setState({mouseSticky: false});
    };

    render() {
        const {mouseSticky, url, title, context} = this.state;
        const bigCardArticleDescRight = cls(style.bigCardArticleDesc, style.bigCardArticleDescRight);
        const contentSticky = cls(style.bigCardContent, mouseSticky ? style.bigCardContentSticky : '');
        const imgSticky = cls(style.bigCardImg, mouseSticky ? style.bigCardImgSticky : '');

        return (
            <div className={style.bigCard}>
                <div className={contentSticky} onMouseEnter={this.enterArticle} onMouseLeave={this.leaveArticle}>
                    <div className={style.bigCardContainerImg}>
                        <img className={imgSticky} alt="" src={url}/>
                    </div>

                    <Link href="/menu"><a className={style.bigCardMask}/></Link>

                    <article className={style.bigCardArticle}>
{/*                        <ul className={bigCardArticleDescRight}>
                            <li>
                                <IoCalendar className={style.bigCardArticleDescIcon}/>
                                <span>2021-02-20</span>
                            </li>
                            <li>
                                <IoPencil className={style.bigCardArticleDescIcon}/>
                                <span>5k 字</span>
                            </li>
                            <li>
                                <IoTime className={style.bigCardArticleDescIcon}/>
                                <span>20 分钟</span>
                            </li>
                        </ul>*/}
                        <Typography.Title level={3} ellipsis={{tooltip: title}}>
                            {title}
                        </Typography.Title>
                        <Typography.Paragraph ellipsis={{rows: 3}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context}
                        </Typography.Paragraph>
{/*                        <ul className={style.bigCardArticleDesc}>
                            <li>
                                <IoFolder className={style.bigCardArticleDescIcon}/>
                                <span>测试</span>
                            </li>
                        </ul>*/}
                    </article>
                </div>
                <Link href="/menu">
                    <a>
                        <div className={style.bigCardMore} onMouseEnter={this.enterArticle} onMouseLeave={this.leaveArticle}>
                            More
                        </div>
                    </a>
                </Link>
            </div>
        );
    }
}

export { BigArticleCard };