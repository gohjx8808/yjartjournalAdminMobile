import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";

const MasterDataCategoryDialog = (props: dialogProps.commonDialogProps) => {
	const { visible, hideDialog } = props;

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title="Add Master Data" />
			<YJText>Please select the master data you would like to add.</YJText>
			<YJDialogButton title="Close" onPress={hideDialog} />
		</Dialog>
	);
};

export default MasterDataCategoryDialog;
