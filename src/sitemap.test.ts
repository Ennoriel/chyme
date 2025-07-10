import { describe, it, expect } from 'vitest';
import { getSitemap } from './sitemap';

describe('sitemap', () => {
	it('getSitemap', () => {
		expect(
			getSitemap(
				'https://machyme.fr',
				['/', '/blog', '/show/'],
				[{ path: '/other', priority: 0.3 }]
			)
		).toStrictEqual(`<?xml version="1.0" encoding="UTF-8" ?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		<url><loc>https://machyme.fr/</loc><priority>0.85</priority></url>
		<url><loc>https://machyme.fr/blog/</loc><priority>0.85</priority></url>
		<url><loc>https://machyme.fr/show/</loc><priority>0.85</priority></url>
		<url><loc>https://machyme.fr/other/</loc><priority>0.3</priority></url>
	</urlset>`);
	});
});
