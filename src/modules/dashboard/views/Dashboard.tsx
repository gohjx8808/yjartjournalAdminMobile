import { makeStyles } from "@rneui/themed";
import React from "react";
import { getGreetings } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import YJText from "../../../sharedComponents/text/YJText";
import { useYarnStockOverview } from "../src/dashboardQueries";
import StatisticsCard from "./StatisticsCard";

const Dashboard = () => {
	const styles = useStyes();

	const {
		data: yarnStockOverview,
		isLoading: yarnStockOverviewLoading,
		isRefetching: yarnStockOverviewRefetching,
		refetch: yarnStockOverviewRefetch,
	} = useYarnStockOverview();

	return (
		<YJHeader
			title="Dashboard"
			customScrollViewContentContainerStyle={styles.rootContainer}
			onRefresh={yarnStockOverviewRefetch}
			refreshing={yarnStockOverviewRefetching}
		>
			<YJText h4 bold>
				{getGreetings()}, Admin!
			</YJText>
			<StatisticsCard
				title="Total Yarn Stocks"
				content={yarnStockOverview?.yarnStockOverview.totalYarn}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Reorder Yarn Stocks"
				content={yarnStockOverview?.yarnStockOverview.totalReorderYarn}
				contentStyle={{
					color:
						(yarnStockOverview?.yarnStockOverview.totalReorderYarn ?? 0) > 0
							? "red"
							: "green",
				}}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Yarn Category"
				content={yarnStockOverview?.categoryCount}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Yarn Color Category"
				content={yarnStockOverview?.colorCategoryCount}
				loading={yarnStockOverviewLoading}
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
