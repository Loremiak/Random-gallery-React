export interface Images {
	current_user_collections: {
		title?: string;
	};
	urls: {
		regular: string;
	};
	user?: {
		bio: string;
		portfolio_url?: string;
		name: string;
	};
	created_at: number | string;
}
