export const prerender = true;

import { fetchMarkdownPosts } from '$lib/utils';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>evan alvarez's writings</title>
  <description>programming can be fun sometimes</description>
  <link>https://evanalvarez.dev</link>
  <atom:link href="https://evanalvarez.dev/rss.xml" rel="self" type="application/rss+xml"/>
  ${posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>https://evanalvarez.dev/writings/posts/${post.slug}</link>
      <guid>https://evanalvarez.dev/writings/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description || ''}</description>
    </item>
  `
    )
    .join('')}
</channel>
</rss>`;

  return new Response(render(sortedPosts), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
