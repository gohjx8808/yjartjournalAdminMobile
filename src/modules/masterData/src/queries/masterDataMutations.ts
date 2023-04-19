import { useMutation } from "@tanstack/react-query";
import {
	postAddYarnCategory,
	postDeleteYarnCategory,
	postUpdateYarnCategory,
} from "../apis/yarnCategoryApis";
import { useContext } from "react";
import { StatusDialogContext } from "../../../../context/StatusDialogContext";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "./masterDataQueries";
import type { AxiosError } from "axios";
import {
	postAddYarnColorCategory,
	postDeleteYarnColorCategory,
	postUpdateYarnColorCategory,
} from "../apis/yarnColorCategoryApi";

export const useAddYarnCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnCategories();

	return useMutation(["addYarnCategory"], postAddYarnCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn category had been added!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn category had failed to add. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "Add Yarn Category",
			});
		},
	});
};

export const useAddYarnColorCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnColorCategories();

	return useMutation(["addYarnColorCategory"], postAddYarnColorCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn color category had been added!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn color category had failed to add. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "aDD Yarn Color Category",
			});
		},
	});
};

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

export const useDeleteYarnCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnCategories();

	return useMutation(["deleteYarnCategory"], postDeleteYarnCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn category had been deleted!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn category had failed to delete. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "Delete Yarn Category",
			});
		},
	});
};

export const useDeleteYarnColorCategory = () => {
	const { statusDialogData, setStatusDialogData } =
		useContext(StatusDialogContext);
	const { refetch } = useAllYarnColorCategories();

	return useMutation(["deleteYarnColorCategory"], postDeleteYarnColorCategory, {
		onSuccess: async () => {
			await refetch();
			setStatusDialogData({
				...statusDialogData,
				isSuccess: true,
				message: "The yarn color category had been deleted!",
			});
		},
		onError: (err: AxiosError<YJApiError>) => {
			setStatusDialogData({
				...statusDialogData,
				isSuccess: false,
				message:
					err.response?.data.message ??
					"The yarn color category had failed to delete. Please try again later.",
			});
		},
		onSettled: () => {
			setStatusDialogData({
				...statusDialogData,
				visible: true,
				title: "Delete Yarn Color Category",
			});
		},
	});
};
