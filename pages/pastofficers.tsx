import React, { useState } from 'react';
import { pastOfficersData } from '../components/_data/pastOfficersData';
import { CURRENT_YEAR } from 'components/_data/constantsToChangeEachYear';


const PastOfficers: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);

    let orderedYearsNewToOld = Object.keys(pastOfficersData).sort((a, b) => {
        return Number(b) - Number(a);
    });

    let orderedYearsOldToNew = Object.keys(pastOfficersData).sort((a, b) => {
        return Number(a) - Number(b);
    })

    return <>
        This page is under construction
    </>
}

export default PastOfficers;