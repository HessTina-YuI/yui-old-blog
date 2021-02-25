import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import gemoji from "remark-gemoji";
import cls from 'classnames';
import HeadingBlock from "../HeadingBlock";
import Code from "../Code";
import { addAnchor, initAnchor } from "../../../redux/AnchorMemu/action";

class Markdown extends Component {
    renderers = {
        heading: ({level, children}) => {
            let value;
            if (!children && children.length <= 0) {
                value = '';
            } else {
                value = children[0].props.value;
            }

            const {addAnchor} = this.props;
            addAnchor({level, value});

            return <HeadingBlock level={level} value={value}/>;
        },
        code: ({language, value}) => <Code language={language} value={value}/>
    };

    // don't update, the heading will repeat render, and wrong.
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

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

export default connect(
    null,
    {initAnchor, addAnchor}
)(Markdown);