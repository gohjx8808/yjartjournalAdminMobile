import { FAB, useTheme } from "@rneui/themed";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useAllYarnStock } from "../src/queries/yarnStockQueries";
import YarnStockCard from "./YarnStockCard";
import YarnStockFilterDialog from "./YarnStockFilterDialog";

const YarnStocks = () => {
	const { theme } = useTheme();

	const [filterModal, setFilterModal] = useState(false);

	const { data: yarnStock } = useAllYarnStock();

	const openFilterModal = () => {
		setFilterModal(true);
	};

	return (
		<>
			<ScrollView
				contentContainerStyle={{
					justifyContent: "center",
					alignItems: "center",
				}}
				style={{ flexGrow: 1 }}
			>
				{yarnStock?.map(stock => (
					<YarnStockCard stock={stock} key={stock.id} />
				))}
			</ScrollView>
			<FAB
				placement="right"
				icon={{
					name: "filter",
					type: "font-awesome-5",
					color: theme.colors.primary,
				}}
				onPress={openFilterModal}
			/>
			<YarnStockFilterDialog
				visible={filterModal}
				toggleDialog={setFilterModal}
			/>
		</>
	);
};

export default YarnStocks;
