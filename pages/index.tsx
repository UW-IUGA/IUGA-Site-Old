import React from 'react';
import { ContentBox } from '../components/ContentBox/ContentBox';
import { homePageData } from '../components/_data/homePageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../pageStyles/index.css";
import Link from 'next/link';

const IndexPage: React.FC = () => {
    const {
        blurbTitle,
        blurb,
        socialMediaTitle,
        socialMedia,
        // membershipBlurb
    } = homePageData;
    return <>
        <h1>{blurbTitle}</h1>
        <ContentBox>
            <p>{blurb}</p>
        </ContentBox>
        <h1>{socialMediaTitle}</h1>
        <ContentBox>
            {socialMedia.map(socialMediaIcon => {
                return <Link href={socialMediaIcon.link}>
                    <a>
                        <div className="container d-flex align-items-center social-container">
                            <div><FontAwesomeIcon icon={socialMediaIcon.icon} size={"2x"}
                                fixedWidth
                                className={"social-icon"} /></div>
                            <div className={"social-title"}>
                                {socialMediaIcon.title}
                            </div>
                        </div>
                    </a>
                </Link>
            })}
        </ContentBox>
    </>
}



export default IndexPage;