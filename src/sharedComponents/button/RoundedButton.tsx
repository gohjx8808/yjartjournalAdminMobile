import { Button } from "@rneui/themed";
import type { ButtonProps } from "@rneui/themed";
import React from "react";

const RoundedButton = (props: ButtonProps): JSX.Element => {
	return (
		<Button
			{...props}
			buttonStyle={[
				{ minHeight: 50, minWidth: "40%", borderRadius: 10 },
				props.buttonStyle,
			]}
		/>
	);
};

export default RoundedButton;
