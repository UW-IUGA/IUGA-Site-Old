export type NavigationBarLink = {
	name: string,
	link: string
}

/**
 * Navigation bar links with names and link. 
 * 
 * The name is what is displayed in the navigation bar. The link is the hyperlink reference. It is 
 * displayed from left to right in order of appearance in this array.
 * 
 * The name doubles as a react `key` for the `.map` function. Try to keep this as a single word. I
 * *think* that react requires `key`s to be a single word. 
 * 
 * Last Modified
 *      William Kwok
 *      June 5, 2019
 */
export const navigationBarLinks: NavigationBarLink[] = [
	{
		name: "home",
		link: "/",
	},
	{
		name: "past officers",
		link: "/pastofficers"
	},
	{
		name: "elections",
		link: "/elections",
	},
	{
		name: "store",
		link: "http://store.iuga.info"
	}
]