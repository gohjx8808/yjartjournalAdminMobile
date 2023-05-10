import { Dialog, makeStyles } from "@rneui/themed";
import YJDialogButton from "../../dialog/YJDialogButton";
import YJText from "../../text/YJText";

interface RemoveImageDialogProps {
	visible: boolean;
	hideDialog: () => void;
	onConfirm: () => void;
}

const RemoveImageDialog = (props: RemoveImageDialogProps) => {
	const { visible, hideDialog, onConfirm } = props;
	const styles = useStyles();

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title="Remove Image" titleStyle={styles.dialogTitle} />
			<YJText>Are you sure you wish to remove the image?</YJText>
			<Dialog.Actions>
				<YJDialogButton title="Confirm" onPress={onConfirm} />
				<YJDialogButton title="Close" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default RemoveImageDialog;

const useStyles = makeStyles(() => ({
	dialogTitle: {
		textAlign: "center",
	},
}));
