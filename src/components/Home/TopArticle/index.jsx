import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import { BigArticleCard } from "../ArticleCard";
import topArticle from '../../../../public/article/topArticle.yml';
import style from "./index.module.less";

class TopArticle extends Component {
    state = {
        topArticle: []
    };

    componentDidMount() {
        this.setState({topArticle: topArticle});
    }

    render() {
        const{topArticle} = this.state;
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    {/* ModuleSplit component */}
                    <ModuleSplit title="TopArticle"/>
                    {/* BigArticleCard component */}
                    {
                        topArticle ? topArticle.map(article => {
                                const {fileName} = article;
                                return <BigArticleCard {...article} key={fileName}/>;
                            })
                            : null
                    }
                </div>
            </section>
        );
    }
}

export default TopArticle;