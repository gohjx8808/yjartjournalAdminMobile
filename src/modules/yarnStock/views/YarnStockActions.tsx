import type { BottomSheetProps } from "@rneui/themed";
import { BottomSheet, ListItem } from "@rneui/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface YarnStockActionsProps extends Omit<BottomSheetProps, "modalProps"> {
	onDelete: () => void;
}

const YarnStockActions = (props: YarnStockActionsProps) => {
	const { onDelete } = props;
	const insets = useSafeAreaInsets();

	return (
		<BottomSheet {...props}>
			<ListItem>
				<ListItem.Content>
					<ListItem.Title>Edit</ListItem.Title>
				</ListItem.Content>
			</ListItem>
			<ListItem
				onPress={onDelete}
				containerStyle={{ paddingBottom: insets.bottom }}
			>
				<ListItem.Content>
					<ListItem.Title>Delete</ListItem.Title>
				</ListItem.Content>
			</ListItem>
		</BottomSheet>
	);
};

export default YarnStockActions;
