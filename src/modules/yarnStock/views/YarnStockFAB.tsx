import type { SpeedDialProps } from "@rneui/themed";
import { SpeedDial, useTheme } from "@rneui/themed";

interface YarnStockFABProps extends SpeedDialProps {
	toggleFilterDialog: () => void;
	onAddNew: () => void;
}

const YarnStockFAB = (props: YarnStockFABProps) => {
	const { toggleFilterDialog, onAddNew } = props;
	const { theme } = useTheme();

	return (
		<SpeedDial
			{...props}
			placement="right"
			icon={{ name: "reorder", color: theme.colors.primary }}
			openIcon={{ name: "close", color: theme.colors.primary }}
		>
			<SpeedDial.Action
				icon={{
					name: "filter-alt",
					color: theme.colors.primary,
				}}
				title="Filter"
				onPress={toggleFilterDialog}
			/>
			<SpeedDial.Action
				icon={{
					name: "add",
					color: theme.colors.primary,
				}}
				title="Add New"
				onPress={onAddNew}
			/>
		</SpeedDial>
	);
};

export default YarnStockFAB;
