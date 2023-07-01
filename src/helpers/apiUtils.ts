import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from "react-native-config";

const apiUrl = Config.YJARTJOURNAL_API_URL;

export const getRequest = async <T>(url: string, data?: any) => {
	const token = await AsyncStorage.getItem("API_TOKEN");
	let apiResponse;
	if (apiUrl !== undefined && token !== null) {
		apiResponse = axios.get<YJResponse<T>>(`${apiUrl}${url}`, {
			params: data,
			headers: { Authorization: `Bearer ${token}` },
		});
	}

	return await apiResponse;
};

export const postRequest = async <T>(
	url: string,
	payload: any,
	requireAuth: boolean = true,
) => {
	const token = await AsyncStorage.getItem("API_TOKEN");
	let headers = {};
	if (requireAuth && token !== null) {
		headers = { ...headers, Authorization: `Bearer ${token}` };
	}
	let apiResponse;
	if (apiUrl !== undefined) {
		apiResponse = axios.post<YJResponse<T>>(`${apiUrl}${url}`, payload, {
			headers,
		});
	}

	return await apiResponse;
};
