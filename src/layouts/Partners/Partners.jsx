import { Image } from "minista";
import "./partners.scss";

import Section from "@/components/Section";

export default ({ data }) => {
	const { title } = data.partners;
	const list = [
		{
			"icon": "/src/assets/images/partners/partners-1.png",
			"label": "Amazon"
		},
		{
			"icon": "/src/assets/images/partners/partners-2.png",
			"label": "dribble"
		},
		{
			"icon": "/src/assets/images/partners/partners-3.png",
			"label": "HubSpot"
		},
		{
			"icon": "/src/assets/images/partners/partners-4.png",
			"label": "Notion"
		},
		{
			"icon": "/src/assets/images/partners/partners-5.png",
			"label": "Netflix"
		},
		{
			"icon": "/src/assets/images/partners/partners-6.png",
			"label": "Zoom"
		}
	]
	return (
		<Section className="partners">
			<h2 className="visually-hidden">{title}</h2>
			<ul className="partners__list" data-running-line>
				{list.map(({ icon, label }) => <li className="partners__item" key="label" data-running-line-item><Image src={icon} alt={label} title={label} /></li>)}
			</ul>
		</Section>
	)
}
