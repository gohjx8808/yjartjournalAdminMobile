import { postRequest } from "../../../../helpers/apiUtils";

export const getAllYarnStock = async (
	payload: yarnStock.getAllYarnStockPayload,
) =>
	await postRequest<yarnStock.yarnStockData[]>("/stocks/yarn-stocks", payload);

export const postUpdateYarnStockQuantity = async (
	payload: yarnStock.updateQuantityPayload,
) => await postRequest("/stocks/update-quantity", payload);

export const postAddYarnStock = async (
	payload: yarnStock.addYarnStockPayload,
) => await postRequest("/stocks/add-new", payload);

export const postDeleteYarnStock = async (
	payload: yarnStock.deleteYarnStockPayload,
) => await postRequest("/stocks/delete", payload);
