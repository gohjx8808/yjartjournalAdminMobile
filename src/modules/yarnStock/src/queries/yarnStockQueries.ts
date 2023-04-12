import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { YarnStockFilterContext } from "../../../../context/YarnStockFilterContext";
import { getAllYarnStock } from "../apis/yarnStockApis";

export const useAllYarnStock = () => {
	const { yarnCategoryIds, yarnColorCategoryIds } = useContext(
		YarnStockFilterContext,
	);

	return useQuery(
		["getAllYarnStocks", yarnCategoryIds, yarnColorCategoryIds],
		async () =>
			(await getAllYarnStock({ yarnCategoryIds, yarnColorCategoryIds }))?.data
				.data,
		{ enabled: yarnCategoryIds.length > 0 && yarnColorCategoryIds.length > 0 },
	);
};
