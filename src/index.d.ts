interface optionData {
	id: number;
	name: string;
}

interface YJResponse<T> {
	data: T;
}

interface YJApiError {
	message: string;
}
