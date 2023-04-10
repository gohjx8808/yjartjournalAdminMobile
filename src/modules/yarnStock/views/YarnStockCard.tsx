import { Card, makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { formatCurrency } from "../../../helpers/helpers";
import ClearButton from "../../../sharedComponents/button/ClearButton";
import SpaceBetweenText from "../../../sharedComponents/text/SpaceBetweenText";
import YJText from "../../../sharedComponents/text/YJText";
import { useUpdateYarnStockQuantity } from "../src/queries/yarnStockMutations";

interface YarnStockCardProps {
	stock: yarnStock.yarnStockData;
}

const YarnStockCard = (props: YarnStockCardProps) => {
	const { stock } = props;
	const styles = useStyles();

	const { mutate } = useUpdateYarnStockQuantity();

	const onModifyQuantity = (modifiedQuantity: number) => {
		mutate({ quantity: modifiedQuantity, yarnId: stock.id });
	};

	return (
		<Card containerStyle={{ width: "80%" }} key={stock.id}>
			<Card.Title>{stock.detailedColor}</Card.Title>
			<Card.Divider />
			<SpaceBetweenText
				frontText="Cost per Item"
				backText={formatCurrency(stock.costPerItem)}
			/>
			<SpaceBetweenText
				frontText="Category"
				backText={stock.yarnCategory.name}
			/>
			<SpaceBetweenText
				frontText="Color Category"
				backText={stock.yarnColorCategory.name}
			/>
			<SpaceBetweenText
				frontText="Used Quantity"
				backText={stock.usedQuantity}
			/>
			<SpaceBetweenText
				frontText="Last Ordered Date"
				backText={stock.lastOrderedAt ?? "-"}
			/>
			<SpaceBetweenText
				frontText="Reorder Level"
				backText={stock.reorderLevel}
			/>
			<SpaceBetweenText
				frontText="Reorder Status"
				backText={stock.reorderStatus}
				textColor={stock.reorderStatus === "Optimum" ? "green" : "red"}
			/>
			<YJText center bold style={styles.stockTitle}>
				In Stock Quantity
			</YJText>
			<View style={styles.quantityActionContainer}>
				<ClearButton
					themeColor="secondary"
					onPress={() => {
						onModifyQuantity(stock.inStockQuantity - 1);
					}}
				>
					-
				</ClearButton>
				<YJText>{stock.inStockQuantity}</YJText>
				<ClearButton
					themeColor="secondary"
					onPress={() => {
						onModifyQuantity(stock.inStockQuantity + 1);
					}}
				>
					+
				</ClearButton>
			</View>
		</Card>
	);
};

export default YarnStockCard;

const useStyles = makeStyles(theme => ({
	quantityActionContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		alignSelf: "center",
		width: "50%",
		borderColor: theme.colors.secondary,
		borderWidth: 0.5,
	},
	stockTitle: {
		marginVertical: 3,
	},
}));
