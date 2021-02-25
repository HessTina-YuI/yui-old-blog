import React, { Component } from 'react';
import { scrollToView } from "../../../lib/scroller";
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
        const {level, value} = this.props;

        return (
            <div className={style.headingBlock}>
                <Heading className={style.heading} level={`h${level}`} id={value}>
                    <div className={style.level}>H<span>{level}</span></div>
                    <span className={style.title}>{value}</span>
                    <a className={style.link} onClick={() => scrollToView(value, 100)}>#</a>
                </Heading>
                <div className={style.split}/>
            </div>
        );
    }
}

function Heading({level = 'h5', children, ...props}) {
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
