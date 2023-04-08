import { Dialog, useTheme } from "@rneui/themed";
import YJText from "../../../sharedComponents/text/YJText";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import ControlledCheckbox from "../../../sharedComponents/inputs/ControlledCheckbox";

interface YarnStockFilterDialogProps {
	visible: boolean;
	toggleDialog: (value: boolean) => void;
}

const YarnStockFilterDialog = (props: YarnStockFilterDialogProps) => {
	const { visible, toggleDialog } = props;
	const { theme } = useTheme();

	const { control } = useForm();

	const closeModal = () => {
		toggleDialog(false);
	};

	return (
		<Dialog isVisible={visible} onBackdropPress={closeModal}>
			<Dialog.Title title="Filter Yarn Stock" />
			<YJText bold>Yarn Category</YJText>
			<View>
				<ControlledCheckbox
					control={control}
					title="test checkbox"
					name="test"
					themeColor="secondary"
				/>
			</View>
			<YJText bold>Yarn Color Category</YJText>
			<View>
				<ControlledCheckbox
					control={control}
					title="test checkbox1"
					name="test1"
					themeColor="secondary"
				/>
			</View>
			<Dialog.Button
				title="Close"
				titleStyle={{ color: theme.colors.secondary }}
				onPress={closeModal}
			/>
		</Dialog>
	);
};

export default YarnStockFilterDialog;
