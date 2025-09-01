import SwitchButton from "@/components/SwitchButton/SwitchButton"
import Cases from "./Cases/Cases"
import Contacts from "./Contacts/Contacts"
import CTA from "./CTA/CTA"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Main from "./Main"
import Partners from "./Partners/Partners"
import Process from "./Process/Process"
import Services from "./Services/Services"
import Team from "./Team/Team"
import Testimonials from "./Testimonials/Testimonials"

export default ({ data }) => {
	return (
		<>
			<Header data={data} />
			<Main>
				<Hero data={data} />
				<Partners data={data} />
				<Services data={data} />
				<CTA data={data} />
				<Cases data={data} />
				<Process data={data} />
				<Team data={data} />
				<Testimonials data={data} />
				<Contacts data={data} />
				<SwitchButton data={data} />
			</Main>
			<Footer data={data} />
		</>
	)
}