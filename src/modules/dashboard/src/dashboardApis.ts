import { getRequest } from "../../../helpers/apiUtils";

export const getYarnStockOverview = async () =>
	await getRequest<dashboard.yarnStockOverview>(
		"/dashboard/yarn-stock-overview",
	);
