declare namespace auth {
	interface signInPayload {
		email: string;
		password: string;
		role: number;
	}

	interface signInResponse {
		accessToken: string;
	}
}
