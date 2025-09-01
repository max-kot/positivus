import BurgerBtn from "@/components/BurgerBtn/BurgerBtn";
import "./header.scss";

import Button from "@/components/Button/Button"
import Logo from "@/components/Logo/Logo"
import Menu from "@/components/Menu/Menu"
import Section from "@/components/Section"

export default ({ data }) => {
	const { header, menu } = data;

	return (
		<Section tagName="header" className="header" data-auto-calc="header, height">
			<Logo className="header__logo" />
			<div className="header__wrapper" data-menu>
				<Menu className="header__menu" data={menu}/>
				<Button className="header__btn btn--accent" href="#contacts">{header.btn}</Button>
			</div>
			<BurgerBtn className="header__burger-btn" label={header.burgerLabel}/>
		</Section>

	)
}