import React, { Component } from 'react';
import cls from 'classnames';
import style from "./index.module.less";

class TopArticle extends Component {
    render() {
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    <div style={{height: '100vh'}}/>
                </div>
            </section>
        );
    }
}

export default TopArticle;