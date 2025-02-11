import { createClient } from '@sanity/client';

export const sanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: false,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
	token: process.env.SANITY_API_WRITE_TOKEN,
});
