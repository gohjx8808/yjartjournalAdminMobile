declare namespace masterData {
	interface addEditDialogData {
		type: masterDataType;
		actionType: "Add" | "Edit";
		data?: optionData;
	}

	type masterDataType = "Yarn Category" | "Yarn Color Category";

	interface deleteDialogData {
		type: masterDataType;
		data: optionData;
	}

	interface addMasterDataPayload {
		name: string;
	}

	interface deleteMasterDataPayload {
		id: number;
	}

	type updateMasterDataPayload = addMasterDataPayload & deleteMasterDataPayload;
}
