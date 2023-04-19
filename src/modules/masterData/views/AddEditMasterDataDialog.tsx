import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import ControlledTextInput from "../../../sharedComponents/inputs/ControlledTextInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
	useUpdateYarnCategory,
	useUpdateYarnColorCategory,
} from "../src/queries/masterDataMutations";

interface AddEditMasterDataDialogProps extends dialogProps.commonDialogProps {
	dialogData: masterData.addEditDialogData;
}

const AddEditMasterDataDialog = (props: AddEditMasterDataDialogProps) => {
	const { visible, hideDialog, dialogData } = props;

	const { control, setValue, handleSubmit } =
		useForm<masterData.addMasterDataPayload>();

	const { mutate: submitUpdateYarnCategory } = useUpdateYarnCategory();
	const { mutate: submitUpdateYarnColorCategory } =
		useUpdateYarnColorCategory();

	useEffect(() => {
		setValue("name", dialogData.data?.name ?? "");
	}, [visible]);

	const onSubmit = (formData: masterData.addMasterDataPayload) => {
		hideDialog();
		if (dialogData.actionType === "Edit") {
			if (dialogData.type === "Yarn Category") {
				submitUpdateYarnCategory({
					id: dialogData.data?.id ?? 0,
					name: formData.name,
				});
			} else {
				submitUpdateYarnColorCategory({
					id: dialogData.data?.id ?? 0,
					name: formData.name,
				});
			}
		}
	};

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title={`${dialogData.actionType} ${dialogData.type}`} />
			<ControlledTextInput label="Name" control={control} name="name" />
			<Dialog.Actions>
				<YJDialogButton title="Submit" onPress={handleSubmit(onSubmit)} />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default AddEditMasterDataDialog;
