import { Icon, ListItem, useTheme } from "@rneui/themed";
import ClearButton from "../../../sharedComponents/button/ClearButton";

interface MasterDataListItemProps {
	item: optionData;
	onEdit: () => void;
	onDelete: () => void;
}

const MasterDataListItem = (props: MasterDataListItemProps) => {
	const { item, onEdit, onDelete } = props;
	const { theme } = useTheme();

	return (
		<ListItem bottomDivider>
			<ListItem.Content>
				<ListItem.Title>{item.name}</ListItem.Title>
			</ListItem.Content>
			<ClearButton onPress={onEdit}>
				<Icon name="edit" color={theme.colors.warning} />
			</ClearButton>
			<ClearButton onPress={onDelete}>
				<Icon name="delete" color={theme.colors.error} />
			</ClearButton>
		</ListItem>
	);
};

export default MasterDataListItem;
