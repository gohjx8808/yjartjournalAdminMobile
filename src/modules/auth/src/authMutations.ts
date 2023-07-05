import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, type NavigationProp } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { useContext } from "react";
import { StatusDialogContext } from "../../../context/StatusDialogContext";
import { type MainRouterParamList } from "../../router/MainRouter";
import routeNames from "../../router/routeNames";
import { postSignIn } from "./authApis";

export const useSignIn = () => {
	const { setStatusDialogData } = useContext(StatusDialogContext);
	const { navigate } = useNavigation<NavigationProp<MainRouterParamList>>();

	return useMutation(["signIn"], postSignIn, {
		onSuccess: async res => {
			const resToken = res?.data.data.accessToken;
			if (resToken !== undefined) {
				await AsyncStorage.setItem("API_TOKEN", resToken);
			}
			navigate(routeNames.DRAWER_NAV);
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				visible: true,
				isSuccess: false,
				title: "Sign In",
				message:
					err.response?.data.message ??
					"Network error. Please try again later.",
			});
		},
	});
};
