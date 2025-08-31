import Section from "@/components/Section";
import "./team.scss";
import Heading from "@/components/Heading/Heading";
import Teammate from "@/components/Teammate/Teammate";
import Button from "@/components/Button/Button";

export default () => {
	const team = [
		{
			"photo": "src/assets/images/team/image-1.jpg",
			"name": "John Smith",
			"position": "CEO and Founder",
			"linkedIn": "#",
			"bio": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
		},
		{
			"photo": "src/assets/images/team/image-2.jpg",
			"name": "Jane Doe",
			"position": "Director of Operations",
			"linkedIn": "#",
			"bio": "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
		},
		{
			"photo": "src/assets/images/team/image-3.jpg",
			"name": "Michael Brown",
			"position": "Senior SEO Specialist",
			"linkedIn": "#",
			"bio": "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
		},
		{
			"photo": "src/assets/images/team/image-4.jpg",
			"name": "Emily Johnson",
			"position": "PPC Manager",
			"linkedIn": "#",
			"bio": "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
		},
		{
			"photo": "src/assets/images/team/image-5.jpg",
			"name": "Brian Williams",
			"position": "Social Media Specialist",
			"linkedIn": "#",
			"bio": "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
		},
		{
			"photo": "src/assets/images/team/image-6.jpg",
			"name": "Sarah Kim",
			"position": "Content Creators",
			"linkedIn": "#",
			"bio": "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
		},

	]
	return (
		<Section className="team">
			<Heading className="team__heading" title="Team">
				Meet the skilled and experienced team behind our successful digital marketing strategies
			</Heading>
			<ul className="team__list">
				{team.map((item, i) => <Teammate className="team__item box box--shadow" data={item} key={i}/>)}
			</ul>
			<Button className="team__btn">See all team</Button>
		</Section>
	)
}
