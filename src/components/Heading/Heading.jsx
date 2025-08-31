import clsx from "clsx";
import "./heading.scss";

export default ({
	className,
	title,
	titleTag = "h2",
	children,
}) => {
	const TitleTag = titleTag;

	return (
		<header className={clsx("heading", className)}>
			<TitleTag className="heading__title h2"><span className="marked">{title}</span></TitleTag>
			<p className="heading__description">{children}</p>
		</header>
	)
}
