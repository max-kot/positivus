import clsx from "clsx";
import Button from "./Button/Button";
import Icon from "./Icon";

export default ({href, children, className, ...props}) => {
	return (
		<Button href={href} className={clsx("btn-arrow", className)} {...props}>
			<span>{children}</span>
			<Icon className="btn-arrow__icon" iconId="arrow-down" hasFill={true} />
		</Button>
	)
}