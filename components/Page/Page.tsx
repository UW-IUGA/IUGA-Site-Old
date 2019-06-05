import React from 'react';

type PageProps = {
    children: React.ReactNode
}

export const Page: React.FC<PageProps> = ({ children }) => {
    return <>
        Hi from page
        {children}
    </>
}