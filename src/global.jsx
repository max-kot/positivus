import '@/scss/main.scss';
import { Head } from 'minista'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

import Body from './layouts/Body';

export default (props) => {
	const { children, title, url, lang = "ru" } = props

	return (
		<>
			<Head htmlAttributes={{ lang: lang, class: lang }}>
				<title>{title}</title>
				<script src="/src/js/main.js" type="module" />
				<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
				<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
				<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
				<link rel="manifest" href={manifest} />
			</Head>
			<Body lang={lang}>
				{children}
			</Body>
		</>
	)
}
