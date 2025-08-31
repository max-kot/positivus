export class Menu {
	constructor(selector, params) {
		const defaultParams = {
			btn: '[data-menu-btn]',
			menu: '[data-menu]',
			activeClass: 'open-menu',
		};

		this.params = { ...defaultParams, ...params };
		this.menu = selector || this.params.menu;
		this.btn = this.params.btn;
		this.init();
	}

	init = () => {
		document.addEventListener('click', ({ target }) => {
			if (target.closest(this.btn)) {
				const btn = target.closest(this.btn);
				const menu = btn.parentElement.querySelector(this.menu);
				
				if (!menu) return;
				menu.classList.toggle(this.params.activeClass);
				document.documentElement.classList.toggle(this.params.activeClass);
			}
		})
	}
}