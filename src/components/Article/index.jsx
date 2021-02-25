import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import gemoji from 'remark-gemoji';
import cls from 'classnames';
import Header from '../Header';
import Code from './Code';
import HeadingBlock from './HeadingBlock';
import AnchorMenu from './AnchorMenu';
import { initAnchor, addAnchor } from '../../redux/AnchorMemu/action';

class Article extends PureComponent {
    constructor(props) {
        super(props);

        const {initAnchor} = props;
        initAnchor();
    }

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

    render() {
        const {content} = this.props.article;

        const mdStyle = cls('context', 'markdown');

        return (
            <>
                {/* Header component */}
                {/*<Header/>*/}
                <AnchorMenu/>

                <div className={mdStyle}>
                    <ReactMarkdownWithHtml renderers={this.renderers} plugins={[[gfm], [gemoji]]}
                                           children={content} allowDangerousHtml/>
                </div>
            </>
        );
    }
}

export default connect(
    null,
    {initAnchor, addAnchor}
)(Article);
