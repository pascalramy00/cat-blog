import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '../../../../sanity/client';

export async function POST(req: NextRequest) {
	console.log('entered the route');
	try {
		const { title, slug, body, authorId } = await req.json();

		// Ensure all required fields are provided
		if (!title || !slug || !body || !authorId) {
			console.log('MISSING REQ FIELDS');
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Create a new post document in Sanity
		const newPost = await sanityClient.create({
			_type: 'post',
			title,
			slug: { current: slug },
			body,
			publishedAt: new Date().toISOString(),
			author: { _type: 'reference', _ref: authorId },
		});

		return NextResponse.json(newPost, { status: 201 });
	} catch (error) {
		console.error('Sanity Create Post Error:', error);
		return NextResponse.json(
			{ error: 'Failed to create post' },
			{ status: 500 }
		);
	}
}
