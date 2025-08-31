import "./partners.scss";

import Section from "@/components/Section";

export default () => {
	const partners = [
		{
			icon: "src/assets/images/partners/logo-1.svg", label: "Amazon",
		},
		{
			icon: "src/assets/images/partners/logo-2.svg", label: "dribble",
		},
		{
			icon: "src/assets/images/partners/logo-3.svg", label: "HubSpot",
		},
		{
			icon: "src/assets/images/partners/logo-4.svg", label: "Notion",
		},
		{
			icon: "src/assets/images/partners/logo-5.svg", label: "Netflix",
		},
		{
			icon: "src/assets/images/partners/logo-6.svg", label: "Zoom",
		},
	]
	return (
		<Section className="partners">
			<h2 className="visually-hidden">
				Our partners
			</h2>
			<ul className="partners__list" data-running-line>
				{partners.map(({ icon, label }) => <li className="partners__item" key="label" data-running-line-item><img src={icon} alt={label} title={label}/></li>)}
			</ul>
		</Section>
	)
}
