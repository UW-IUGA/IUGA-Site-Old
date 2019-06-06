import React, { useEffect } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Fonts } from '../Fonts/Fonts';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, WithRouterProps } from 'next/router';
import { PAGE_CODES } from '../_data/pageCodes';

type PageProps = {
    children: React.ReactNode
}

type RouterProps = WithRouterProps<Record<string, string | string[] | undefined>>

const Page: React.FC<PageProps & RouterProps> = ({ children, router }) => {
    /**
     * On component mount, load the fonts. 
     */
    useEffect(() => {
        Fonts();
    }, []);

    let page: string = router && router.query && router.query.page as string || PAGE_CODES.HOME;

    return <>
        <NavigationBar page={page} />
        Hi from page {page}
        {children}
    </>
}

export default withRouter(Page);