import Heading from "@/components/Heading/Heading";
import "./process.scss";
import Section from "@/components/Section";
import Spoiler from "@/components/Spoiler/Spoiler";

import { parseBrToJsx } from "@/utils/parseBrToJsx";

export default ({ data }) => {
	const {title, text, list} = data.process;

	return (
		<Section className="process">
			<Heading className="process__heading" title={title}>{parseBrToJsx(text)}</Heading>
			<ul className="process__list">
				{list.map((item, i) => <Spoiler className="process__item" data={item} key={i} index={i} />)}
			</ul>
		</Section>
	)
}
