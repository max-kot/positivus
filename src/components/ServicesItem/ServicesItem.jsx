import clsx from "clsx";
import "./services-item.scss";
import Link from "../Link/Link";
import { Picture } from "minista";

export default ({ data, className }) => {
	const { href, title, image, type } = data;
	return (
		<li className={clsx("services-item", className, type)}>
			<a className="box box--shadow services-item__link-wrapper" href={href}>
				<h3 className="h3 services-item__title"><span className="marked">{title}</span></h3>
				<figure className="services-item__image" aria-hidden="true">
					<Picture src={image} />
				</figure>
				<Link className="services-item__link" tagName="span">Learn more</Link>
			</a>
		</li>
	)
}
