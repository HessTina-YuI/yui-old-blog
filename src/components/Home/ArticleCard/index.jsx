import React, { Component } from 'react';
import Link from "next/link";
import { Typography } from 'antd';
import cls from 'classnames';
import { IoCalendar, IoPencil, IoTime, IoFolder } from "react-icons/io5";
import style from './index.module.less';

class BigArticleCard extends Component {
    state = {
        mouseSticky: false
    };

    enterArticle = () => {
        this.setState({mouseSticky: true});
    };

    leaveArticle = () => {
        this.setState({mouseSticky: false});
    };

    render() {
        const {mouseSticky} = this.state;
        const {slug, title, date, coverImage, description, characters, category, readTime} = this.props;

        const bigCardStyle = cls(style.bigCard, mouseSticky ? style.sticky : '');
        const bigCardArticleDescTop = cls(style.bigCardArticleDesc, style.bigCardArticleDescTop);

        return (
            <div className={bigCardStyle}>
                <div className={style.bigCardContent} onMouseEnter={this.enterArticle} onMouseLeave={this.leaveArticle}>
                    {/* img */}
                    <div className={style.bigCardContainerImg}>
                        <img className={style.bigCardImg} alt="" src={coverImage}/>
                    </div>
                    {/* img router */}
                    <Link href="/posts/[category]/[title]" as={`/posts/${category}/${slug}`}>
                        <a className={style.bigCardMask}/>
                    </Link>
                    {/* article div */}
                    <article className={style.bigCardArticle}>
                        <ul className={bigCardArticleDescTop}>
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
                            <Typography.Paragraph ellipsis={{rows: 2, tooltip: description}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}
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
                <Link href="/posts/[category]/[title]" as={`/posts/${category}/${slug}`}>
                    <a>
                        <div className={style.cardMore} onMouseEnter={this.enterArticle}
                             onMouseLeave={this.leaveArticle}>
                            More
                        </div>
                    </a>
                </Link>
            </div>
        );
    }
}

class SmallArticleCard extends Component {
    state = {
        mouseSticky: false
    };

    enterArticle = () => {
        this.setState({mouseSticky: true});
    };

    leaveArticle = () => {
        this.setState({mouseSticky: false});
    };

    render() {
        const {mouseSticky} = this.state;
        const {slug, title, date, coverImage, description, characters, category, readTime} = this.props;

        const smallCardStyle = cls(style.smallCard, mouseSticky ? style.sticky : '');
        const smallCardArticleDescTop = cls(style.bigCardArticleDesc, style.smallCardArticleDescTop);

        return (
            <div className={smallCardStyle}>
                <div className={style.smallCardContent} onMouseEnter={this.enterArticle}
                     onMouseLeave={this.leaveArticle}>
                    {/* img */}
                    <div className={style.smallCardContainerImg}>
                        <img className={style.smallCardImg} alt="" src={coverImage}/>
                    </div>
                    {/* img router */}
                    <Link href="/posts/[category]/[title]" as={`/posts/${category}/${slug}`}>
                        <a className={style.smallCardMask}/>
                    </Link>
                    {/* article div */}
                    <article className={style.smallCardArticle}>
                        <ul className={smallCardArticleDescTop}>
                            {/* date */}
                            <li>
                                <IoCalendar className={style.bigCardArticleDescIcon}/>
                                <span>{date}</span>
                            </li>
                        </ul>
                        {/* article */}
                        <div className={style.smallCardArticleContext}>
                            {/* article title */}
                            <Typography.Title level={3} ellipsis={{tooltip: title}}>
                                {title}
                            </Typography.Title>
                            {/* article content */}
                            <Typography.Paragraph ellipsis={{rows: 1, tooltip: description}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}
                            </Typography.Paragraph>
                        </div>
                        {/* category */}
                        <ul className={style.smallCardArticleDesc}>
                            <li>
                                <IoFolder className={style.smallCardArticleDescIcon}/>
                                <span>{category}</span>
                            </li>
                        </ul>
                    </article>
                </div>
                {/* more button */}
                <Link href="/posts/[category]/[title]" as={`/posts/${category}/${slug}`}>
                    <a>
                        <div className={style.cardMore} onMouseEnter={this.enterArticle}
                             onMouseLeave={this.leaveArticle}>
                            More
                        </div>
                    </a>
                </Link>

            </div>
        );
    }
}

export { BigArticleCard, SmallArticleCard };