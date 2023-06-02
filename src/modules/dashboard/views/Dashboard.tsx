import { makeStyles } from "@rneui/themed";
import React from "react";
import { getGreetings } from "../../../helpers/helpers";
import YJHeader from "../../../layout/YJHeader";
import YJText from "../../../sharedComponents/text/YJText";
import StatisticsCard from "./StatisticsCard";

const Dashboard = () => {
	const styles = useStyes();

	return (
		<YJHeader
			title="Dashboard"
			customScrollViewContentContainerStyle={styles.rootContainer}
		>
			<YJText h4 bold>
				{getGreetings()}, Admin!
			</YJText>
			<StatisticsCard title="Total Yarn Stocks" content={9} />
		</YJHeader>
	);
};

export default Dashboard;

const useStyes = makeStyles(() => ({
	rootContainer: {
		padding: 20,
	},
}));
