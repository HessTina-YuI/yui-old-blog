import React, { Component } from 'react';
import style from './index.module.less';

class Loader extends Component {
    render() {
        return (
            <div className={style.container}>
                <svg className={style.svg}>
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="-10%" x2="100%" y2="100%">
                            <stop offset="60%" stopColor="#36D1DC" stopOpacity="1"/>
                            <stop offset="100%" stopColor="#5B86E5" stopOpacity="1"/>
                        </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="100" stroke="url(#grad1)" strokeWidth="40" strokeLinecap="round"
                            fill="none" className={style.leftCircle}/>
                    <circle cx="200" cy="200" r="100" stroke="url(#grad1)" strokeWidth="40" strokeLinecap="round"
                            fill="none" className={style.rightCircle}/>
                </svg>
            </div>
        );
    }
}

export default Loader;