import Button from "../Button/Button";
import "./switch-button.scss";

export default ({ data }) => {
	const { href, text, lang } = data.header.switchBtn;

	return (
		<Button className="switch-button btn--light" href={href} aria-label={text}>
			{lang}
		</Button>
	)
}
