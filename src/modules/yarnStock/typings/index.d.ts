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
		imageUrl?: string | null;
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
		image?: string | null;
	}

	interface deleteYarnStockPayload {
		yarnId: number;
	}

	interface updateYarnStockPayload
		extends addEditYarnStockPayload,
			deleteYarnStockPayload {
		image: updateStockImagePayload;
	}

	interface updateYarnStockRouteParams {
		stockData: yarnStockData;
	}

	interface updateStockImagePayload {
		base64Data: string | null;
		isUpdated: boolean | null;
	}
}
