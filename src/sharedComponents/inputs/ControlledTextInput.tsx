import type { InputProps } from "@rneui/base";
import { Input } from "@rneui/themed";
import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

interface ControlledTextInputProps
	extends UseControllerProps,
		Omit<InputProps, "defaultValue"> {}

const ControlledTextInput = (props: ControlledTextInputProps) => {
	const { control, name } = props;
	const {
		field: { value, onChange },
	} = useController({ control, name });

	return <Input {...props} value={value} onChangeText={onChange} />;
};

export default ControlledTextInput;
