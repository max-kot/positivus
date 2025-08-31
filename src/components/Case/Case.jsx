import clsx from "clsx";
import "./case.scss";
import Link from "../Link/Link";

export default ({ data, className }) => {
	const { href, text } = data;
	return (
		<li className={clsx("case", className)}>
			<p className="case__description">{text}</p>
			<Link className="case__link link--reverse" href={href}>Learn more</Link>
		</li>
	)
}
