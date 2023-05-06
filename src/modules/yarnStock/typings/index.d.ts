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
		lastOrderedAt?: string;
		yarnColorCategory: optionData;
		yarnCategory: optionData;
		reorderStatus: "Optimum" | "Reorder";
		imageUrl?: string;
	}

	interface updateQuantityPayload {
		yarnId: number;
		quantity: number;
	}

	interface addYarnStockPayload extends addEditYarnStockPayload {
		quantity: number;
	}

	interface addEditYarnStockPayload {
		yarnCategory: optionData;
		yarnColorCategory: optionData;
		detailedColor: string;
		cost: string;
		reorderLevel: string;
		lastOrderedDate?: Date;
	}

	interface deleteYarnStockPayload {
		yarnId: number;
	}

	type updateYarnStockPayload = addEditYarnStockPayload &
		deleteYarnStockPayload;

	interface updateYarnStockRouteParams {
		stockData: yarnStockData;
	}
}
