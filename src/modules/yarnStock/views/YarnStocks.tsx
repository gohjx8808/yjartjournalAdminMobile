import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import RoundedButton from "../../../sharedComponents/button/RoundedButton";
import { FAB, useTheme } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import YarnStockFilterDialog from "./YarnStockFilterDialog";
import { useAllYarnStock } from "../src/queries/yarnStockQueries";

const YarnStocks = () => {
	const { theme } = useTheme();

	const [filterModal, setFilterModal] = useState(false);

	const { data } = useAllYarnStock();

	console.log(data);

	const openFilterModal = () => {
		setFilterModal(true);
	};

	return (
		<>
			<View style={{ flexGrow: 1 }}>
				<YJText h4 bold center style={{ paddingVertical: 20 }}>
					Yarn Categories
				</YJText>
				<ScrollView
					contentContainerStyle={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<RoundedButton
						title="Yarn"
						buttonStyle={{ backgroundColor: theme.colors.secondary }}
					/>
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
			</View>
			<YarnStockFilterDialog
				visible={filterModal}
				toggleDialog={setFilterModal}
			/>
		</>
	);
};

export default YarnStocks;
