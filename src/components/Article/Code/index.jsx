import React, { Component } from 'react';
import { message } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IoCopyOutline, IoExpandOutline } from "react-icons/io5";
import style from './index.module.less';

class Code extends Component {

    static preStyle = {
        background: 'transparent',
        fontSize: '1rem',
        padding: '0 0 .5rem'
    };

    static codeStyle = {};

    iconClick = () => {
        message.info('功能还在施工中', 0.5).then();
    };

    render() {
        const {language, value} = this.props;

        return (
            <figure className={style.figure}>
                <figcaption>
                    <div className={style.btnIcon}/>
                    <div className={style.language}>{language}</div>
                    <div>
                        <IoCopyOutline className={style.icon} onClick={this.iconClick}/>
                        <IoExpandOutline className={style.icon} onClick={this.iconClick}/>
                    </div>
                </figcaption>
                <SyntaxHighlighter customStyle={Code.preStyle} codeTagProps={Code.codeStyle} showLineNumbers
                                   style={vscDarkPlus} language={language}
                                   children={value}/>
            </figure>
        );
    }
}

export default Code;