import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parseToDate, formatDate } from './date';
import { getPostWordCount } from './characters';

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

/**
 * title, date, dateTime, coverImage, articleTopImage,
 * description, category, tag, slug
 * characters, readTime
 *
 * @param category
 * @param slug
 * @param fields
 * @returns {{}}
 */
export function getPostBySlug(category, slug, fields = []) {
    const fullPath = join(postsDirectory, `${category}/${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContents);
    const characters = Math.floor(getPostWordCount(content) / 100) / 10;
    let readTime = Math.floor(characters * 10 >> 1);
    readTime = readTime < 1 ? 1 : readTime;
    const dateTime = parseToDate(data.dateTime);

    const items = {};
    // Ensure only the minimal needed data is exposed
    fields.map((field) => {
        if (field === 'category') {
            return items[field] = category;
        }
        if (field === 'slug') {
            return items[field] = slug;
        }
        if (field === 'content') {
            return items[field] = content;
        }
        if (field === 'characters') {
            return items[field] = characters;
        }
        if (field === 'readTime') {
            return items[field] = readTime;
        }
        if (field === 'date') {
            return items[field] = formatDate(dateTime);
        }
        if (data[field]) {
            return items[field] = data[field];
        }
        return null;
    });

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();

    return slugs
        .map((value) => getPostBySlug(value.category, value.slug, fields))
        .sort((post1, post2) => (parseToDate(post1.dateTime) > parseToDate(post2.dateTime) ? -1 : 1));
}

