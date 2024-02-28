import React, { useState } from 'react';
import { CURRENT_YEAR_ELECTIONS } from '../components/_data/constantsToChangeEachYear';
import { ElectionGroup, IUGA_ELECTIONS, WINFO_ELECTIONS, IUGA_ELECTIONS_ORDER_PRIORITY } from '../components/_data/electionData';
import { Officers } from '../components/_data/homePageData';
import '../pageStyles/elections.css';

type ElectionsPageProps = {
	year: string
}
const ElectionsPage: React.FC<ElectionsPageProps> = () => {
	const [year, setYear] = useState<number>(CURRENT_YEAR_ELECTIONS);
	const [electionGroup, setElectionGroup] = useState<ElectionGroup>(ElectionGroup.IUGA);
	const [roleGroup, setRoleGroup] = useState<Officers>(Officers.PRESIDENT);
	const [candidate, setCandidate] = useState<number>(0);

	const elections = electionGroup === ElectionGroup.IUGA ? IUGA_ELECTIONS : WINFO_ELECTIONS;
	const yearsReverse = Object.keys(IUGA_ELECTIONS).sort().reverse();

	const selectedPerson = elections[year][roleGroup][candidate];
	return <>
		<div className="d-flex">
			<select value={year} onChange={(e) => {
				setElectionGroup(ElectionGroup.IUGA);
				setYear(Number((e.target as any).value));
				setRoleGroup(Officers.PRESIDENT);
				setCandidate(0);
			}}>
				{yearsReverse.map(yearOption =>
					<option>{yearOption}</option>
				)}
			</select>
			<div className="d-flex justify-content-center elections-selector" style={{ marginLeft: 10 }}>
				<div className="row">
					<div className="col">
						<a href="#" className={`elections-link ${electionGroup === ElectionGroup.IUGA ? "elections-link-active" : ""}`} onClick={() => { setRoleGroup(Officers.PRESIDENT); setElectionGroup(ElectionGroup.IUGA); setCandidate(0); }}>IUGA</a>
					</div>
					{year in WINFO_ELECTIONS && <div className="col">
						<a href="#" className={`elections-link ${electionGroup === ElectionGroup.WINFO ? "elections-link-active" : ""}`} onClick={() => { setRoleGroup(Officers.PRESIDENT); setElectionGroup(ElectionGroup.WINFO); setCandidate(0); }}>WINFO</a>
					</div>}
				</div>
			</div>
		</div>
		<div className="header-spacer"></div>
		<div className="d-flex elections">
			<div className="col-md-3 col-lg-3 col-xl-3">
				<h2>{year} {electionGroup} Candidates:</h2>
				{IUGA_ELECTIONS_ORDER_PRIORITY.map(priority => {
					return elections[year] && elections[year][priority] ? <div key={`${year}${priority}`}>
						{priority}
						<ul>
							{elections[year][priority].map((people, index) =>
								<li key={people.name}>
									<a href="#"
										className={`elections-link 
										${roleGroup === priority && candidate === index ?
												"elections-link-active" : ""}`}
										onClick={() => {
											setRoleGroup(priority);
											setCandidate(index);
										}}
									>{people.name}
										{people.elected ? <span className="elections-elected-appointed"> - Elected</span> : ""}
										{people.appointed ? <span className="elections-elected-appointed"> - Appointed</span> : ""}
									</a>
								</li>
							)}
						</ul>
					</div> : <></>
				})}
			</div>
			<div className="col-md-9 col-lg-9 col-xl-9">
				<h2>{roleGroup}</h2>
				{selectedPerson.adminMessage && <p className="admin-message">Admin message: {selectedPerson.adminMessage}</p>}
				<img src={selectedPerson.image} alt={selectedPerson.name} className="election-image" />
				{selectedPerson.statement.split("\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
				{selectedPerson.linkToPortfolio && <p className="portfolio-link"><a href={selectedPerson.linkToPortfolio}>Link to portfolio</a></p>}
				{selectedPerson.extraImage && <div className="election-wrapper"><img className="elections-extra-image" src={selectedPerson.extraImage} alt={`${selectedPerson.name} infographic`} /></div>}
				{selectedPerson.pdf && <div className="election-wrapper"><embed className="embededFrame" src={selectedPerson.pdf+"#view=FitV"} type="application/pdf" /></div>}
				{selectedPerson.video && <div className="election-wrapper"><iframe src={selectedPerson.video} className="election-iframe"></iframe></div>}
			</div>
		</div>
		<div className="spacer"></div>
	</>
}

export default ElectionsPage