import React, { Component } from 'react';
import Link from "next/link";
import { Typography } from 'antd';
import cls from 'classnames';
import { IoCalendar, IoPencil, IoTime, IoFolder } from "react-icons/io5";
import style from './index.module.less';


class BigArticleCard extends Component {
    state = {
        mouseSticky: false,
        articleParam: {}
    };

    componentDidMount() {
        const {articleDoc, imgUrl, context, characters, category, tag} = this.props;
        const articleDocArray = articleDoc.split("-");
        const date = articleDocArray.slice(0, 3).join("-");
        const title = articleDocArray[3];
        const readTime = Math.floor(characters * 10 / 6);

        this.setState({
            articleParam: {
                date, title, imgUrl, context, characters, category, readTime
            }
        });
    }

    enterArticle = () => {
        this.setState({mouseSticky: true});
    };

    leaveArticle = () => {
        this.setState({mouseSticky: false});
    };

    render() {
        const {mouseSticky} = this.state;
        const {date, title, imgUrl, context, characters, category, readTime} = this.state.articleParam;

        const bigCardArticleDescRight = cls(style.bigCardArticleDesc, style.bigCardArticleDescRight);
        const bigCardStyle = cls(style.bigCard, mouseSticky ? style.sticky : '');

        return (
            <div className={bigCardStyle}>
                <div className={style.bigCardContent} onMouseEnter={this.enterArticle} onMouseLeave={this.leaveArticle}>
                    {/* img */}
                    <div className={style.bigCardContainerImg}>
                        <img className={style.bigCardImg} alt="" src={imgUrl}/>
                    </div>
                    {/* img router */}
                    <Link href="/menu"><a className={style.bigCardMask}/></Link>
                    {/* article div */}
                    <article className={style.bigCardArticle}>
                        <ul className={bigCardArticleDescRight}>
                            {/* date */}
                            <li>
                                <IoCalendar className={style.bigCardArticleDescIcon}/>
                                <span>{date}</span>
                            </li>
                            {/* characters */}
                            <li>
                                <IoPencil className={style.bigCardArticleDescIcon}/>
                                <span>{characters}k 字</span>
                            </li>
                            {/* readTime */}
                            <li>
                                <IoTime className={style.bigCardArticleDescIcon}/>
                                <span>{readTime} 分钟</span>
                            </li>
                        </ul>
                        {/* article */}
                        <div className={style.bigCardArticleContext}>
                            {/* article title */}
                            <Typography.Title level={3} ellipsis={{tooltip: title}}>
                                {title}
                            </Typography.Title>
                            {/* article content */}
                            <Typography.Paragraph ellipsis={{rows: 3}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{context}
                            </Typography.Paragraph>
                        </div>

                        {/* category */}
                        <ul className={style.bigCardArticleDesc}>
                            <li>
                                <IoFolder className={style.bigCardArticleDescIcon}/>
                                <span>{category}</span>
                            </li>
                        </ul>
                    </article>
                </div>
                {/* more button */}
                <Link href="/menu">
                    <a>
                        <div className={style.bigCardMore} onMouseEnter={this.enterArticle}
                             onMouseLeave={this.leaveArticle}>
                            More
                        </div>
                    </a>
                </Link>
            </div>
        );
    }
}

export { BigArticleCard };