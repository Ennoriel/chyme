import { getRss } from './rss';

describe('rss', () => {
	it('getRss', () => {
		expect(
			getRss({
				title: 'Machyme blog articles',
				description: 'New blog articles',
				link: 'https://www.machyme.fr/blog/',
				rssLink: 'https://www.machyme.fr/rss.xml',
				ttlInMin: 24 * 60,
				posts: [
					{
						title: 'Write interactive stories with InkJs & SvelteKit 🎢',
						description:
							'How to integrate InkJs in a new skeleton SvelteKit project: a fast and easy way to start an interactive narrative based story website.',
						date: 'Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)',
						link: 'https://www.machyme.fr/blog/svelte-inkjs'
					}
				]
			})
		).toStrictEqual(
			'<?xml version="1.0"?> <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"> <channel> <title>Machyme blog articles</title> <description>New blog articles</description> <link>https://www.machyme.fr/blog/</link> <lastBuildDate>Sun, 10 Jul 2022 15:12:22 GMT</lastBuildDate> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <ttl>1440</ttl> <atom:link href="https://www.machyme.fr/rss.xml" rel="self" type="application/rss+xml" /> <item> <title>Write interactive stories with InkJs &#38; SvelteKit 🎢</title> <link>https://www.machyme.fr/blog/svelte-inkjs</link> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <description>How to integrate InkJs in a new skeleton SvelteKit project: a fast and easy way to start an interactive narrative based story website.</description> </item> </channel> </rss>'
		);
	});
});