import React, { Component } from 'react';
import cls from 'classnames';
import Header from "../Header";

class Article extends Component {
    render() {
        const {article} = this.props;

        const mdStyle = cls('markdown');

        return (
            <>
                {/* Header component */}
                {/*<Header/>*/}
                <div className={mdStyle} dangerouslySetInnerHTML={{ __html: article.content }}/>
            </>
        );
    }
}

export default Article;