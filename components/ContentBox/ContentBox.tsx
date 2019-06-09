import React from 'react';
import "./ContentBox.css";

type ContentBoxProps = {
    children: React.ReactNode
}

/**
 * ContentBox wraps content within a styled container. If you want to overhaul a large set of the
 * design on the website, changing the CSS within the content-box class will make a ton of changes.
 */
export const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
    return <div className="content-box">
        {children}
    </div>
}