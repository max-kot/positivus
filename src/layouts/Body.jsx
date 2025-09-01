import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Main from "./Main"

export default ({ lang, children }) => {
	return (
		<div className="wrapper">
			{children}
		</div>
	)
} 