import { ListItem } from "@rneui/themed";
import YJHeader from "../../../layout/YJHeader";
import { useState } from "react";

const MasterData = () => {
	const [accordionExpand, setAccordionExpand] = useState(false);

	return (
		<YJHeader title="Master Data">
			<ListItem.Accordion
				content={
					<ListItem.Content>
						<ListItem.Title>Top Users</ListItem.Title>
						<ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
					</ListItem.Content>
				}
				isExpanded={accordionExpand}
				onPress={() => {
					setAccordionExpand(!accordionExpand);
				}}
			>
				<ListItem>
					<ListItem.Content>
						<ListItem.Title>John Doe</ListItem.Title>
						<ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
				<ListItem>
					<ListItem.Content>
						<ListItem.Title>Albert</ListItem.Title>
						<ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
			</ListItem.Accordion>
		</YJHeader>
	);
};

export default MasterData;
