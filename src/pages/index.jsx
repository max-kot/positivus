import ru from "@/data/ru/index";
import Home from "@/layouts/Home";

export const metadata = {
	title: 'Positivus | Агентство интернет маркетинга',
	lang: 'ru',
}

export default () => {
	return (
		<Home data={ru} />
	)
}
