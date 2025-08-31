import Section from "@/components/Section";
import "./cases.scss";
import Heading from "@/components/Heading/Heading";
import Case from "@/components/Case/Case";

export default () => {
	const cases = [
		{
			"text": "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
			"href": "#",
		},
		{
			"text": "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
			"href": "#",
		},
		{
			"text": "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
			"href": "#",
		},
	]
	return (
		<Section className="cases">
			<Heading className="cases__heading" title="Case Studies">
				Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
			</Heading>
			<ul className="box cases__list">
				{cases.map((item, i) => <Case className="cases__item" data={item} key={i}/>)}
			</ul>
		</Section>
	)
}
