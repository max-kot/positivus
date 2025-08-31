import clsx from "clsx";
import Icon from "../Icon";
import "./link.scss";

export default ({
	className,
	tagName = 'a',
	href = "#",
	children,
}) => {
	const Tag = tagName;
	return (
		<Tag href={href} className={clsx("btn-link", className)}>
			<Icon iconId="arrow"/>
			<span className="btn-link__text">{children}</span>
		</Tag>
	)
}
