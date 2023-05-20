import { makeStyles } from "@rneui/themed";
import { Dimensions, Image, type ImageProps } from "react-native";
import {
	PinchGestureHandler,
	type PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

interface YJZoomableImageProps extends ImageProps {
	imageDimension: dialogProps.imageDimensionData;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const YJZoomableImage = (props: YJZoomableImageProps) => {
	const { style, imageDimension, ...rest } = props;
	const previousScale = useSharedValue(1);
	const currentScale = useSharedValue(1);
	const focalX = useSharedValue(0);
	const focalY = useSharedValue(0);

	const styles = useStyles(imageDimension);

	const handlePinch =
		useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
			onActive: event => {
				if (previousScale.value * event.scale > 0.5) {
					currentScale.value = event.scale;
					focalX.value = event.focalX;
					focalY.value = event.focalY;
				}
			},
			onEnd: () => {
				previousScale.value *= currentScale.value;
				currentScale.value = 1;
				if (previousScale.value < 1) {
					previousScale.value = withSpring(1);
				}
			},
		});

	const animatedImgStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: focalX.value },
				{ translateY: focalY.value },
				{ translateX: -imageDimension.width / 2 },
				{ translateY: -imageDimension.height / 2 },
				{ scale: currentScale.value },
				{ scale: previousScale.value },
				{ translateX: -focalX.value },
				{ translateY: -focalY.value },
				{ translateX: imageDimension.width / 2 },
				{ translateY: imageDimension.height / 2 },
			],
		};
	});

	return (
		<PinchGestureHandler onGestureEvent={handlePinch}>
			<AnimatedImage {...rest} style={[styles.img, animatedImgStyle, style]} />
		</PinchGestureHandler>
	);
};

export default YJZoomableImage;

const useStyles = makeStyles(
	(_theme, imageDimension: dialogProps.imageDimensionData) => ({
		img: {
			width: imageDimension.width,
			height: imageDimension.height,
			maxWidth: Dimensions.get("screen").width,
		},
	}),
);
