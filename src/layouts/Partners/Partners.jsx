import "./partners.scss";

import Section from "@/components/Section";

export default () => {
	const partners = [
		{
			icon: "logo-1.svg", label: "Amazon",
		},
		{
			icon: "logo-2.svg", label: "dribble",
		},
		{
			icon: "logo-3.svg", label: "HubSpot",
		},
		{
			icon: "logo-4.svg", label: "Notion",
		},
		{
			icon: "logo-5.svg", label: "Netflix",
		},
		{
			icon: "logo-6.svg", label: "Zoom",
		},
	]
	return (
		<Section className="partners">
			<h2 className="visually-hidden">
				Our partners
			</h2>
			<ul className="partners__list" data-running-line>
				{partners.map(({ icon, label }) => <li className="partners__item" key="label" data-running-line-item><img src={"src/assets/images/partners/" + icon} alt={label} title={label}/></li>)}
			</ul>
		</Section>
	)
}
