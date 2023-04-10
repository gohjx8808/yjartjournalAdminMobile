import { Dialog, ListItem, makeStyles } from "@rneui/themed";
import ClearButton from "../button/ClearButton";

interface SelectOptionsDialogProps {
	visible: boolean;
	toggleDialog: () => void;
	title?: string;
	options: optionData[];
	onChange: (selected: optionData) => void;
	selected: optionData | undefined;
}

const SelectOptionsDialog = (props: SelectOptionsDialogProps) => {
	const styles = useStyles(props);

	const { title, toggleDialog, visible, options, onChange, selected } = props;

	const onSelect = (selected: optionData) => {
		onChange(selected);
		toggleDialog();
	};

	return (
		<Dialog isVisible={visible} onBackdropPress={toggleDialog}>
			<Dialog.Title title={title} titleStyle={styles.dialogTitle} />
			<ListItem>
				<ListItem.Content>
					{options.map(option => (
						<ClearButton
							key={option.id}
							title={option.name}
							onPress={() => {
								onSelect(option);
							}}
							themeColor="secondary"
							containerStyle={
								selected !== undefined &&
								selected.id === option.id &&
								styles.selected
							}
						/>
					))}
				</ListItem.Content>
			</ListItem>
			<Dialog.Actions>
				<Dialog.Button
					title="Close"
					onPress={toggleDialog}
					titleStyle={styles.buttonTextColor}
				/>
			</Dialog.Actions>
		</Dialog>
	);
};

export default SelectOptionsDialog;

const useStyles = makeStyles(theme => ({
	dialogTitle: {
		textAlign: "center",
	},
	buttonTextColor: {
		color: theme.colors.secondary,
	},
	selected: {
		backgroundColor: theme.colors.primary,
	},
}));