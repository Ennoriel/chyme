import { toDate } from './date';
import { dedupeSpaces, escapeXmlString } from './string';

type Post = {
	title: string;
	description: string;
	date: string | number | Date;
	link: string;
};

type Rss = {
	title: string;
	description: string;
	link: string;
	rssLink: string;
	ttlInMin: number;
	posts: Array<Post>;
};

export function getRss({ title, description, link, rssLink, ttlInMin, posts }: Rss) {
	const pubDate = toDate((posts?.[0] as Post)?.date, 'today')?.toUTCString();

	const rssPosts = posts
		.map(
			(entry) => `
            <item>
                <title>${escapeXmlString(entry.title)}</title>
                <link>${entry.link}</link>
                <pubDate>${toDate(entry.date, 'today')?.toUTCString()}</pubDate>
                <description>${escapeXmlString(entry.description)}</description>
            </item>
        `
		)
		.join('');

	const rss = `
        <?xml version="1.0"?>
        <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
            <channel>
                <title>${escapeXmlString(title)}</title>
                <description>${escapeXmlString(description)}</description>
                <link>${link}</link>
                <lastBuildDate>${pubDate}</lastBuildDate>
                <pubDate>${pubDate}</pubDate>
                <ttl>${ttlInMin}</ttl>
                <atom:link href="${rssLink}" rel="self" type="application/rss+xml" />
                ${rssPosts}
            </channel>
        </rss>
    `;

	return dedupeSpaces(rss);
}
