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
				textContent={yarnStockOverview?.yarnStockOverview.totalYarn}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Total Reorder Yarn Stocks"
				textContent={yarnStockOverview?.yarnStockOverview.totalReorderYarn}
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
				textContent={yarnStockOverview?.categoryCount}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Yarn Stock Yarn Category"
				loading={yarnStockOverviewLoading}
				chartData={yarnStockOverview?.yarnStockOverview.categoryChart}
			/>
			<StatisticsCard
				title="Total Yarn Color Category"
				textContent={yarnStockOverview?.colorCategoryCount}
				loading={yarnStockOverviewLoading}
			/>
			<StatisticsCard
				title="Yarn Stock Yarn Color Category"
				loading={yarnStockOverviewLoading}
				chartData={yarnStockOverview?.yarnStockOverview.colorCategoryChart}
			/>
		</YJHeader>
	);
};

export default Dashboard;

const useStyes = makeStyles(theme => ({
	rootContainer: {
		padding: 20,
	},
}));
