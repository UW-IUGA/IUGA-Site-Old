type PageCodeTypes = {
    [index: string]: string
}

/**
 * PAGE_CODES here has its keys connected to the PAGE_CODES in app.js, and the VALUES are associated
 * with the `name`s under the `navigationBarLinks` in `./navigationBarLinks.ts`
 * 
 * Last Modified
 *      William Kwok
 *      June 5, 2019
 */
export const PAGE_CODES: PageCodeTypes = {
    HOME: "home",
    ELECTIONS: "elections"
}