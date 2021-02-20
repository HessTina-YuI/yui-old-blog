import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import { BigArticleCard } from "../ArticleCard";
import topArticle from '../../../../_article/topArticle.json';
import style from "./index.module.less";

class TopArticle extends Component {
    state = {
        topArticle: []
    };

    componentDidMount() {
        this.setState({topArticle: topArticle});
    }

    render() {
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    {/* ModuleSplit component */}
                    <ModuleSplit title="TopArticle"/>
                    {/* BigArticleCard component */}
                    {
                        topArticle ? topArticle.map(article => {
                                const {articleDoc} = article;
                                return <BigArticleCard {...article} key={articleDoc}/>;
                            })
                            : null
                    }
                </div>
            </section>
        );
    }
}

export default TopArticle;