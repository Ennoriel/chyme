import { describe, it, expect, vi } from 'vitest';
import { getRss } from './rss';

describe('rss', () => {
	it('getRss', () => {
		expect(
			getRss({
				title: 'Machyme blog articles',
				description: 'New blog articles',
				link: 'https://fake-website.fr/blog/',
				ttlInMin: 24 * 60,
				posts: [
					{
						title: 'fake title',
						description: 'fake content',
						date: 'Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)',
						link: 'https://fake-website.fr/blog/blog-article'
					}
				]
			})
		).toStrictEqual(
			'<?xml version="1.0" encoding="UTF-8" ?> <rss version="2.0"> <channel> <title>Machyme blog articles</title> <description>New blog articles</description> <link>https://fake-website.fr/blog/</link> <lastBuildDate>Sun, 10 Jul 2022 15:12:22 GMT</lastBuildDate> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <ttl>1440</ttl> <item> <title>fake title</title> <link>https://fake-website.fr/blog/blog-article</link> <guid>https://fake-website.fr/blog/blog-article</guid> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <description>fake content</description> </item> </channel> </rss>'
		);

		expect(
			getRss({
				title: 'Machyme blog articles',
				description: 'New blog articles',
				link: 'https://fake-website.fr/blog/',
				ttlInMin: 24 * 60,
				posts: [
					{
						title: 'fake title',
						description: 'fake content',
						date: 'Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)',
						link: 'https://fake-website.fr/blog/blog-article',
						image: {
							type: 'image/jpg',
							url: 'https://fake-website.fr/blog/blog-article.jpg'
						}
					},
					{
						title: 'fake title',
						description: 'fake content',
						date: 'Sun Jul 10 2022 17:12:22 GMT+0200 (UTC)',
						link: 'https://fake-website.fr/blog/blog-article',
						image: {
							length: 14569,
							type: 'image/jpg',
							url: 'https://fake-website.fr/blog/blog-article.jpg'
						}
					}
				]
			})
		).toStrictEqual(
			'<?xml version="1.0" encoding="UTF-8" ?> <rss version="2.0"> <channel> <title>Machyme blog articles</title> <description>New blog articles</description> <link>https://fake-website.fr/blog/</link> <lastBuildDate>Sun, 10 Jul 2022 15:12:22 GMT</lastBuildDate> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <ttl>1440</ttl> <item> <title>fake title</title> <link>https://fake-website.fr/blog/blog-article</link> <guid>https://fake-website.fr/blog/blog-article</guid> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <description>fake content</description> <enclosure type="image/jpg" url="https://fake-website.fr/blog/blog-article.jpg" /> </item> <item> <title>fake title</title> <link>https://fake-website.fr/blog/blog-article</link> <guid>https://fake-website.fr/blog/blog-article</guid> <pubDate>Sun, 10 Jul 2022 15:12:22 GMT</pubDate> <description>fake content</description> <enclosure length="14569" type="image/jpg" url="https://fake-website.fr/blog/blog-article.jpg" /> </item> </channel> </rss>'
		);

		vi.useFakeTimers();
		vi.setSystemTime(new Date('2020-01-01'));

		expect(
			getRss({
				title: 'Machyme blog articles',
				description: 'New blog articles',
				link: 'https://fake-website.fr/blog/',
				ttlInMin: 24 * 60,
				posts: []
			})
		).toStrictEqual(
			'<?xml version="1.0" encoding="UTF-8" ?> <rss version="2.0"> <channel> <title>Machyme blog articles</title> <description>New blog articles</description> <link>https://fake-website.fr/blog/</link> <lastBuildDate>Wed, 01 Jan 2020 00:00:00 GMT</lastBuildDate> <pubDate>Wed, 01 Jan 2020 00:00:00 GMT</pubDate> <ttl>1440</ttl> </channel> </rss>'
		);

		vi.useRealTimers();
	});
});
