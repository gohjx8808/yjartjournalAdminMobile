export const formatCurrency = (value: number) => {
	const formattingOptions = {
		style: "currency",
		currency: "MYR",
		minimumFractionDigits: 2,
	};
	const dollarString = new Intl.NumberFormat("ms-MY", formattingOptions);

	return dollarString.format(value);
};
