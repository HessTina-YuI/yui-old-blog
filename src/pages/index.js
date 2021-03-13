import Home from '../components/Home';
import { getAllPosts } from '../lib/api';
import yaml from '../config/common.yml';

require('../styles/global.less');

const Index = (props) => {
    return (
        <main>
            <Home {...props}/>
        </main>
    );
};

export const getStaticProps = async () => {
    const allArticles = getAllPosts([
        'title',
        'date',
        'dateTime',
        'coverImage',
        'characters',
        'readTime',
        'category',
        'description',
        'tag',
        'slug'
    ]);

    let allPostsMap = new Map();
    allArticles.forEach(posts => {
        const key = `/${posts.category}/${posts.slug}.md`;
        allPostsMap.set(key, posts);
    });

    const topArticlePaths = yaml.topArticle;
    const topArticles = topArticlePaths.map(path => allPostsMap.get(path));

    return {
        props: {allArticles, topArticles}
    };
};

export default Index;