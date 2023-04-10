import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";
import OutlineButton from "../button/OutlineButton";
import YJText from "../text/YJText";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface ControlledDatePickerProps extends UseControllerProps<any> {
	title: string;
}

const ControlledDatePicker = (props: ControlledDatePickerProps) => {
	const { title, control, name } = props;
	const [datePickerVisible, setDatePickerVisible] = useState(false);

	const {
		field: { value, onChange },
	} = useController({ control, name });

	const toggleDatePicker = () => {
		setDatePickerVisible(!datePickerVisible);
	};

	const onSelectDate = (date: Date) => {
		onChange(date);
		toggleDatePicker();
	};

	return (
		<>
			<YJText bold style={{ marginLeft: 10, fontSize: 16, color: "grey" }}>
				{title}
			</YJText>
			<OutlineButton
				{...props}
				title={
					value !== undefined
						? (value as Date).toLocaleDateString("en-MY")
						: title
				}
				onPress={toggleDatePicker}
				themeColor="secondary"
			/>
			<DateTimePickerModal
				isVisible={datePickerVisible}
				mode="date"
				onConfirm={onSelectDate}
				onCancel={toggleDatePicker}
				maximumDate={new Date()}
			/>
		</>
	);
};

export default ControlledDatePicker;
