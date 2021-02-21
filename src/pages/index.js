import Home from '../components/Home';
import { getAllPosts } from '../lib/api';
require('../styles/global.less');

const Index = () => {
    return (
        <main>
            <Home/>
        </main>
    );
};

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'coverImage',
        'characters',
        'category',
        'description',
        'tag'
    ])

    return {
        props: { allPosts },
    }
}

export default Index;