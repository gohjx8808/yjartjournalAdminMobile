import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";

interface AddEditMasterDataDialogProps {
	visible: boolean;
	hideDialog: () => void;
	dialogData: masterData.addEditDialogData;
}

const AddEditMasterDataDialog = (props: AddEditMasterDataDialogProps) => {
	const { visible, hideDialog, dialogData } = props;

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title={dialogData.title} />
			<Dialog.Actions>
				<YJDialogButton title="Submit" onPress={dialogData.onSubmit} />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default AddEditMasterDataDialog;
