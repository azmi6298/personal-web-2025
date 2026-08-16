import { getCollection } from 'astro:content';

/**
 * Published posts, newest first. Drafts are visible while developing so you can
 * read what you're writing, and disappear from the built site.
 */
export async function getPublishedPosts() {
	const posts = await getCollection(
		'blog',
		({ data }) => import.meta.env.DEV || !data.draft,
	);
	return posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

// en-GB, not en: day-first ordering with English month names ("26 June 2020").
// Dates stay English even on Indonesian posts.
export function formatDate(date: Date) {
	return date.toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
