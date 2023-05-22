import { Card, Icon, makeStyles } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { formatCurrency } from "../../../helpers/helpers";
import ClearButton from "../../../sharedComponents/button/ClearButton";
import SpaceBetweenText from "../../../sharedComponents/text/SpaceBetweenText";
import YJText from "../../../sharedComponents/text/YJText";
import { useUpdateYarnStockQuantity } from "../src/queries/yarnStockMutations";

interface YarnStockCardProps {
	stock: yarnStock.yarnStockData;
	onSelectAction: (selected: yarnStock.yarnStockData) => void;
	onImage: (selected: yarnStock.yarnStockData) => void;
}

const YarnStockCard = (props: YarnStockCardProps) => {
	const { stock, onSelectAction, onImage } = props;
	const styles = useStyles();

	const { mutate: updateQuantity, isLoading: updateQuantityLoading } =
		useUpdateYarnStockQuantity();

	const onModifyQuantity = (modifiedQuantity: number) => {
		updateQuantity({ quantity: modifiedQuantity, yarnId: stock.id });
	};

	return (
		<Card containerStyle={{ width: "80%" }} key={stock.id}>
			<View style={styles.cardHeaderContainer}>
				<Card.Title>{stock.detailedColor}</Card.Title>
				<ClearButton
					containerStyle={styles.deleteBtnContainer}
					onPress={() => {
						onSelectAction(stock);
					}}
				>
					<Icon name="more-horiz" />
				</ClearButton>
			</View>
			<Card.Divider />
			{stock.imageUrl !== null && (
				<TouchableOpacity
					onPress={() => {
						onImage(stock);
					}}
				>
					<Card.Image
						containerStyle={{ marginBottom: 10 }}
						source={{
							uri: stock.imageUrl,
						}}
					/>
				</TouchableOpacity>
			)}
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
				{updateQuantityLoading ? (
					<ClearButton loading />
				) : (
					<>
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
					</>
				)}
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
	cardHeaderContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	deleteBtnContainer: {
		right: 0,
		position: "absolute",
		paddingBottom: 15,
	},
}));
