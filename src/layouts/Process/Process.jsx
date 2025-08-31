import Heading from "@/components/Heading/Heading";
import "./process.scss";
import Section from "@/components/Section";
import Spoiler from "@/components/Spoiler/Spoiler";

export default () => {
	const process = [
		{
			"title": "Consultation",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			"title": "Research and Strategy Development",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		}, {
			"title": "Implementation",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			"title": "Monitoring and Optimization",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			"title": "Reporting and Communication",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
		{
			"title": "Continual Improvement",
			"text": "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
		},
	]
	return (
		<Section className="process">
			<Heading className="process__heading" title="Our Working Process">
				Step-by-Step Guide to Achieving <br /> Your Business Goals
			</Heading>
			<ul className="process__list">
				{process.map((item, i) => <Spoiler className="process__item" data={item} key={i} index={i}/>)}
			</ul>
		</Section>
	)
}
