import { Dialog, Icon, makeStyles } from "@rneui/themed";
import YJText from "../text/YJText";
import { useContext } from "react";
import { StatusDialogContext } from "../../context/StatusDialogContext";
import YJDialogButton from "./YJDialogButton";

const StatusDialog = () => {
	const { statusDialogData, closeDialog } = useContext(StatusDialogContext);
	const styles = useStyles();

	return (
		<Dialog isVisible={statusDialogData.visible} onBackdropPress={closeDialog}>
			<Dialog.Title
				title={statusDialogData.title}
				titleStyle={styles.dialogTitle}
			/>
			{statusDialogData.isSuccess ? (
				<Icon name="check" type="font-awesome-5" color="green" />
			) : (
				<Icon name="close" type="font-awesome" color="red" />
			)}
			<YJText style={styles.dialogMsg}>{statusDialogData.message}</YJText>
			<YJDialogButton title="Close" onPress={closeDialog} />
		</Dialog>
	);
};

export default StatusDialog;

const useStyles = makeStyles(theme => ({
	dialogTitle: {
		textAlign: "center",
	},
	dialogMsg: {
		marginVertical: 5,
		textAlign: "center",
	},
}));
