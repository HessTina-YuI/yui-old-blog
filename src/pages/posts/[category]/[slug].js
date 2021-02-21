import React from 'react';
import { getPostBySlug, getAllPosts } from '../../../lib/api';
require('../../../styles/global.less');

function PostTemplate({ post, morePosts, preview }) {
    return (
        <div>
            {post.content}
        </div>
    );
}

export async function getStaticProps({params}) {
    const {category, slug} = params;
    const item = getPostBySlug(category, slug, [
        'title',
        'date',
        'coverImage',
        'characters',
        'category',
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
}

export async function getStaticPaths() {
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
}

export default PostTemplate;