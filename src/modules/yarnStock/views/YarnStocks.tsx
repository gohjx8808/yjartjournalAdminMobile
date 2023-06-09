import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Card, makeStyles } from "@rneui/themed";
import React, { useState } from "react";
import YJHeader from "../../../layout/YJHeader";
import YJLoadingSkeleton from "../../../sharedComponents/YJLoadingSkeleton";
import EnlargeImageDialog from "../../../sharedComponents/dialog/EnlargeImageDialog";
import YJText from "../../../sharedComponents/text/YJText";
import type { YarnStockNavigatorParamList } from "../../router/MainRouter";
import routeNames from "../../router/routeNames";
import { useAllYarnStock } from "../src/queries/yarnStockQueries";
import DeleteYarnStockDialog from "./DeleteYarnStockDialog";
import YarnStockActions from "./YarnStockActions";
import YarnStockCard from "./YarnStockCard";
import YarnStockFAB from "./YarnStockFAB";
import YarnStockFilterDialog from "./YarnStockFilterDialog";

const YarnStocks = () => {
	const navigation =
		useNavigation<NavigationProp<YarnStockNavigatorParamList>>();
	const styles = useStyles();

	const [filterDialog, setFilterDialog] = useState(false);
	const [speedDialOpen, setSpeedDialOpen] = useState(false);
	const [deleteYarnStockDialogOpen, setDeleteYarnStockDialogOpen] =
		useState(false);
	const [enlargeImageDialogOpen, setEnlargeImageDialogOpen] = useState(false);
	const [selectedYarnStock, setSelectedYarnStock] =
		useState<yarnStock.yarnStockData | null>(null);
	const [actionBottomSheet, setActionBottomSheet] = useState(false);

	const {
		data: yarnStock,
		isLoading: yarnStockLoading,
		refetch: yarnStockRefetch,
		isRefetching: yarnStockRefetching,
	} = useAllYarnStock();

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

	const toggleEnlargeImageDialog = () => {
		setEnlargeImageDialogOpen(!enlargeImageDialogOpen);
	};

	const onImage = (stock: yarnStock.yarnStockData) => {
		setSelectedYarnStock(stock);
		toggleEnlargeImageDialog();
	};

	return (
		<>
			<YJHeader
				title="Yarn Stocks"
				scrollViewContentCenter
				onRefresh={yarnStockRefetch}
				refreshing={yarnStockRefetching}
			>
				{yarnStockLoading ? (
					<YJLoadingSkeleton style={styles.cardSkeleton} />
				) : yarnStock !== undefined && yarnStock.length > 0 ? (
					yarnStock.map(stock => (
						<YarnStockCard
							stock={stock}
							key={stock.id}
							onSelectAction={onSelectAction}
							onImage={onImage}
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
			{selectedYarnStock?.imageUrl != null && (
				<EnlargeImageDialog
					visible={enlargeImageDialogOpen}
					hideDialog={toggleEnlargeImageDialog}
					imgUrl={selectedYarnStock.imageUrl}
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
