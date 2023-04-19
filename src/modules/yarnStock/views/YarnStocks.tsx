import { SpeedDial, useTheme } from "@rneui/themed";
import React, { useState } from "react";
import { useAllYarnStock } from "../src/queries/yarnStockQueries";
import YarnStockCard from "./YarnStockCard";
import YarnStockFilterDialog from "./YarnStockFilterDialog";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import routeNames from "../../router/routeNames";
import type { YarnStockNavigatorParamList } from "../../router/MainRouter";
import YJHeader from "../../../layout/YJHeader";

const YarnStocks = () => {
	const { theme } = useTheme();
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();

	const [filterDialog, setFilterDialog] = useState(false);
	const [speedDialOpen, setSpeedDialOpen] = useState(false);

	const { data: yarnStock } = useAllYarnStock();

	const toggleFilterDialog = () => {
		setFilterDialog(!filterDialog);
	};

	const toggleSpeedDial = () => {
		setSpeedDialOpen(!speedDialOpen);
	};

	const onAddNew = () => {
		navigation.navigate(routeNames.ADD_YARN_STOCK);
		toggleSpeedDial();
	};

	return (
		<>
			<YJHeader title="Yarn Stocks" scrollViewContentCenter>
				{yarnStock?.map(stock => (
					<YarnStockCard stock={stock} key={stock.id} />
				))}
			</YJHeader>
			<SpeedDial
				placement="right"
				isOpen={speedDialOpen}
				icon={{ name: "reorder", color: theme.colors.primary }}
				openIcon={{ name: "close", color: theme.colors.primary }}
				onOpen={toggleSpeedDial}
				onClose={toggleSpeedDial}
			>
				<SpeedDial.Action
					icon={{
						name: "filter-alt",
						color: theme.colors.primary,
					}}
					title="Filter"
					onPress={toggleFilterDialog}
				/>
				<SpeedDial.Action
					icon={{
						name: "add",
						color: theme.colors.primary,
					}}
					title="Add New"
					onPress={onAddNew}
				/>
			</SpeedDial>
			<YarnStockFilterDialog
				visible={filterDialog}
				hideDialog={toggleFilterDialog}
			/>
		</>
	);
};

export default YarnStocks;
