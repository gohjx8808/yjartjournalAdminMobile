import { BottomSheet, ListItem, Icon, makeStyles } from "@rneui/themed";
import type { BottomSheetProps } from "@rneui/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface YarnStockActionsProps extends Omit<BottomSheetProps, "modalProps"> {
	onDelete: () => void;
}

const YarnStockActions = (props: YarnStockActionsProps) => {
	const { onDelete } = props;
	const insets = useSafeAreaInsets();
	const styles = useStyles();

	return (
		<BottomSheet {...props}>
			<ListItem bottomDivider containerStyle={styles.listItemContainer}>
				<Icon name="edit" />
				<ListItem.Content>
					<ListItem.Title>Update Details</ListItem.Title>
				</ListItem.Content>
			</ListItem>
			<ListItem
				onPress={onDelete}
				containerStyle={[
					styles.listItemContainer,
					{ paddingBottom: insets.bottom },
				]}
			>
				<Icon name="delete" />
				<ListItem.Content>
					<ListItem.Title>Delete</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		</BottomSheet>
	);
};

export default YarnStockActions;

const useStyles = makeStyles(theme => ({
	listItemContainer: {
		backgroundColor: theme.colors.primary,
	},
}));
