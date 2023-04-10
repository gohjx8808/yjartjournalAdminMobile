import { Dialog, Icon, makeStyles } from "@rneui/themed";
import YJText from "../text/YJText";
import { useContext } from "react";
import { StatusDialogContext } from "../../context/StatusDialogContext";

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
			<Dialog.Button
				title="Close"
				onPress={closeDialog}
				titleStyle={styles.buttonTitle}
			/>
		</Dialog>
	);
};

export default StatusDialog;

const useStyles = makeStyles(theme => ({
	buttonTitle: {
		color: theme.colors.secondary,
	},
	dialogTitle: {
		textAlign: "center",
	},
	dialogMsg: {
		marginVertical: 5,
		textAlign: "center",
	},
}));
