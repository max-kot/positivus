import ru from "@/data/ru/index";
import Home from "@/layouts/Home";

export const metadata = {
	title: 'Positivus | Агентство цифрового маркетинга',
	lang: 'ru',
}

export default () => {
	return (
		<Home data={ru} />
	)
}
