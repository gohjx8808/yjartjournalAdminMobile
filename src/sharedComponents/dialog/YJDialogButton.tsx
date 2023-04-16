import { Dialog, makeStyles } from "@rneui/themed";
import type { ButtonProps } from "@rneui/themed";

const YJDialogButton = (props: ButtonProps) => {
	const styles = useStyles();

	return <Dialog.Button {...props} titleStyle={styles.buttonTitle} />;
};

export default YJDialogButton;

const useStyles = makeStyles(theme => ({
	buttonTitle: {
		color: theme.colors.secondary,
	},
}));
