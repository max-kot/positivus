import "./services.scss";
import Section from "@/components/Section";
import Heading from "@/components/Heading/Heading";
import ServicesItem from "@/components/ServicesItem/ServicesItem";

export default () => {
	const services = [
		{
			"title": "Search engine optimization",
			"image": "src/assets/images/services/image-1.png",
			"href": "#",
			"type": "",
		},
		{
			"title": "Pay-per-click advertising",
			"image": "src/assets/images/services/image-2.png",
			"href": "#",
			"type": "accent",
		},
		{
			"title": "Social Media Marketing",
			"image": "src/assets/images/services/image-3.png",
			"href": "#",
			"type": "dark",
		},
		{
			"title": "Email Marketing",
			"image": "src/assets/images/services/image-4.png",
			"href": "#",
			"type": "",
		},
		{
			"title": "Content Creation",
			"image": "src/assets/images/services/image-5.png",
			"href": "#",
			"type": "accent",
		},
		{
			"title": "Analytics and Tracking",
			"image": "src/assets/images/services/image-6.png",
			"href": "#",
			"type": "dark",
		},
	]
	return (
		<Section className="services">
			<Heading className="services__heading" title="Services">
				At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
			</Heading>
			<ul className="services__list">
				{services.map((item, i) => <ServicesItem data={item} key={i} />)}
			</ul>
		</Section>
	)
}
