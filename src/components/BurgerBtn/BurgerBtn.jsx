import clsx from "clsx";
import "./burger-btn.scss";

export default ({ className, label = "Open / close menu" }) => {
	return (
		<button className={clsx("burger-btn", className)} aria-label={label} title={label} data-menu-btn>
			<span></span>
		</button>
	)
}
