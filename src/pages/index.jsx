import Cases from "@/layouts/Cases/Cases";
import Process from "@/layouts/Process/Process";
import CTA from "@/layouts/CTA/CTA";
import Hero from "@/layouts/Hero/Hero";
import Partners from "@/layouts/Partners/Partners";
import Services from "@/layouts/Services/Services";
import Team from "@/layouts/Team/Team";
import Testimonials from "@/layouts/Testimonials/Testimonials";
import Contacts from "@/layouts/Contacts/Contacts";

export const metadata = {
	title: 'Positivus | Digital marketing agency',
}

export default () => {
	return (
		<>
			<Hero />
			<Partners/>
			<Services/>
			<CTA/>
			<Cases/>
			<Process/>
			<Team/>
			<Testimonials/>
			<Contacts/>
		</>
	)
}
