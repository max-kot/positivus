import { Picture } from "minista";
import "./image-box.scss";
import clsx from "clsx";

export default ({className, src, alt, children, ...props}) => {
	return (
		<figure className={clsx("image-box", className)} {...props}>
			<Picture src={src} alt={alt}/>
			{children}
		</figure>
	)
}
