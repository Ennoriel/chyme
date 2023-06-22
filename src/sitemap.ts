export type SitemapPath = {
	path: string;
	priority: number;
};

export const SITEMAP_DEFAULT_PRIORITY = 0.85;

function normalizePath(path: string | undefined | SitemapPath): SitemapPath {
	if (!path) {
		return {
			path: '/',
			priority: SITEMAP_DEFAULT_PRIORITY
		};
	} else if (typeof path === 'string') {
		return {
			path,
			priority: SITEMAP_DEFAULT_PRIORITY
		};
	} else {
		return path;
	}
}

export function getSitemap(origin: string, ...paths: (string | SitemapPath)[][]) {
	const formatUrl = (path: string) => `${origin}${path.endsWith('/') ? path : `${path}/`}`;

	const formatEntry = ({ path, priority }: SitemapPath) =>
		`<url><loc>${formatUrl(path)}</loc><priority>${priority}</priority></url>`;

	return `<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		${paths.flat().map(normalizePath).map(formatEntry).join('\n\t\t')}
	</urlset>`;
}
