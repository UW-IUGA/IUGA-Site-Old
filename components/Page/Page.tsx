import React, { useEffect } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Fonts } from '../Fonts/Fonts';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderBar } from './HeaderBar/HeaderBar';
import { HelmetContent } from './HelmetContent/HelmetContent';

type PageProps = {
    children: React.ReactNode,
    pathname: string
}

/**
 * Page is the base page used for all the pages on the IUGA website. It will provide the Navigation
 * bar with the appropriately selected menu option (If none are appropriate, it will remain black).
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
export const Page: React.FC<PageProps> = ({ children, pathname }) => {
    /**
     * On component mount, load the fonts. 
     */
    useEffect(() => {
        Fonts();
    }, []);

    return <>
        <HelmetContent />
        <NavigationBar pathname={pathname} />
        <div className="page-content">
            <HeaderBar pathname={pathname} />
            {children}
        </div>
    </>
}
