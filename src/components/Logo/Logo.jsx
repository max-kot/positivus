import "./Logo.scss";
import clsx from "clsx"

export default ({
	className, src = "images/logo.svg" }) => {
	return (
		<a className={clsx("logo", className)} href="/" >
			<img src={src} alt="Positivus logo" title="Positivus" />
		</a>
	)
}