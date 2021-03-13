import React, { Component } from 'react';
import { Element, Events, scroller } from 'react-scroll';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import gemoji from 'remark-gemoji';
import math from 'remark-math';
import footnotes from 'remark-footnotes';
import cls from 'classnames';
import HeadingBlock from '../HeadingBlock';
import Code from '../Code';
import Github from '../Github';
import KateX from '../KateX';

require('./index.less');

class Markdown extends Component {
    renderers = {
        heading: ({level, children}) => {
            if (!children && children.length <= 0) {
                return <div/>;
            }

            let value;
            let href;

            if (children[0].props.href) {
                href = children[0].props.href;
                value = children[0].props.children[0].props.value;
            } else {
                value = children[0].props.value;
            }

            return <HeadingBlock level={level} value={value} href={href}/>;
        },
        code: ({language: tag, value}) => {
            if (tag === 'github') {
                return <Github url={value}/>;
            }

            const tags = tag.split(':');
            let line = [];
            if (tags.length > 1) {
                line = tags[1].trim().split(',');
            }

            return <Code language={tags[0]} line={line} value={value}/>;
        },
        footnoteReference: ({identifier, label}) => {
            return (
                <span className='annotation' onClick={() => this.scrollToContainer(`sup${label}`)}>
                    <sup>[{label}]</sup>
                </span>
            );
        },
        footnoteDefinition: ({identifier, label, node}) => {
            return (
                <Element name={`sup${label}`}>
                    <p>[{label}]: {node.children[0].children[0].value}</p>
                </Element>
            );
        },
        inlineMath: ({value}) => <KateX math={value}/>,
        math: ({value}) => <KateX block math={value}/>
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', () => {
        });
        Events.scrollEvent.register('end', () => {
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToContainer = (to) => {
        scroller.scrollTo(to, {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuint',
            offset: -50
        });
    };

    render() {
        const {content} = this.props;

        const mdStyle = cls('markdown');

        return (
            <div className={mdStyle}>
                <ReactMarkdownWithHtml renderers={this.renderers} plugins={[[gfm], [gemoji], [math], [footnotes]]}
                                       children={content} allowDangerousHtml/>
            </div>
        );
    }
}

export default Markdown;
