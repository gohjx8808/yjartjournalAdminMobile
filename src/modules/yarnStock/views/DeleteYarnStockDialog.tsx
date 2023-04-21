import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";

interface DeleteYarnStockDialogProps extends dialogProps.commonDialogProps {
	stock: yarnStock.yarnStockData;
}

const DeleteYarnStockDialog = (props: DeleteYarnStockDialogProps) => {
	const { visible, hideDialog, stock } = props;

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title="Delete Yarn Stock" />
			<YJText>Are you sure you wish to delete this yarn stock?{"\n"}</YJText>
			<YJText bold>
				Detailed Color: {stock.detailedColor}
				{"\n"}
			</YJText>
			<YJText>This cannot be undone!</YJText>
			<Dialog.Actions>
				<YJDialogButton title="Confirm" />
				<YJDialogButton title="Cancel" onPress={hideDialog} />
			</Dialog.Actions>
		</Dialog>
	);
};

export default DeleteYarnStockDialog;
