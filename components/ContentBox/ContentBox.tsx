import React from 'react';
import "./ContentBox.css";

type ContentBoxProps = {
    children: React.ReactNode
}

export const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
    return <div className="content-box">
        {children}
    </div>
}