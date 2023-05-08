import { Dialog, makeStyles } from "@rneui/themed";
import YJDialogButton from "../../dialog/YJDialogButton";
import ClearButton from "../../button/ClearButton";
import YJText from "../../text/YJText";

interface ImagePickerOptionsDialogProps {
	visible: boolean;
	hideDialog: () => void;
	onCamera: () => void;
	onLibrary: () => void;
}

const ImagePickerOptionsDialog = (props: ImagePickerOptionsDialogProps) => {
	const { visible, hideDialog, onLibrary, onCamera } = props;
	const styles = useStyles();

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title
				title="Image Picker Options"
				titleStyle={styles.dialogTitle}
			/>
			<YJText>
				Please select below how would you like to upload your image.
			</YJText>
			<ClearButton
				title="Take Photo (Camera)"
				onPress={onCamera}
				themeColor="secondary"
				containerStyle={styles.selectionButton}
			/>
			<ClearButton
				title="Upload Image (Image Library)"
				onPress={onLibrary}
				themeColor="secondary"
				containerStyle={styles.selectionButton}
			/>
			<Dialog.Actions>
				<YJDialogButton title="Close" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default ImagePickerOptionsDialog;

const useStyles = makeStyles(() => ({
	dialogTitle: {
		textAlign: "center",
	},
	selectionButton: {
		width: "100%",
	},
}));
