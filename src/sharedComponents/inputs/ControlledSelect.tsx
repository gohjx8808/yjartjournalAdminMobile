import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

import type { ClearButtonProps } from "../button/ClearButton";
import SelectOptionsDialog from "./SelectOptionsDialog";
import { useState } from "react";
import YJText from "../text/YJText";
import OutlineButton from "../button/OutlineButton";
import ErrorText from "../text/ErrorText";

interface ControlledSelectProps extends UseControllerProps, ClearButtonProps {
	options: optionData[];
	errorMessage: string | undefined;
}

const ControlledSelect = (props: ControlledSelectProps) => {
	const { control, name, title, options, errorMessage } = props;
	const [selectDialogOpen, setSelectDialogOpen] = useState(false);

	const {
		field: { value, onChange },
	} = useController({ control, name });

	const toggleDialog = () => {
		setSelectDialogOpen(!selectDialogOpen);
	};

	return (
		<>
			<YJText bold style={{ marginLeft: 10, fontSize: 16, color: "grey" }}>
				{title}
			</YJText>
			<OutlineButton
				{...props}
				title={value !== undefined ? value.name : title}
				onPress={toggleDialog}
				themeColor="secondary"
			/>
			<SelectOptionsDialog
				toggleDialog={toggleDialog}
				visible={selectDialogOpen}
				title={title as string}
				options={options}
				onChange={onChange}
				selected={value}
			/>
			{errorMessage !== undefined && <ErrorText>{errorMessage}</ErrorText>}
		</>
	);
};

export default ControlledSelect;
