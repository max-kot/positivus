import clsx from "clsx";

export default ({ tagName = "section", className, id = className, sectionClass = "section", containerClass, children, ...props}) => {
	const Tag = tagName;
	return (
		<Tag className={clsx(sectionClass, className)} id={id} {...props}>
			<div className={clsx("container", `${className}__container`, containerClass)}>
				{children}
			</div>
		</Tag>
	)
}