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

	closeMenu(menu) {
		menu.classList.remove(this.params.activeClass);
		document.documentElement.classList.remove(this.params.activeClass);

	}

	init() {
		document.addEventListener('click', ({ target }) => {
			if (target.closest(this.btn)) {
				const btn = target.closest(this.btn);
				const menu = btn.parentElement.querySelector(this.menu);

				if (!menu) return;
				menu.classList.toggle(this.params.activeClass);
				document.documentElement.classList.toggle(this.params.activeClass);
			}

			if (target.closest(this.menu)) {
				const menu = target.closest(this.menu);

				if (menu.classList.contains(this.params.activeClass)) {
					const allBtns = document.querySelectorAll('a, buttons');

					if (target.closest(`${this.menu} a` || `${this.menu} button`)) {
						this.closeMenu(menu)
					}
				}
			}
		})
	}
}