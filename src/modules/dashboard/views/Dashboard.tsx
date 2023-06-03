import { makeStyles } from "@rneui/themed";
import React from "react";
import { getGreetings } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import YJText from "../../../sharedComponents/text/YJText";
import StatisticsCard from "./StatisticsCard";
import {
	useYarnCategoryCount,
	useYarnColorCategoryCount,
	useYarnStockOverview,
} from "../src/dashboardQueries";

const Dashboard = () => {
	const styles = useStyes();

	const {
		data: yarnStockOverview,
		isLoading: yarnStockOverviewLoading,
		isRefetching: yarnStockOverviewRefetching,
		refetch: yarnStockOverviewRefetch,
	} = useYarnStockOverview();
	const {
		data: yarnCategoryCount,
		isLoading: yarnCategoryCountLoading,
		isRefetching: yarnCategoryCountRefetching,
		refetch: yarnCategoryCountRefetch,
	} = useYarnCategoryCount();
	const {
		data: yarnColorCategoryCount,
		isLoading: yarnColorCategoryCountLoading,
		isRefetching: yarnColorCategoryCountRefetching,
		refetch: yarnColorCategoryCountRefetch,
	} = useYarnColorCategoryCount();

	const onRefresh = async () => {
		await yarnStockOverviewRefetch();
		await yarnCategoryCountRefetch();
		await yarnColorCategoryCountRefetch();
	};

	return (
		<YJHeader
			title="Dashboard"
			customScrollViewContentContainerStyle={styles.rootContainer}
			onRefresh={onRefresh}
			refreshing={
				yarnCategoryCountRefetching ||
				yarnColorCategoryCountRefetching ||
				yarnStockOverviewRefetching
			}
		>
			<YJText h4 bold>
				{getGreetings()}, Admin!
			</YJText>
			<StatisticsCard
				title="Total Yarn Stocks"
				content={yarnStockOverview?.totalYarn}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Reorder Yarn Stocks"
				content={yarnStockOverview?.totalReorderYarn}
				contentStyle={{
					color:
						(yarnStockOverview?.totalReorderYarn ?? 0) > 0 ? "red" : "green",
				}}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Yarn Category"
				content={yarnCategoryCount?.categoryCount}
				loading={yarnCategoryCountLoading}
			/>
			<StatisticsCard
				title="Total Yarn Color Category"
				content={yarnColorCategoryCount?.colorCategoryCount}
				loading={yarnColorCategoryCountLoading}
			/>
		</YJHeader>
	);
};

export default Dashboard;

const useStyes = makeStyles(() => ({
	rootContainer: {
		padding: 20,
	},
}));
