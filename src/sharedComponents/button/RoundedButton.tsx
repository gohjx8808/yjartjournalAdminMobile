import { Button } from "@rneui/themed";
import type { ButtonProps } from "@rneui/themed";
import React from "react";

const RoundedButton = (props: ButtonProps): JSX.Element => {
	return (
		<Button
			{...props}
			titleStyle={{ fontWeight: "bold", fontSize: 20 }}
			buttonStyle={[
				props.buttonStyle,
				{ minHeight: 50, minWidth: "40%", borderRadius: 10 },
			]}
		/>
	);
};

export default RoundedButton;
