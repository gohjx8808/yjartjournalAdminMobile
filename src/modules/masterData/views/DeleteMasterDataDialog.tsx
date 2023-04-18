import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";
import {
	useDeleteYarnCategory,
	useDeleteYarnColorCategory,
} from "../src/queries/masterDataMutations";

interface DeleteMasterDataDialogProps {
	visible: boolean;
	hideDialog: () => void;
	dialogData: masterData.deleteDialogData;
}

const DeleteMasterDataDialog = (props: DeleteMasterDataDialogProps) => {
	const { visible, hideDialog, dialogData } = props;

	const { mutate: submitDeleteYarnCategory } = useDeleteYarnCategory();
	const { mutate: submitDeleteYarnColorCategory } =
		useDeleteYarnColorCategory();

	const onSubmit = () => {
		hideDialog();
		if (dialogData.type === "Yarn Category") {
			submitDeleteYarnCategory({ id: dialogData.data.id });
		} else {
			submitDeleteYarnColorCategory({ id: dialogData.data.id });
		}
	};

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
				<YJDialogButton title="Confirm" onPress={onSubmit} />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default DeleteMasterDataDialog;
