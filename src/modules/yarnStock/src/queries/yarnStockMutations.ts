import { useMutation } from "@tanstack/react-query";
import {
	postAddYarnStock,
	postDeleteYarnStock,
	postUpdateYarnStock,
	postUpdateYarnStockQuantity,
} from "../apis/yarnStockApis";
import { useContext } from "react";
import { StatusDialogContext } from "../../../../context/StatusDialogContext";
import { useAllYarnStock } from "./yarnStockQueries";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";

import routeNames from "../../../router/routeNames";
import type { YarnStockNavigatorParamList } from "../../../router/MainRouter";
import { type AxiosError } from "axios";

export const useUpdateYarnStockQuantity = () => {
	const { setStatusDialogData } = useContext(StatusDialogContext);
	const { refetch } = useAllYarnStock();

	return useMutation(["updateYarnStockQuantity"], postUpdateYarnStockQuantity, {
		onSuccess: async () => {
			await refetch();
		},
		onError: () => {
			setStatusDialogData({
				title: "Update Yarn Stock Quantity",
				message: "The yarn stock quantity had failed to update!",
				isSuccess: false,
				visible: true,
			});
		},
	});
};

export const useAddYarnStock = () => {
	const { setStatusDialogData } = useContext(StatusDialogContext);
	const { refetch } = useAllYarnStock();
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();

	return useMutation(["addYarnStock"], postAddYarnStock, {
		onSuccess: async () => {
			await refetch();
			navigation.navigate(routeNames.YARN_STOCKS_DETAILS);
			setStatusDialogData({
				title: "Add Yarn Stock",
				message: "The yarn stock had been added!",
				isSuccess: true,
				visible: true,
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				title: "Add Yarn Stock",
				message:
					err.response?.data.message ?? "The yarn stock had failed to add!",
				isSuccess: false,
				visible: true,
			});
		},
	});
};

export const useUpdateYarnStock = () => {
	const { setStatusDialogData } = useContext(StatusDialogContext);
	const { refetch } = useAllYarnStock();
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();

	return useMutation(["updateYarnStock"], postUpdateYarnStock, {
		onSuccess: async () => {
			await refetch();
			navigation.navigate(routeNames.YARN_STOCKS_DETAILS);
			setStatusDialogData({
				title: "Update Yarn Stock",
				visible: true,
				message: "The yarn stock had been updated!",
				isSuccess: true,
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				title: "Update Yarn Stock",
				visible: true,
				message:
					err.response?.data.message ?? "The yarn stock had failed to update!",
				isSuccess: false,
			});
		},
	});
};

export const useDeleteYarnStock = () => {
	const { setStatusDialogData } = useContext(StatusDialogContext);
	const { refetch } = useAllYarnStock();

	return useMutation(["deleteYarnStock"], postDeleteYarnStock, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				title: "Delete Yarn Stock",
				message: "The yarn stock had been deleted!",
				isSuccess: true,
				visible: true,
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				title: "Delete Yarn Stock",
				message:
					err.response?.data.message ?? "The yarn stock had failed to delete!",
				isSuccess: false,
				visible: true,
			});
		},
	});
};
