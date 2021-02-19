import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import { BigArticleCard } from "../ArticleCard";
import style from "./index.module.less";

class TopArticle extends Component {
    render() {
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    <ModuleSplit title="TopArticle"/>
                    <BigArticleCard/>
                </div>
            </section>
        );
    }
}

export default TopArticle;