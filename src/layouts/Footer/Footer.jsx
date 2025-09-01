import "./footer.scss";
import Section from "@/components/Section";
import Menu from "@/components/Menu/Menu";
import Logo from "@/components/Logo/Logo";
import Socials from "@/components/Socials/Socials";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";

export default ({ data }) => {
	const { menu } = data;
	const { contacts, subscribe, year, copy, creators } = data.footer;

	return (
		<Section className="footer" containerClass="box" tagName="footer">
			<div className="footer__top">
				<Logo className="footer__logo" src="images/logo-light.svg" />
				<Menu className="footer__menu" data={menu} />
				<Socials />
			</div>
			<div className="footer__middle">
				<div className="footer__contacts">
					<h3 className="footer__title h4"><span className="marked">{contacts.title}</span></h3>
					<ul className="footer__contacts-list contacts-info">
						{contacts.list.map(({ title, text, href, isAddress }) => {
							return (
								<li key={href} className="contacts-info__item">
									<span className="contacts-info__text">{title}</span>
									<a className="contacts-info__link link" href={href}>{isAddress ? <address>{text}</address> : text}</a>
								</li>
							)
						})}
					</ul>
				</div>
				<form className="footer__subscribe-form subscribe-form box">
					<InputField className="subscribe-form__input-field" id={subscribe.id} type={subscribe.type} placeholder={subscribe.placeholder} isRequired={subscribe.isRequired} />
					<Button className="btn--accent subscribe-form__input-btn" type="submit">{subscribe.btn}</Button>
				</form>
			</div>
			<div className="footer__bottom">
				<small className="footer__copy">
					&copy; <span className="footer__year" data-year>${year}</span> {copy}
				</small>
				<ul className="footer__link-list creators-list">
					{creators.map(({ title, href, text }) => {
						return (
							<li key={text} className="creators-list__item">
								<span className="creators-list__text">{title}</span>
								<a className="creators-list__link link" href={href} target="_blank" rel="noreferrer">{text}</a>
							</li>
						)
					})}
				</ul>
			</div>
		</Section>
	)
}
