import React, { useEffect } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Fonts } from '../Fonts/Fonts';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, WithRouterProps } from 'next/router';

type PageProps = {
    children: React.ReactNode
}

type RouterProps = WithRouterProps<Record<string, string | string[] | undefined>>

/**
 * Page is the base page used for all the pages on the IUGA website. It will provide the Navigation
 * bar with the appropriately selected menu option (If none are appropriate, it will remain black).
 * 
 * Last Modified
 *      William Kwok
 *      June 5, 2019
 */
const Page: React.FC<PageProps & RouterProps> = ({ children, router }) => {
    /**
     * On component mount, load the fonts. 
     */
    useEffect(() => {
        Fonts();
    }, []);

    /**
     * This line of code grabs the page from the query.
     */
    let page: string = router && router.query && router.query.page as string || "";

    return <>
        <NavigationBar page={page} />
        Hi from page {page}
        {children}
    </>
}

/**
 * Wrap the class in `withRouter` to gain access to the query.
 */
export default withRouter(Page);