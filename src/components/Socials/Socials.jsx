import clsx from "clsx";
import "./socials.scss";
import Icon from "../Icon";

const links = [
	{
		"icon": "linkedin",
		"href": "#",
		"label": "Linked In",
	},
	{
		"icon": "fb",
		"href": "#",
		"label": "facebook",
	},
	{
		"icon": "x",
		"href": "#",
		"label": "X",
	},
]

export default ({ className }) => {
	return (
		<ul className={clsx("soc1als", className)}>
			{links.map(({ icon, href, label }) => <li className="soc1als__item" key={label}><a className="soc1als__link link-icon" href={href} aria-label={label} title={label} target="_blank" rel="noreferrer"><Icon iconId={icon} /></a></li>)}
		</ul>
	)
}
