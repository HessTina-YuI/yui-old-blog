import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import gemoji from 'remark-gemoji';
import cls from 'classnames';
import Header from "../Header";
import Code from "./Code";
import HeadingBlock from "./HeadingBlock";

class Article extends Component {
    renderers = {
        heading: ({level, children}) => <HeadingBlock level={level} children={children}/>,
        code: ({language, value}) => <Code language={language} value={value}/>
    };

    render() {
        const {content} = this.props.article;

        const mdStyle = cls('context', 'markdown');

        return (
            <>
                {/* Header component */}
                {/*<Header/>*/}
                <div className={mdStyle}>
                    <ReactMarkdown renderers={this.renderers} plugins={[[gfm], [gemoji]]} children={content}/>
                </div>
            </>
        );
    }
}

export default Article;