import "./menu.scss";
import menu from "@/data/menu.json";
import clsx from "clsx";

export default ({className}) => {
	return (
		<nav className={clsx("menu", className)}>
			<ul className="menu__list">
				{menu.map(({ text, href }) => <li className="menu__item" key={text}><a className="menu__link link" href={href} title={text}>{text}</a></li>)}
			</ul>
		</nav>
	)
}