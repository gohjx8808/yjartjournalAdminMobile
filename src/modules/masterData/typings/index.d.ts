declare namespace masterData {
	interface addEditDialogData {
		title: string;
		onSubmit: () => void;
		data?: optionData;
	}

	type masterDataType = "Yarn Category" | "Yarn Color Category";

	interface deleteDialogData {
		type: masterDataType;
		onSubmit: () => void;
		data: optionData;
	}
}
