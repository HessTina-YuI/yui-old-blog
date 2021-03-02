import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import { BigArticleCard } from "../ArticleCard";

class TopArticle extends Component {

    render() {
        const {topArticles} = this.props;
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    {/* ModuleSplit component */}
                    <ModuleSplit title="顶置文章"/>
                    {/* BigArticleCard component */}
                    {
                        topArticles ? topArticles.map((article, index) => {
                            return <BigArticleCard {...article} key={index}/>;
                        }) : null
                    }
                </div>
            </section>
        );
    }
}

export default TopArticle;