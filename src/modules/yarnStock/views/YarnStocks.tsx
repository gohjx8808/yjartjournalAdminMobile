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
import { Card, Skeleton, makeStyles } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import LinearGradient from "react-native-linear-gradient";

const YarnStocks = () => {
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();
	const styles = useStyles();

	const [filterDialog, setFilterDialog] = useState(false);
	const [speedDialOpen, setSpeedDialOpen] = useState(false);
	const [deleteYarnStockDialogOpen, setDeleteYarnStockDialogOpen] =
		useState(false);
	const [selectedYarnStock, setSelectedYarnStock] =
		useState<yarnStock.yarnStockData | null>(null);
	const [actionBottomSheet, setActionBottomSheet] = useState(false);

	const { data: yarnStock, isLoading: yarnStockLoading } = useAllYarnStock();

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

	const toggleActionBottomSheet = () => {
		setActionBottomSheet(!actionBottomSheet);
	};

	const onSelectAction = (selectedStock: yarnStock.yarnStockData) => {
		setSelectedYarnStock(selectedStock);
		toggleActionBottomSheet();
	};

	const onEditSelected = () => {
		if (selectedYarnStock !== null) {
			toggleActionBottomSheet();
			navigation.navigate(routeNames.UPDATE_YARN_STOCK, {
				stockData: selectedYarnStock,
			});
		}
	};

	const onDeleteSelected = () => {
		toggleActionBottomSheet();
		toggleDeleteYarnStockDialog();
	};

	return (
		<>
			<YJHeader title="Yarn Stocks" scrollViewContentCenter>
				{yarnStockLoading ? (
					<Skeleton
						LinearGradientComponent={LinearGradient}
						animation="wave"
						style={styles.cardSkeleton}
					/>
				) : yarnStock !== undefined && yarnStock.length > 0 ? (
					yarnStock.map(stock => (
						<YarnStockCard
							stock={stock}
							key={stock.id}
							onSelectAction={onSelectAction}
						/>
					))
				) : (
					<Card containerStyle={{ width: "80%" }}>
						<YJText center>No stock available!</YJText>
					</Card>
				)}
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
				onEdit={onEditSelected}
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

const useStyles = makeStyles(() => ({
	cardSkeleton: {
		width: "80%",
		height: 300,
		marginVertical: 20,
	},
}));
