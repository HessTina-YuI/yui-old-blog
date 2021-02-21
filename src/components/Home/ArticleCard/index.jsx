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
        const {fileName, title, coverImage, description, characters, category, tag} = this.props;
        const articleDocArray = fileName.split("_");
        const date = articleDocArray.slice(0, 1);
        const readTime = Math.floor(characters * 10 / 6);

        this.setState({
            articleParam: {
                fileName, title, date, coverImage, description, characters, category, readTime
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
        const {fileName, title, date, coverImage, description, characters, category, readTime} = this.state.articleParam;

        const bigCardArticleDescRight = cls(style.bigCardArticleDesc, style.bigCardArticleDescRight);
        const bigCardStyle = cls(style.bigCard, mouseSticky ? style.sticky : '');

        return (
            <div className={bigCardStyle}>
                <div className={style.bigCardContent} onMouseEnter={this.enterArticle} onMouseLeave={this.leaveArticle}>
                    {/* img */}
                    <div className={style.bigCardContainerImg}>
                        <img className={style.bigCardImg} alt="" src={coverImage}/>
                    </div>
                    {/* img router */}
                    <Link href="/posts/[category]/[title]" as={`/posts/${category}/${fileName}`}>
                        <a className={style.bigCardMask}/>
                    </Link>
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
                <Link href="/posts/[category]/[title]" as={`/posts/${category}/${fileName}`}>
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