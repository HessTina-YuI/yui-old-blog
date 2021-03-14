import React, { Component } from 'react';
import { scrollToView } from "../../../lib/scroller";
import cls from 'classnames';
import style from './index.module.less';

class HeadingBlock extends Component {
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    };

    render() {
        const {level, content, value} = this.props;

        const headingIgnoreTocStyle = cls('ignoreToc', style.heading);

        return (
            <>
                <div className={style.headingBlock}>
                    <Heading className={headingIgnoreTocStyle} level={`h${level}`} id={value}>
                        <div className={style.level}>H<span>{level}</span></div>
                    </Heading>
                    <Heading className={style.heading} level={`h${level}`} id={value}>
                        {
                            content.map((c, index) => {
                                switch (c.type) {
                                    case 'link':
                                        return (
                                            <a href={c.url} target='_blank' className={style.title} key={index}>
                                                {c.value}
                                            </a>
                                        );
                                    case 'text':
                                        return (
                                            <span className={style.title} key={index}>{c.value}</span>
                                        );
                                    default:
                                        return <></>;
                                }
                            })
                        }
                    </Heading>
                    <Heading className={headingIgnoreTocStyle} level={`h${level}`} id={value}>
                        <a className={style.link} onClick={() => scrollToView(value, 100)}>#</a>
                    </Heading>
                </div>
                <div className={style.split}/>
            </>
        );
    }

}

function Heading({
                     level = 'h5'
                     ,
                     children
                     , ...
        props
                 }
) {
    const elements = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5'
    };

    return React.createElement(elements[level], props, children);
}

export default HeadingBlock;
