import { Skeleton, type SkeletonProps } from "@rneui/themed";
import LinearGradient from "react-native-linear-gradient";

const YJLoadingSkeleton = (
	props: Omit<SkeletonProps, "LinearGradientComponent" | "animation">,
) => {
	return (
		<Skeleton
			LinearGradientComponent={LinearGradient}
			animation="wave"
			{...props}
		/>
	);
};

export default YJLoadingSkeleton;
