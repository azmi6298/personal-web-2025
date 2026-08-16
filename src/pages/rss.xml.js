import rss from '@astrojs/rss';
import { getPublishedPosts } from '@/utils/posts';

export async function GET(context) {
	const posts = await getPublishedPosts();

	return rss({
		title: "Azmi's blog",
		description:
			"Writing about frontend development, and whatever else I'm building.",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blogs/${post.id}/`,
		})),
	});
}
