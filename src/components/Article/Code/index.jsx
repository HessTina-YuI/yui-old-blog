import React, { Component } from 'react';
import { message } from 'antd';
import cls from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IoCopyOutline, IoExpandOutline } from "react-icons/io5";
import style from './index.module.less';

class Code extends Component {

    state = {
        expand: false
    };

    static preStyle = {
        background: 'transparent',
        fontSize: '1rem',
        padding: '0 .725rem .5rem'
    };

    static codeStyle = {};

    static lineNumberStyle = {
        minWidth: '2.25em'
    };

    expandCode = () => {
        this.setState({expand: !this.state.expand});
    };

    copyCode = (value) => {
        let textarea = document.createElement('textarea');
        textarea.value = value;
        document.body.appendChild(textarea);
        textarea.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            message.success('复制到剪贴板', 0.5).then();
        }
        document.body.removeChild(textarea);
    };

    render() {
        const {language, value} = this.props;
        const {expand} = this.state;

        const figureStyle = cls(style.figure, expand ? style.active : '');

        return (
            <figure className={figureStyle}>
                <figcaption>
                    <div className={style.btnIcon}/>
                    <div className={style.language}>{language}</div>
                    <div>
                        <IoCopyOutline className={style.icon} onClick={() => this.copyCode(value)}/>
                        <IoExpandOutline className={style.icon} onClick={() => this.expandCode()}/>
                    </div>
                </figcaption>
                <SyntaxHighlighter customStyle={Code.preStyle} codeTagProps={Code.codeStyle}
                                   lineNumberStyle={Code.lineNumberStyle} showLineNumbers
                                   style={vscDarkPlus} language={language}
                                   children={value}/>
            </figure>
        );
    }
}

export default Code;
