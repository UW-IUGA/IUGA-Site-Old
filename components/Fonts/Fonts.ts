// @ts-ignore
import FontFaceObserver from 'fontfaceobserver';

/**
 * Fonts will use the FontFaceObserver library to load the fonts in dynamically to the page. This 
 * was one of the easier ways I figured to do this. Ideally we would want to keep the fonts local
 * but getting it off google is alright too. If we want it to stay static, we could mess around 
 * with using `dangerouslySetInnerHTML` on a `style` tag, but that isn't ideal either. 
 * 
 * Last Modified
 *      William Kwok
 *      June 5, 2019
 */
export const Fonts = async () => {
	const link = document.createElement("link");
	link.href = "https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i";
	link.rel = "stylesheet";

	document.head.appendChild(link);

	const ptSans = new FontFaceObserver("PT Sans");
	await ptSans.load();
	document.documentElement.classList.add("ptSans");
}
