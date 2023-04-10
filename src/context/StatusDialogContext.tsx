import { createContext, useState } from "react";
import type { PropsWithChildren } from "react";

interface statusDialogDataType {
	visible: boolean;
	title: string;
	message: string;
	isSuccess: boolean;
}

interface initialStateProps {
	statusDialogData: statusDialogDataType;
	setStatusDialogData: (value: statusDialogDataType) => void;
	closeDialog: () => void;
}

const initialState: initialStateProps = {
	statusDialogData: {
		visible: false,
		title: "",
		message: "",
		isSuccess: false,
	},
	setStatusDialogData: () => {},
	closeDialog: () => {},
};

export const StatusDialogContext = createContext(initialState);

export const StatusDialogContextProvider = (props: PropsWithChildren) => {
	const [statusDialogData, setStatusDialogData] = useState(
		initialState.statusDialogData,
	);
	const { children } = props;

	const closeDialog = () => {
		setStatusDialogData({ ...statusDialogData, visible: false });
	};

	return (
		<StatusDialogContext.Provider
			value={{ statusDialogData, setStatusDialogData, closeDialog }}
		>
			{children}
		</StatusDialogContext.Provider>
	);
};
