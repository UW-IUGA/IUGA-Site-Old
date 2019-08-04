import React from 'react';
import { headerBarContent } from '../../_data/headerBarContent';
import './HeaderBar.css';

type HeaderBarProps = {
	pathname: string
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ pathname }) => {
	return <>
		<div className="header-bar">
			<h1>{headerBarContent[pathname]}</h1>
		</div>
		<div className="header-spacer"></div>
	</>
}
