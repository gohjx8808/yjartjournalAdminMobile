import type { InputProps } from "@rneui/base";
import { Button, Icon, Input, makeStyles } from "@rneui/themed";
import { useState } from "react";
import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

interface ControlledPasswordInputProps
	extends UseControllerProps<any>,
		Omit<InputProps, "defaultValue"> {}

const ControlledPasswordInput = (props: ControlledPasswordInputProps) => {
	const styles = useStyles(props);
	const [secureEntry, setSecureEntry] = useState(true);

	const { control, name, rules } = props;
	const {
		field: { value, onChange },
	} = useController({ control, name, rules });

	const toggleSecure = () => {
		setSecureEntry(!secureEntry);
	};

	return (
		<Input
			{...props}
			value={value}
			onChangeText={onChange}
			inputContainerStyle={styles.errorInput}
			secureTextEntry={secureEntry}
			rightIcon={
				<Button
					type="clear"
					onPress={toggleSecure}
					icon={<Icon name={secureEntry ? "visibility" : "visibility-off"} />}
				/>
			}
		/>
	);
};

export default ControlledPasswordInput;

const useStyles = makeStyles((theme, props: ControlledPasswordInputProps) => ({
	errorInput: {
		borderBottomColor:
			props.errorMessage === undefined
				? theme.colors.grey3
				: theme.colors.error,
	},
}));
