import { Button, Dialog, makeStyles } from "@rneui/themed";
import YJDialogButton from "../../../sharedComponents/dialog/YJDialogButton";
import YJText from "../../../sharedComponents/text/YJText";

interface MasterDataCategoryDialogProps extends dialogProps.commonDialogProps {
	onAdd: (value: masterData.masterDataType) => void;
}

const MasterDataCategoryDialog = (props: MasterDataCategoryDialogProps) => {
	const { visible, hideDialog, onAdd } = props;
	const styles = useStyles();

	const onSelect = (type: masterData.masterDataType) => {
		hideDialog();
		onAdd(type);
	};

	return (
		<Dialog isVisible={visible} onBackdropPress={hideDialog}>
			<Dialog.Title title="Add Master Data" />
			<YJText>Please select the master data you would like to add.</YJText>
			<Button
				onPress={() => {
					onSelect("Yarn Category");
				}}
				containerStyle={styles.selectionBtnContainer}
				color="secondary"
			>
				Yarn Category
			</Button>
			<Button
				onPress={() => {
					onSelect("Yarn Color Category");
				}}
				containerStyle={styles.selectionBtnContainer}
				color="secondary"
			>
				Yarn Color Category
			</Button>
			<YJDialogButton title="Close" onPress={hideDialog} />
		</Dialog>
	);
};

export default MasterDataCategoryDialog;

const useStyles = makeStyles(() => ({
	selectionBtnContainer: {
		width: "80%",
		alignSelf: "center",
		marginVertical: 10,
	},
}));
