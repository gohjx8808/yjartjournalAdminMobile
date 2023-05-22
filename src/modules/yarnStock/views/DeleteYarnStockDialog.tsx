import { Dialog } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";
import { useDeleteYarnStock } from "../src/queries/yarnStockMutations";

interface DeleteYarnStockDialogProps extends dialogProps.commonDialogProps {
	stock: yarnStock.yarnStockData;
}

const DeleteYarnStockDialog = (props: DeleteYarnStockDialogProps) => {
	const { visible, hideDialog, stock } = props;

	const { mutate: submitDelete, isLoading: deleteLoading } =
		useDeleteYarnStock(hideDialog);

	const onSubmitDelete = () => {
		submitDelete({ yarnId: stock.id });
	};

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
				<YJDialogButton
					title="Confirm"
					onPress={onSubmitDelete}
					disabled={deleteLoading}
					loading={deleteLoading}
				/>
				<YJDialogButton
					title="Cancel"
					onPress={hideDialog}
					disabled={deleteLoading}
				/>
			</Dialog.Actions>
		</Dialog>
	);
};

export default DeleteYarnStockDialog;
