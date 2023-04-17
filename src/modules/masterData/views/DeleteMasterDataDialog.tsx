import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";

interface DeleteMasterDataDialogProps {
	visible: boolean;
	hideDialog: () => void;
	dialogData: masterData.deleteDialogData;
}

const DeleteMasterDataDialog = (props: DeleteMasterDataDialogProps) => {
	const { visible, hideDialog, dialogData } = props;

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title={`Delete ${dialogData.type}`} />
			<YJText>
				Are you sure you wish to delete this {dialogData.type}?{"\n"}
			</YJText>
			<YJText bold>
				Name: {dialogData.data?.name}
				{"\n"}
			</YJText>
			<YJText>This cannot be undone!</YJText>
			<Dialog.Actions>
				<YJDialogButton title="Confirm" onPress={dialogData.onSubmit} />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default DeleteMasterDataDialog;
