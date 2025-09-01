import "./testimonials.scss";
import Section from "@/components/Section";
import Heading from "@/components/Heading/Heading";
import Slider from "@/components/Slider/Slider.jsx";
import Testimonial from "@/components/Testimonial/Testimonial";
import Icon from "@/components/Icon";

const params = {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	centeredSlides: true,
	breakpoints: {
		769: {
			slidesPerView: 1.5,
			spaceBetween: 50,
		},
		1024: {
			slidesPerView: 1.96,
			spaceBetween: 50,
		},
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	navigation: {
		nextEl: '[data-slider-btn-next]',
		prevEl: '[data-slider-btn-prev]',
	},
	pagination: {
		el: '[data-slider-pagination]',
		clickable: true,
		renderBulletMarkup: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="currentColor"/></svg>`,
	},
}


export default ({ data }) => {
	const { title, text, btns, list } = data.testimonials;
	return (
		<Section className="testimonials">
			<Heading className="testimonials__heading" title={title}>{text}</Heading>
			<div className="testimonials__slider testimonials-slider">
				<Slider className="testimonials-slider__swiper" slides={list} component={Testimonial} params={params}>
					<nav className="testimonials-slider__navigation slider-navigation">
						<button className="slider-navigation__btn slider-navigation__btn--prev" data-slider-btn-prev aria-label={btns.prev} title={btns.prev}>
							<Icon iconId="arrow" />
						</button>
						<div className="slider-navigation__pagination" data-slider-pagination></div>
						<button className="slider-navigation__btn slider-navigation__btn--next" data-slider-btn-next aria-label={btns.next} title={btns.next}>
							<Icon iconId="arrow" />
						</button>
					</nav>
				</Slider>
			</div>
		</Section>
	)
}
