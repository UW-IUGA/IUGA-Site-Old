import React from 'react';
import { ContentBox } from '../components/ContentBox/ContentBox';
import { homePageData } from '../components/_data/homePageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../pageStyles/index.css";
import Link from 'next/link';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
/**
 * IndexPage is the home page shown at route "/"
 * 
 * The data for this page can be modified at `../components/_data/homePageData`
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
const IndexPage: React.FC = () => {
	const {
		blurbTitle,
		blurb,
		socialMediaTitle,
		socialMedia,
		membershipBlurb,
		officers,
		positionInformation
	} = homePageData;

	return <>
		<p>This page is currently undergoing some changes. Please excuse any broken images or links!</p>

		<h2>{blurbTitle}</h2>
		<ContentBox>
			<p>{blurb}</p>
		</ContentBox>

		<h2>{socialMediaTitle}</h2>
		<ContentBox>
			{socialMedia.map(socialMediaIcon => {
				return <Link href={socialMediaIcon.link} key={socialMediaIcon.title}>
					<a>
						<div className="d-flex align-items-center social-container">
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

		<h2>Who are your officers? What do they do?</h2>
		<div className="row justify-content-md-center">
			{officers.map(officer => {
				const { position } = officer;
				const officerPositionInfo = positionInformation[position];
				const { description, responsibilities } = officerPositionInfo;

				return <div
					className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"
					key={officer.position}>
					<ContentBox>
						{officer.picture && <img src={officer.picture} alt={officer.name} />}
						<div className="d-flex align-items-center officer-heading">
							<h4 className="officer-name">{officer.name}</h4>
							{officer.github && <a href={officer.github}>
								<FontAwesomeIcon icon={faGithub} size={"2x"} fixedWidth />
							</a>}
							{officer.linkedin && <a href={officer.linkedin}>
								<FontAwesomeIcon icon={faLinkedin} size={"2x"} fixedWidth />
							</a>}
							{officer.website && <a href={officer.website}>
								<FontAwesomeIcon icon={faGlobe} size={"2x"} fixedWidth />
							</a>}
						</div>
						<h5>{officer.position}</h5>
						<p>{description}</p>
						<ul>
							{responsibilities.map((responsibility, index) => {
								return <li key={"resp" + index}>{responsibility}</li>
							})}
						</ul>
					</ContentBox>
				</div>
			})}
		</div>

		<h2>Who are your First Year Representatives? What do they do?</h2>
		<ContentBox>
			<p>Your first year representatives act as a liaison between your cohort and IUGA, become more involved in the iSchool communities, and plan events.</p>
		</ContentBox>
		<div className="row">

		</div>

		<h2>Membership</h2>
		<ContentBox>
			<p>{membershipBlurb}</p>
		</ContentBox>

		<h2>Contact us</h2>
		<ContentBox>
			<p>Have a comment, question, or suggestion?</p>
			<p>Email us at <a href="mailto:IUGA@uw.edu">IUGA@uw.edu</a></p>
		</ContentBox>

		<a href="#" onClick={() => { window.scrollTo(0, 0) }}>↑ back to top</a>
		<div className="spacer"></div>
	</>
}



export default IndexPage;