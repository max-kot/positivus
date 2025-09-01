import en from "@/data/en/index";
import Home from "@/layouts/Home";

export const metadata = {
	title: 'Positivus | Digital marketing agency',
	lang: 'en',
}

export default () => {
	return (
		<Home data={en} />
	)
}
