import "./footer.scss";
import Section from "@/components/Section";
import Menu from "@/components/Menu/Menu";
import Logo from "@/components/Logo/Logo";
import Socials from "@/components/Socials/Socials";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";

export default () => {
	return (
		<Section className="footer" containerClass="box" tagName="footer">
			<div className="footer__top">
				<Logo className="footer__logo" src="images/logo-light.svg" />
				<Menu className="footer__menu" />
				<Socials />
			</div>
			<div className="footer__middle">
				<div className="footer__contacts">
					<h3 className="footer__title h4"><span className="marked">Contact Us:</span></h3>
					<ul className="footer__contacts-list contacts-info">
						<li className="contacts-info__item">
							<span className="contacts-info__text">Email:</span>
							<a className="contacts-info__link link" href="mailto:info@positivus.com">info@positivus.com</a>
						</li>
						<li className="contacts-info__item">
							<span className="contacts-info__text">Phone:</span>
							<a className="contacts-info__link link" href="tel:5555678901">555-567-8901</a>
						</li>
						<li className="contacts-info__item">
							<span className="contacts-info__text">
								Address:
							</span>
							<a className="contacts-info__link link" href="https://www.google.com/maps/place/%D0%90%D0%BD%D1%82%D0%B0%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B0/@-75.05435,0,3z/data=!3m1!4b1!4m6!3m5!1s0xa4b9967b3390754b:0x6e52be1f740f2075!8m2!3d-75.250973!4d-0.071389!16s%2Fm%2F06wc8yw?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><address>1234 Main St
								Moonstone City, Stardust State 12345</address></a>
						</li>
					</ul>
				</div>
				<form className="footer__subscribe-form subscribe-form box">
					<InputField className="subscribe-form__input-field" id="subscribe-mail" type="email" placeholder="Email" required />
					<Button className="btn--accent subscribe-form__input-btn" type="submit">Subscribe to news</Button>
				</form>
			</div>
			<div className="footer__bottom">
				<small className="footer__copy">
					&copy; <span className="footer__year" data-year>2023</span> Positivus. All Rights Reserved.
				</small>
				<ul className="footer__link-list creators-list">
					<li className="creators-list__item">
						<span className="creators-list__text">Designed by:</span>
						<a className="creators-list__link link" href="https://www.olgaskuja.design/" target="_blank" rel="noreferrer">olgaskuja.design</a>
					</li>
					<li className="creators-list__item">
						<span className="creators-list__text">Developed by:</span>
						<a className="creators-list__link link" href="https://www.github.com/max-kot/" target="_blank" rel="noreferrer">{"<maxkot>"}</a>
					</li>
				</ul>
			</div>
		</Section>
	)
}
