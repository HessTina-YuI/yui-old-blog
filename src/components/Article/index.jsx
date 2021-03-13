import React, { Component } from 'react';
import { IoCalendar, IoPencil, IoTime, IoFolder } from "react-icons/io5";
import Header from '../Header';
import SkipTool from "../SkipTool";
import AnchorMenu from './AnchorMenu';
import Markdown from "./Markdown";
import style from './index.module.less';

class Article extends Component {

    render() {
        const {content, articleTopImage, title, date, characters, readTime} = this.props.article;

        return (
            <>
                {/* Header component */}
                <Header showHeaderTop={500}/>

                <div className={style.articleTopImg} style={{backgroundImage: `url(${articleTopImage})`}}>
                    <div className={style.title}>{title}</div>
                    <ul className={style.description}>
                        {/* date */}
                        <li>
                            <IoCalendar className={style.icon}/>
                            <span>文章发布于 {date}</span>
                        </li>
                        {/* characters */}
                        <li>
                            <IoPencil className={style.icon}/>
                            <span>本文字数约为 {characters}k 字</span>
                        </li>
                        {/* readTime */}
                        <li>
                            <IoTime className={style.icon}/>
                            <span>阅读时长约为 {readTime} 分钟</span>
                        </li>
                    </ul>
                </div>

                <div className={style.articleMask}/>

                <div className={style.article}>
                    <div className={style.articleContent}>
                        <Markdown content={content}/>
                    </div>

                    <div className={style.anchorMenu}>
                        <AnchorMenu/>
                    </div>
                </div>

                <SkipTool showMenuTop={500}/>
            </>
        );
    }
}

export default Article;
