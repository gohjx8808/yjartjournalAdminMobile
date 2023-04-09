import { createContext, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import {
	useAllYarnCategories,
	useAllYarnColorCategories,
} from "../modules/yarnStock/src/queries/yarnStockQueries";

interface filterProps {
	yarnCategoryIds: number[];
	yarnColorCategoryIds: number[];
	setYarnCategoryIds: (value: number[]) => void;
	setYarnColorCategoryIds: (value: number[]) => void;
}

const initialState: filterProps = {
	yarnCategoryIds: [],
	yarnColorCategoryIds: [],
	setYarnCategoryIds: () => {},
	setYarnColorCategoryIds: () => {},
};

export const YarnStockFilterContext = createContext(initialState);

export const YarnStockFilterContextProvider = (props: PropsWithChildren) => {
	const [yarnCategoryIds, setYarnCategoryIds] = useState<number[]>([]);
	const [yarnColorCategoryIds, setYarnColorCategoryIds] = useState<number[]>(
		[],
	);

	const { data: yarnCategories } = useAllYarnCategories();
	const { data: yarnColorCategories } = useAllYarnColorCategories();

	useEffect(() => {
		const tempCategoryId: number[] = [];
		const tempColorCategoryId: number[] = [];
		yarnCategories?.forEach(category => {
			tempCategoryId.push(category.id);
		});
		yarnColorCategories?.forEach(colorCategory => {
			tempColorCategoryId.push(colorCategory.id);
		});
		setYarnCategoryIds(tempCategoryId);
		setYarnColorCategoryIds(tempColorCategoryId);
	}, [yarnCategories, yarnColorCategories]);

	console.log(yarnCategoryIds);

	return (
		<YarnStockFilterContext.Provider
			value={{
				yarnCategoryIds,
				yarnColorCategoryIds,
				setYarnCategoryIds,
				setYarnColorCategoryIds,
			}}
		>
			{props.children}
		</YarnStockFilterContext.Provider>
	);
};
