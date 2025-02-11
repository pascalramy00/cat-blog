export type Post = {
	_id: string;
	title: string;
	slug: { current: string };
	author: Reference;
	mainImage?: Image;
	categories?: Reference[];
	publishedAt?: string;
	body: string;
};

export type Category = {
	_id: string;
	title: string;
	description: string;
};

export type Author = {
	_id: string;
	name: string;
	slug: { current: string };
	image?: Image;
	bio: Block[];
};

export type Reference = {
	_ref: string;
	_type: string;
};

export type Image = {
	asset: {
		_ref: string;
		_type: 'reference';
	};
};

export type Block = {
	_key: string;
	_type: 'block';
	children: { _key: string; text: string }[];
	style?: string;
};
