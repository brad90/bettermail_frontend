export interface User {
	initials: string;
	avatar_url: string;
}

export interface Email {
	header: string;
	body: string;
	date: string;
	from: User;
}
