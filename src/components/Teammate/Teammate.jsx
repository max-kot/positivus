import clsx from "clsx";
import "./teammate.scss";
import ImageBox from "../ImageBox/ImageBox";
import Icon from "../Icon";

export default ({ className, data }) => {
	const { photo, name, position, linkedIn, bio } = data;

	return (
		<li className={clsx("teammate", className)}>
			<div className="teammate__header">
				<div className="teammate__image-wrapper">
					<ImageBox className="teammate__image" src={photo} alt={name} />
				</div>
				<div className="teammate__meta">
					<h3 className="teammate__name h4">{name}</h3>
					<p className="teammate__position">{position}</p>
					<a className="teammate__link link-icon link-icon--dark" href="#" target="_blank" aria-label="See LinkedIn profile">
						<Icon iconId="linkedin" />
					</a>
				</div>
			</div>
			<p className="teammate__bio">{bio}</p>
		</li>
	)
}
