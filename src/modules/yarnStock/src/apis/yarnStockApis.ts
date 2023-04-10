import { postRequest } from "../../../../helpers/apiUtils";

export const getAllYarnStock = async (
	payload: yarnStock.getAllYarnStockPayload,
) =>
	await postRequest<yarnStock.yarnStockData[]>("/stocks/yarn-stocks", payload);
