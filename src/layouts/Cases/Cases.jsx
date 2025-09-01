import Section from "@/components/Section";
import "./cases.scss";
import Heading from "@/components/Heading/Heading";
import Case from "@/components/Case/Case";

export default ({ data }) => {
	const { title, text, list, btn } = data.cases;

	return (
		<Section className="cases">
			<Heading className="cases__heading" title={title}>{text}</Heading>
			<ul className="box cases__list">
				{list.map((item, i) => <Case className="cases__item" data={item} key={i} btnText={btn}/>)}
			</ul>
		</Section>
	)
}
