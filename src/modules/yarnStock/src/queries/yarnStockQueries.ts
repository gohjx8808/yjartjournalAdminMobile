import { useQuery } from "@tanstack/react-query";
import { getAllYarnCategories } from "../apis/yarnCategoryApis";
import { getAllYarnColorCategories } from "../apis/yarnColorCategoryApi";
import { useContext } from "react";
import { YarnStockFilterContext } from "../../../../context/YarnStockFilterContext";
import { getAllYarnStock } from "../apis/yarnStockApis";

export const useAllYarnCategories = () =>
	useQuery(
		["getAllYarnCategories"],
		async () => (await getAllYarnCategories())?.data.data,
	);

export const useAllYarnColorCategories = () =>
	useQuery(
		["getAllYarnColorCategories"],
		async () => (await getAllYarnColorCategories())?.data.data,
	);

export const useAllYarnStock = () => {
	const { yarnCategoryIds, yarnColorCategoryIds } = useContext(
		YarnStockFilterContext,
	);

	return useQuery(
		["getAllYarnStocks", yarnCategoryIds, yarnColorCategoryIds],
		async () =>
			(await getAllYarnStock({ yarnCategoryIds, yarnColorCategoryIds }))?.data
				.data,
	);
};
