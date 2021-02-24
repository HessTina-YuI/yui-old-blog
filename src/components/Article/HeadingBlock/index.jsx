import React, { Component } from 'react';
import style from './index.module.less';

class HeadingBlock extends Component {
    render() {
        const {level, children} = this.props;

        if (!children && children.length <= 0) {
            return <>{children}</>;
        }

        const nodeValue = children[0].props.value;
        return (
            <div className={style.headingBlock}>
                <Heading className={style.heading} level={`h${level}`} id={nodeValue}>
                    <div className={style.level}>H<span>{level}</span></div>
                    <span className={style.title}>{children}</span>
                    <a href={`#${nodeValue}`} className={style.link}>#</a>
                </Heading>
                <div className={style.split}/>
            </div>
        );
    }
}

function Heading({level = "h5", children, ...props}) {
    const elements = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
    };

    return React.createElement(elements[level], props, children);
}


export default HeadingBlock;