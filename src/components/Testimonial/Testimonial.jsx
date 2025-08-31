import "./testimonial.scss";

export default ({ data }) => {
	const { text, name, position } = data;

	return (
		<blockquote className="testimonial">
			<div className="testimonial__content">
				<p>{text}</p>
			</div>
			<div className="testimonial__meta">
				<h3 className="testimonial__author h4">{name}</h3>
				<p className="testimonial__position">{position}</p>
			</div>
		</blockquote>
	)
}
