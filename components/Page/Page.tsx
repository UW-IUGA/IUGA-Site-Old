import React from 'react';
import { NavigationBar } from '../NavigationBar/NavigationBar';

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