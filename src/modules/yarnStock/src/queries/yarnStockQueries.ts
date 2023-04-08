import { useQuery } from "@tanstack/react-query";
import { getAllYarnCategories } from "../apis/yarnCategoryApis";

export const useAllYarnCategories = () =>
	useQuery(
		["getAllYarnCategories"],
		async () => (await getAllYarnCategories())?.data.data,
	);
