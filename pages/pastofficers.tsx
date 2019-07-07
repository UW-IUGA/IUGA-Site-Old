import React, { useState } from 'react';
import { pastOfficersData } from '../components/_data/pastOfficersData';
import { CURRENT_YEAR } from '../components/_data/constantsToChangeEachYear';
import { ContentBox } from '../components/ContentBox/ContentBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../pageStyles/pastofficers.css';

/**
 * PastOfficers shows the past officers.
 * 
 * Last Modified:
 *      William Kwok
 *      July 6, 2019
 */
const PastOfficers: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR - 1);

    let orderedYearsOldToNew = Object.keys(pastOfficersData).sort((a, b) => {
        return Number(a) - Number(b);
    })

    return <>
        <div className="d-flex justify-content-center past-officer-year-selector">
            <div className="row">
                {orderedYearsOldToNew.map(year => {
                    return <div className="col" key={year}>
                        <a href="#"
                            className={`past-officer-year-link 
                                ${Number(year) === selectedYear ?
                                    "past-officer-year-link-active" : ""}`
                            }
                            onClick={() => {
                                setSelectedYear(Number(year));
                            }}>{year}</a>
                    </div>
                })}
            </div>
        </div>
        <div className="row past-officers">
            {pastOfficersData[selectedYear].map(officer => {
                return <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
                    key={officer.position}>
                    <ContentBox>
                        {officer.picture && <img src={officer.picture} alt={officer.name} />}
                        <h4 className="past-officer-name">{officer.name}</h4>
                        <h5>{officer.position}</h5>
                        {officer.github && <a href={officer.github}>
                            <FontAwesomeIcon icon={faGithub} size={"2x"} fixedWidth />
                        </a>}
                        {officer.linkedin && <a href={officer.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} size={"2x"} fixedWidth />
                        </a>}
                        {officer.website && <a href={officer.website}>
                            <FontAwesomeIcon icon={faGlobe} size={"2x"} fixedWidth />
                        </a>}
                    </ContentBox>
                </div>
            })}
        </div>
    </>
}

export default PastOfficers;