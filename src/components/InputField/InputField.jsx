import clsx from "clsx";
import "./input-field.scss";

export default ({ className, type = "text", tagName = "input", id, value, placeholder, label, ...props }) => {
	return (
		<div className={clsx("input-field", className)}>
			{label && <label className="input-field__label" htmlFor={id}>{label}</label>}
			{tagName === 'textarea' ? <textarea className="input-field__input input-field__textarea" placeholder={placeholder} id={id} {...props}>{value}</textarea> : <input className="input-field__input" value={value} placeholder={placeholder} type={type} id={id} {...props} />}
		</div>
	)
}
