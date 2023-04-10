declare namespace yarnStock {
	interface yarnStockFilter {
		category: boolean[];
		colorCategory: boolean[];
	}

	interface getAllYarnStockPayload {
		yarnCategoryIds: number[];
		yarnColorCategoryIds: number[];
	}

	interface yarnStockData {
		id: number;
		detailedColor: string;
		costPerItem: number;
		inStockQuantity: number;
		usedQuantity: number;
		reorderLevel: number;
		lastOrderedAt: string;
		yarnColorCategory: optionData;
		yarnCategory: optionData;
		reorderStatus: "Optimum" | "Reorder";
	}

	interface updateQuantityPayload {
		yarnId: number;
		quantity: number;
	}
}
