import clsx from "clsx";
import "./checkbox.scss";

export default ({ className, type = "checkbox", name, value, children, ...props }) => {
	return (
		<label className={clsx("checkbox", className)}>
			<input className="checkbox__input" type={type} name={name} value={value} {...props} />
			<span className="checkbox__fake"></span>
			{children && <span className="checkbox__text">{children}</span>}
		</label>
	)
}
