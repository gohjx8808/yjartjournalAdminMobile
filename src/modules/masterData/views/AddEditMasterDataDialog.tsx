import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface AddEditMasterDataDialogProps {
	visible: boolean;
	hideDialog: () => void;
	dialogData: masterData.addEditDialogData;
}

const AddEditMasterDataDialog = (props: AddEditMasterDataDialogProps) => {
	const { visible, hideDialog, dialogData } = props;

	const { control, setValue } = useForm();

	useEffect(() => {
		setValue("name", dialogData.data?.name);
	}, [visible]);

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title={dialogData.title} />
			<ControlledTextInput label="Name" control={control} name="name" />
			<Dialog.Actions>
				<YJDialogButton title="Submit" onPress={dialogData.onSubmit} />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default AddEditMasterDataDialog;
