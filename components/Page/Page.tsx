import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

type PageProps = {
    children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({ children }) => {


    return <>
        <NavigationBar />
        Hi from page
            {children}
    </>
}