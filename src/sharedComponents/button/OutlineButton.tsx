import type { ButtonProps } from "@rneui/base";
import { Button, makeStyles } from "@rneui/themed";

export interface OutlineButtonProps extends ButtonProps {
	themeColor?: "primary" | "secondary";
}

const OutlineButton = (props: OutlineButtonProps) => {
	const { children, style } = props;
	const styles = useStyles(props);

	return (
		<Button
			{...props}
			type="outline"
			style={[style, styles.buttonStyle]}
			titleStyle={styles.buttonTitleStyle}
		>
			{children}
		</Button>
	);
};

export default OutlineButton;

const useStyles = makeStyles((theme, props: OutlineButtonProps) => ({
	buttonTitleStyle: {
		color: theme.colors[props.themeColor ?? "primary"],
	},
	buttonStyle: {
		borderColor: theme.colors[props.themeColor ?? "primary"],
		borderWidth: 0.5,
		width: "95%",
		alignSelf: "center",
		marginVertical: 10,
	},
}));
