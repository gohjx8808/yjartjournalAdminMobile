import { useMutation } from "@tanstack/react-query";
import { postUpdateYarnCategory } from "../apis/yarnCategoryApis";
import { useContext } from "react";
import { StatusDialogContext } from "../../../../context/StatusDialogContext";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "./masterDataQueries";
import type { AxiosError } from "axios";
import { postUpdateYarnColorCategory } from "../apis/yarnColorCategoryApi";

export const useUpdateYarnCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnCategories();

	return useMutation(["updateYarnCategory"], postUpdateYarnCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn category had been updated!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn category had failed to update. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "Update Yarn Category",
			});
		},
	});
};

export const useUpdateYarnColorCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnColorCategories();

	return useMutation(["updateYarnColorCategory"], postUpdateYarnColorCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn color category had been updated!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn color category had failed to update. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "Update Yarn Color Category",
			});
		},
	});
};
