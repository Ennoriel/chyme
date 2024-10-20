import { toDate } from './date';
import { dedupeSpaces, escapeXmlString } from './string';

type Post = {
	title: string;
	description: string;
	date: string | number | Date;
	link: string;
	image?: {
		length?: number;
		type: string;
		url: string;
	};
};

type Rss = {
	title: string;
	description: string;
	link: string;
	ttlInMin: number;
	posts: Array<Post>;
};

export function getRss({ title, description, link, ttlInMin, posts }: Rss) {
	const pubDate = toDate((posts?.[0] as Post)?.date, 'today')?.toUTCString();

	const rssPosts = posts
		.map((entry) => {
			const enclosure = entry.image
				? `<enclosure ${entry.image.length ? `length="${entry.image.length}" ` : ''} type="${entry.image.type}" url="${entry.image.url}" />`
				: '';
			return ` <item>
                <title>${escapeXmlString(entry.title)}</title>
                <link>${entry.link}</link>
                <guid>${entry.link}</guid>
                <pubDate>${toDate(entry.date, 'today')?.toUTCString()}</pubDate>
                <description>${escapeXmlString(entry.description)}</description>
                ${enclosure}
            </item> `;
		})
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
            <channel>
                <title>${escapeXmlString(title)}</title>
                <description>${escapeXmlString(description)}</description>
                <link>${link}</link>
                <lastBuildDate>${pubDate}</lastBuildDate>
                <pubDate>${pubDate}</pubDate>
                <ttl>${ttlInMin}</ttl>
                ${rssPosts}
            </channel>
        </rss>
`;

	return dedupeSpaces(rss);
}
