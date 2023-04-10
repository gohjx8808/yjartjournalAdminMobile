import type { InputProps } from "@rneui/base";
import { Input, makeStyles } from "@rneui/themed";
import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

interface ControlledTextInputProps
	extends UseControllerProps,
		Omit<InputProps, "defaultValue"> {}

const ControlledTextInput = (props: ControlledTextInputProps) => {
	const styles = useStyles(props);
	const { control, name, rules } = props;
	const {
		field: { value, onChange },
	} = useController({ control, name, rules });

	return (
		<Input
			{...props}
			value={value}
			onChangeText={onChange}
			inputContainerStyle={styles.errorInput}
		/>
	);
};

export default ControlledTextInput;

const useStyles = makeStyles((theme, props: ControlledTextInputProps) => ({
	errorInput: {
		borderBottomColor:
			props.errorMessage === undefined
				? theme.colors.grey3
				: theme.colors.error,
	},
}));
