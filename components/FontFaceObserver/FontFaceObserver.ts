// @ts-ignore
import FontFaceObserver from 'fontfaceobserver';

export const Fonts = async () => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i";
    link.rel = "stylesheet";

    document.head.appendChild(link);

    const ptSans = new FontFaceObserver("PT Sans");
    await ptSans.load();
    document.documentElement.classList.add("ptSans");
}
