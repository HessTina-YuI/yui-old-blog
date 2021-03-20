import React from 'react';
import { getPostBySlug, getAllPosts } from '../../../lib/api';
import dynamic from 'next/dynamic';
import Loader from '../../../components/Loader';

require('../../../styles/global.less');

const ArticleDynamic = dynamic(
    () => import('../../../components/Article'),
    {
        loading: () => <Loader/>,
        ssr: false
    }
);

const PostTemplate = ({post, morePosts, preview}) => {
    return (
        <main>
            <ArticleDynamic article={post}/>
        </main>
    );
};

export const getStaticProps = async ({params}) => {
    const {category, slug} = params;
    const item = getPostBySlug(category, slug, [
        'title',
        'date',
        'articleTopImage',
        'characters',
        'category',
        'readTime',
        'tag',
        'description',
        'content'
    ]);

    return {
        props: {
            post: {
                ...item
            }
        }
    };
};

export const getStaticPaths = async () => {
    const posts = getAllPosts(['category', 'slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    category: post.category,
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
};

export default PostTemplate;