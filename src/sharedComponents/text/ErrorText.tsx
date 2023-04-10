import type { PropsWithChildren } from "react";
import YJText from "./YJText";
import { makeStyles } from "@rneui/themed";

const ErrorText = (props: PropsWithChildren) => {
	const { children } = props;
	const styles = useStyles();

	return <YJText style={styles.errorText}>{children}</YJText>;
};

export default ErrorText;

const useStyles = makeStyles(theme => ({
	errorText: {
		color: theme.colors.error,
		marginBottom: 5,
		marginLeft: 15,
	},
}));
