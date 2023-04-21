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
import DeleteYarnStockDialog from "./DeleteYarnStockDialog";

const YarnStocks = () => {
	const { theme } = useTheme();
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();

	const [filterDialog, setFilterDialog] = useState(false);
	const [speedDialOpen, setSpeedDialOpen] = useState(false);
	const [deleteYarnStockDialogOpen, setDeleteYarnStockDialogOpen] =
		useState(false);
	const [selectedYarnStock, setSelectedYarnStock] =
		useState<yarnStock.yarnStockData | null>(null);

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

	const toggleDeleteYarnStockDialog = () => {
		setDeleteYarnStockDialogOpen(!deleteYarnStockDialogOpen);
	};

	const onDelete = (selectedStock: yarnStock.yarnStockData) => {
		setSelectedYarnStock(selectedStock);
		toggleDeleteYarnStockDialog();
	};

	return (
		<>
			<YJHeader title="Yarn Stocks" scrollViewContentCenter>
				{yarnStock?.map(stock => (
					<YarnStockCard stock={stock} key={stock.id} onDelete={onDelete} />
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
			{selectedYarnStock !== null && (
				<DeleteYarnStockDialog
					visible={deleteYarnStockDialogOpen}
					stock={selectedYarnStock}
					hideDialog={toggleDeleteYarnStockDialog}
				/>
			)}
		</>
	);
};

export default YarnStocks;
