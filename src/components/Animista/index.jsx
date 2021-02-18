import React, { Component } from 'react';
import cls from 'classnames';
import style from './index.module.less';

class FadeIn extends Component {
    render() {
        const {delay = 0, duration = 500} = this.props;
        const className = cls(this.props.className, style.fadeIn);

        return (
            <div className={className}
                 style={{
                     animationDelay: delay + 'ms',
                     animationDuration: duration + 'ms'
                 }}>
                {this.props.children}
            </div>
        );
    }
}

export { FadeIn };