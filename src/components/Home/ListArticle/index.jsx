import React, { Component } from 'react';
import cls from 'classnames';
import ModuleSplit from "../ModuleSplit";
import { SmallArticleCard } from "../ArticleCard";
import style from './index.module.less';

class ListArticle extends Component {
    render() {
        const {listArticles} = this.props;
        const context = cls('context');

        return (
            <section>
                <div className={context}>
                    {/* ModuleSplit component */}
                    <ModuleSplit title="全部文章"/>
                    {/* SmallArticleCard component */}
                    <div className={style.listArticle}>
                        {
                            listArticles ? listArticles.map((article, index) => {
                                return <SmallArticleCard {...article} key={index}/>;
                            }) : null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default ListArticle;