import Section from "@/components/Section";
import "./team.scss";
import Heading from "@/components/Heading/Heading";
import Teammate from "@/components/Teammate/Teammate";
import Button from "@/components/Button/Button";

export default ({ data }) => {
	const { title, text, list, btn } = data.team;

	return (
		<Section className="team">
			<Heading className="team__heading" title={title}>{text}</Heading>
			<ul className="team__list">
				{list.map((item, i) => <Teammate className="team__item box box--shadow" data={item} key={i} />)}
			</ul>
			<Button className="team__btn">{btn}</Button>
		</Section>
	)
}
