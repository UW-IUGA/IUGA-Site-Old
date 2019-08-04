import React from 'react';

type ElectionsPageProps = {
	year: string
}
const ElectionsPage: React.FC<ElectionsPageProps> = ({ year }) => {
	console.log(year);
	return <>
		This page is under construction
    </>
}

export default ElectionsPage