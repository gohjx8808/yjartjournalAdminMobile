import { useQuery } from "@tanstack/react-query";
import { getAllYarnCategories } from "../apis/yarnCategoryApis";
import { getAllYarnColorCategories } from "../apis/yarnColorCategoryApi";

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
