import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'public/article');

export function getPostSlugs() {
    const category = fs.readdirSync(postsDirectory).filter(i => !i.includes('.'));
    const slugParam = [];

    category.forEach(i => {
        const categoryPath = join(postsDirectory, i);
        const slugsPath = fs.readdirSync(categoryPath);
        slugsPath.forEach(j => {
            slugParam.push({category: i, slug: j.replace(/\.md$/, '')});
        });
    });

    return slugParam;
}


export function getPostBySlug(category, slug, fields = []) {
    const fullPath = join(postsDirectory, `${category}/${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);

    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'category') {
            items[field] = category;
        }
        if (field === 'slug') {
            items[field] = slug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();

    return slugs
        .map((value) => getPostBySlug(value.category, value.slug, fields));
    // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

