import { getRequest } from "../../../../helpers/apiUtils";

export const getAllYarnStock = async (
	payload: yarnStock.getAllYarnStockPayload,
) =>
	await getRequest<yarnStock.yarnStockData[]>("/stocks/yarn-stocks", {
		payload,
	});
