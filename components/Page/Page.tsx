import React, { useEffect } from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Fonts } from '../FontFaceObserver/FontFaceObserver';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';



type PageProps = {
    children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({ children }) => {
    useEffect(() => {
        Fonts();
    }, []);

    return <>

        <NavigationBar />
        Hi from page
            {children}
    </>
}