import { useMutation } from "@tanstack/react-query";
import { postUpdateYarnStockQuantity } from "../apis/yarnStockApis";
import { useContext } from "react";
import { StatusDialogContext } from "../../../../context/StatusDialogContext";
import { useAllYarnStock } from "./yarnStockQueries";

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
