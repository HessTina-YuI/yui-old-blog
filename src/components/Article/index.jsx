import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import SkipTool from "../SkipTool";
import AnchorMenu from './AnchorMenu';
import Markdown from "./Markdown";
import { initAnchor, addAnchor } from '../../redux/AnchorMemu/action';
import style from './index.module.less';

class Article extends Component {
    constructor(props) {
        super(props);

        const {initAnchor} = props;
        initAnchor();
    }

    render() {
        const {content, articleTopImage} = this.props.article;

        return (
            <>
                {/* Header component */}
                <Header showHeaderTop={500}/>

                <div className={style.articleTopImg} style={{backgroundImage: `url(${articleTopImage})`}}/>

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

export default connect(
    (state) => ({anchors: state.anchorMenu}),
    {initAnchor, addAnchor}
)(Article);
