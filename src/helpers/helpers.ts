export const formatCurrency = (value: number) => {
	const formattingOptions = {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2,
	};
	const dollarString = new Intl.NumberFormat("ms-MY", formattingOptions);

	return dollarString.format(value);
};

export const convertUTCToMYT = (date?: Date) => {
	if (date !== undefined) {
		date.setTime(date.getTime() + 8 * 60 * 60 * 1000);
	}

	return date;
};

export const getGreetings = () => {
	const timeNow = new Date().getHours();
	if (timeNow < 12) {
		return "Good morning";
	} else if (timeNow < 19) {
		return "Good afternoon";
	}

	return "Good evening";
};
