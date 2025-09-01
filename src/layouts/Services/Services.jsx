import "./services.scss";
import Section from "@/components/Section";
import Heading from "@/components/Heading/Heading";
import ServicesItem from "@/components/ServicesItem/ServicesItem";

export default ({ data }) => {
	const { list, title, text, btn} = data.services;
	return (
		<Section className="services">
			<Heading className="services__heading" title={title}>{text}</Heading>
			<ul className="services__list">
				{list.map((item, i) => <ServicesItem data={item} key={i} btnText={btn}/>)}
			</ul>
		</Section>
	)
}
