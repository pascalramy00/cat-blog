import { sanityClient } from './client';

export async function getPosts() {
	return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title, slug, publishedAt, body, author->{name, avatar}
  }`);
}

export async function getPost(slug: string) {
	return sanityClient.fetch(
		`*[_type == "post" && slug.current == $slug][0] {
      title, body, publishedAt, author->{name}
    }`,
		{ slug }
	);
}
