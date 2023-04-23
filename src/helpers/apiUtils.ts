import axios from "axios";
import Config from "react-native-config";

const apiUrl = Config.YJARTJOURNAL_API_URL;

export const getRequest = async <T>(url: string, data?: any) => {
	let apiResponse;
	if (apiUrl !== undefined) {
		apiResponse = axios.get<YJResponse<T>>(`${apiUrl}${url}`, { params: data });
	}

	return await apiResponse;
};

export const postRequest = async <T>(url: string, payload: any) => {
	let apiResponse;
	if (apiUrl !== undefined) {
		apiResponse = axios.post<YJResponse<T>>(`${apiUrl}${url}`, payload);
	}

	return await apiResponse;
};
