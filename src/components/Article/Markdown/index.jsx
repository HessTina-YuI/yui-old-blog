import React, { Component } from 'react';
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import gemoji from "remark-gemoji";
import cls from 'classnames';
import HeadingBlock from "../HeadingBlock";
import Code from "../Code";

require('./index.less');

class Markdown extends Component {
    renderers = {
        heading: ({level, children}) => {
            let value;
            if (!children && children.length <= 0) {
                value = '';
            } else {
                value = children[0].props.value;
            }

            return <HeadingBlock level={level} value={value}/>;
        },
        code: ({language, value}) => <Code language={language} value={value}/>
    };

    render() {
        const {content} = this.props;

        const mdStyle = cls('markdown');

        return (
            <div className={mdStyle}>
                <ReactMarkdownWithHtml renderers={this.renderers} plugins={[[gfm], [gemoji]]}
                                       children={content} allowDangerousHtml/>
            </div>
        );
    }
}

export default Markdown;