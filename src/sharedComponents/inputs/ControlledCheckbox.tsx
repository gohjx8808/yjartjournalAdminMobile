import { CheckBox, useTheme } from "@rneui/themed";
import type { CheckBoxProps } from "@rneui/themed";
import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

interface ControlledCheckboxProps
	extends Omit<UseControllerProps<Record<string, boolean>>, "children">,
		Omit<CheckBoxProps, "checked" | "children"> {
	themeColor: "primary" | "secondary";
}

const ControlledCheckbox = (props: ControlledCheckboxProps) => {
	const { theme } = useTheme();
	const { name, control, themeColor } = props;

	const {
		field: { value, onChange },
	} = useController({ name, control });

	return (
		<CheckBox
			{...props}
			checked={value}
			checkedColor={theme.colors[themeColor]}
			onPress={() => {
				onChange(!value);
			}}
		/>
	);
};

export default ControlledCheckbox;
