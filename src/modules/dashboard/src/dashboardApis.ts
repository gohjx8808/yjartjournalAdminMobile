import { getRequest } from "../../../helpers/apiUtils";

export const getYarnStockOverview = async () =>
	await getRequest<dashboard.yarnStockOverview>(
		"/dashboard/yarn-stock-overview",
	);

export const getYarnCategoryCount = async () =>
	await getRequest<dashboard.yarnCategoryCount>(
		"/dashboard/yarn-category-count",
	);

export const getYarnColorCategoryCount = async () =>
	await getRequest<dashboard.yarnColorCategoryCount>(
		"/dashboard/yarn-color-category-count",
	);
