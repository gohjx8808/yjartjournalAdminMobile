import { useQuery } from "@tanstack/react-query";
import {
	getYarnCategoryCount,
	getYarnColorCategoryCount,
	getYarnStockOverview,
} from "./dashboardApis";

export const useYarnStockOverview = () =>
	useQuery(
		["getYarnStockOverview"],
		async () => (await getYarnStockOverview())?.data.data,
	);

export const useYarnCategoryCount = () =>
	useQuery(
		["getYarnCategoryCount"],
		async () => (await getYarnCategoryCount())?.data.data,
	);

export const useYarnColorCategoryCount = () =>
	useQuery(
		["getYarnColorCategoryCount"],
		async () => (await getYarnColorCategoryCount())?.data.data,
	);
