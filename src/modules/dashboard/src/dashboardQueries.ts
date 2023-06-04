import { useQuery } from "@tanstack/react-query";
import { getYarnStockOverview } from "./dashboardApis";

export const useYarnStockOverview = () =>
	useQuery(
		["getYarnStockOverview"],
		async () => (await getYarnStockOverview())?.data.data,
	);
