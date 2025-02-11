import { NextResponse } from 'next/server';
import { sanityClient } from '../../../../sanity/client';

export async function POST(req: Request) {
	console.log('entered the createAuthor route');
	try {
		const { name, slug, bio } = await req.json();

		if (!name || !slug) {
			console.log('MISSING REQ FIELDS');
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		const newAuthor = await sanityClient.create({
			_type: 'author',
			name,
			slug: { current: slug },
			bio: bio || [],
		});

		return NextResponse.json(newAuthor, { status: 201 });
	} catch (error) {
		console.error('Sanity Create Author Error:', error);
		return NextResponse.json(
			{ error: 'Failed to create author' },
			{ status: 500 }
		);
	}
}
