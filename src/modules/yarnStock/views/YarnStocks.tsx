import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import YJHeader from "../../../layout/YJHeader";
import type { YarnStockNavigatorParamList } from "../../router/MainRouter";
import routeNames from "../../router/routeNames";
import { useAllYarnStock } from "../src/queries/yarnStockQueries";
import DeleteYarnStockDialog from "./DeleteYarnStockDialog";
import YarnStockCard from "./YarnStockCard";
import YarnStockFAB from "./YarnStockFAB";
import YarnStockFilterDialog from "./YarnStockFilterDialog";
import YarnStockActions from "./YarnStockActions";

const YarnStocks = () => {
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();

	const [filterDialog, setFilterDialog] = useState(false);
	const [speedDialOpen, setSpeedDialOpen] = useState(false);
	const [deleteYarnStockDialogOpen, setDeleteYarnStockDialogOpen] =
		useState(false);
	const [selectedYarnStock, setSelectedYarnStock] =
		useState<yarnStock.yarnStockData | null>(null);
	const [actionBottomSheet, setActionBottomSheet] = useState(false);

	const { data: yarnStock } = useAllYarnStock();

	const toggleFilterDialog = () => {
		setFilterDialog(!filterDialog);
	};

	const toggleSpeedDial = () => {
		setSpeedDialOpen(!speedDialOpen);
	};

	const onAddNew = () => {
		navigation.navigate(routeNames.ADD_EDIT_YARN_STOCK, { actionType: "Add" });
		toggleSpeedDial();
	};

	const toggleDeleteYarnStockDialog = () => {
		setDeleteYarnStockDialogOpen(!deleteYarnStockDialogOpen);
	};

	const toggleActionBottomSheet = () => {
		setActionBottomSheet(!actionBottomSheet);
	};

	const onSelectAction = (selectedStock: yarnStock.yarnStockData) => {
		setSelectedYarnStock(selectedStock);
		toggleActionBottomSheet();
	};

	const onDeleteSelected = () => {
		toggleActionBottomSheet();
		toggleDeleteYarnStockDialog();
	};

	return (
		<>
			<YJHeader title="Yarn Stocks" scrollViewContentCenter>
				{yarnStock?.map(stock => (
					<YarnStockCard
						stock={stock}
						key={stock.id}
						onSelectAction={onSelectAction}
					/>
				))}
			</YJHeader>
			<YarnStockFAB
				isOpen={speedDialOpen}
				onOpen={toggleSpeedDial}
				onClose={toggleSpeedDial}
				onAddNew={onAddNew}
				toggleFilterDialog={toggleFilterDialog}
			/>
			<YarnStockFilterDialog
				visible={filterDialog}
				hideDialog={toggleFilterDialog}
			/>
			<YarnStockActions
				isVisible={actionBottomSheet}
				onBackdropPress={toggleActionBottomSheet}
				onDelete={onDeleteSelected}
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
