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

	const { data: yarnStockOverview } = useYarnStockOverview();
	const { data: yarnCategoryCount } = useYarnCategoryCount();
	const { data: yarnColorCategoryCount } = useYarnColorCategoryCount();

	return (
		<YJHeader
			title="Dashboard"
			customScrollViewContentContainerStyle={styles.rootContainer}
		>
			<YJText h4 bold>
				{getGreetings()}, Admin!
			</YJText>
			<StatisticsCard
				title="Total Yarn Stocks"
				content={yarnStockOverview?.totalYarn ?? 0}
			/>
			<StatisticsCard
				title="Total Reorder Yarn Stocks"
				content={yarnStockOverview?.totalReorderYarn ?? 0}
				contentStyle={{
					color:
						(yarnStockOverview?.totalReorderYarn ?? 0) > 0 ? "red" : "green",
				}}
			/>
			<StatisticsCard
				title="Total Yarn Category"
				content={yarnCategoryCount?.categoryCount ?? 0}
			/>
			<StatisticsCard
				title="Total Yarn Color Category"
				content={yarnColorCategoryCount?.colorCategoryCount ?? 0}
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
