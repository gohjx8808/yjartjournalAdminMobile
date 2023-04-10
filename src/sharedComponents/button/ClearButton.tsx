import type { ButtonProps } from "@rneui/base";
import { Button, makeStyles } from "@rneui/themed";

interface ClearButtonProps extends ButtonProps {
	themeColor?: "primary" | "secondary";
}

const ClearButton = (props: ClearButtonProps) => {
	const { children } = props;
	const styles = useStyles(props);

	return (
		<Button {...props} type="clear" titleStyle={styles.buttonTitleStyle}>
			{children}
		</Button>
	);
};

export default ClearButton;

const useStyles = makeStyles((theme, props: ClearButtonProps) => ({
	buttonTitleStyle: {
		color: theme.colors[props.themeColor ?? "primary"],
	},
}));
