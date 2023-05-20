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
} from "react-native-reanimated";

interface YJZoomableImageProps extends ImageProps {
	imageDimension: dialogProps.imageDimensionData;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const YJZoomableImage = (props: YJZoomableImageProps) => {
	const { style, imageDimension, ...rest } = props;
	const scale = useSharedValue(1);

	const styles = useStyles(imageDimension);

	const handlePinch =
		useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
			onActive: event => {
				scale.value = event.scale;
			},
		});

	const animatedImgStyle = useAnimatedStyle(() => {
		return { transform: [{ scale: scale.value }] };
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
