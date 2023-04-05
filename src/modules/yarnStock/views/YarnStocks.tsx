import { ScrollView, View } from "react-native";
import React from "react";
import RoundedButton from "../../../sharedComponents/button/RoundedButton";
import { useTheme } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";

const YarnStocks = (): JSX.Element => {
	const { theme } = useTheme();

	return (
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
		</View>
	);
};

export default YarnStocks;
