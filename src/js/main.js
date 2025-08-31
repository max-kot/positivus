import { Menu } from "./modules/Menu";
import { AutoCalc } from "./modules/AutoCalc";
import { SliderCollection } from "@/components/Slider/Slider";
import { HideHeader } from "./modules/HeaderHide";
import { Spoiler } from "./modules/Spoiler";
import { CurrentYear } from "./modules/CurrentYear";

new SliderCollection();
new Menu();
new AutoCalc();
new HideHeader();
new Spoiler();
new CurrentYear();

const elements = document.querySelectorAll('[data-mouse-parallax]');

if (elements.length) {
	elements.forEach(el => {
		const parent = document.querySelector(el.getAttribute('data-mouse-parallax')) || document;

		parent.addEventListener("mousemove", (e) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;  // сила смещения по X
			const y = (e.clientY / innerHeight - 0.5) * 30; // сила смещения по Y

			el.style.transform = `translate(${x}px, ${y}px)`;
		});
	})
}

const runningItems = document.querySelectorAll('[data-running-line-item]');

runningItems.forEach(item => {
	const clone = item.cloneNode(true);
	clone.setAttribute('aria-hidden', true)
	item.parentElement.insertAdjacentElement("beforeend", clone);
})