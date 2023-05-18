import { type PropsWithChildren } from "react";
import { Animated } from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";

interface YJZoomViewProps extends PropsWithChildren {
	scale: Animated.Value;
}

const YJZoomView = (props: YJZoomViewProps) => {
	const { children, scale } = props;

	const handlePinch = Animated.event([{ nativeEvent: { scale } }], {
		useNativeDriver: true,
	});

	return (
		<PinchGestureHandler onGestureEvent={handlePinch}>
			{children}
		</PinchGestureHandler>
	);
};

export default YJZoomView;
