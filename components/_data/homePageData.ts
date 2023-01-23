import { faInstagram, faFacebook, IconDefinition } from '@fortawesome/free-brands-svg-icons';

/**
 * Make sure when you upload the images, they are square, and small in terms of file size.
 * 
 * We run it through squoosh to condense file sizes
 * 
 * https://github.com/UW-IUGA/IUGA-Site/wiki/5.-Good-practices
 */

 import _brianna from '../_assets/electionsImages/2022/brianna.jpg';
 import _devina from '../_assets/electionsImages/2022/devinaTavathia.jpg';
 import _drew from '../_assets/electionsImages/2022/drewFavors.jpg';
 import _justin from '../_assets/electionsImages/2022/justinZeng.jpg';
 import _phyllis from '../_assets/electionsImages/2022/phyllischen.jpg';
 import _pranav from '../_assets/electionsImages/2022/pranavshekar.jpg';
 import _sachi from '../_assets/electionsImages/2022/sachiFigliolini.jpg';
 import _sarah from '../_assets/electionsImages/2022/sarahThomas.jpg';
 import _sirena from '../_assets/electionsImages/2022/sirenaakopyan.jpg';
 import _fyr1 from '../_assets/electionsImages/2022/fyr1.jpg';
 import _fyr2 from '../_assets/electionsImages/2022/fyr2.jpg';

/**
 * Use these officers enumerates below when you define them and the associated role.
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
export enum Officers {
	PRESIDENT = "President",
	COPRESIDENT = "Co-President",
	VICE_PRESIDENT = "Vice President",
	FINANCE = "Director of Finance",
	CREATIVE = "Creative Director",
	PUBLIC_RELATIONS = "Director of Public Relations",
	OUTREACH = "Director of Outreach",
	DIVERSITY = "Director of Diversity Efforts",
	IT = "Director of Information Technology",
	ACADEMIC = "Director of Academic Support",
	OPERATIONS = "Director of Operations", // This was an old role
	HACKATHON_DIRECTOR = "Hackathon Director", // This is for WINFO Hackathon Director in specific
    COMMUNITY_EFFORTS = "Director of Community Efforts" // WINFO-specific
}

type SocialMediaIcons = {
	title: string,
	link: string,
	icon: IconDefinition
}

export type OfficerInfo = {
	position: Officers,
	name: string,
	picture?: string,
	github?: string,
	linkedin?: string,
	website?: string
}

export type FYRInfo = {
	name: string,
	picture?: string,
	github?: string,
	linkedin?: string,
	website?: string
}

type OfficerResponsibilities = {
	description: string,
	responsibilities: string[]
}

type HomePageData = {
	blurbTitle: string,
	blurb: string,
	socialMediaTitle: string,
	socialMedia: SocialMediaIcons[],
	officers: OfficerInfo[],
	membershipBlurb: string,
	positionInformation: {
		[idx: string]: OfficerResponsibilities
	},
	fyrs: FYRInfo[]
}

/**
 * homePageData is all the data that is on the home page.
 * 
 * Includes: 
 *      Main Blurb
 *      Social Media Links and Associated FontAwesome Icon
 *      Officers
 *      Officer position descriptions
 *      Membership blurb
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
export const homePageData: HomePageData = {
	blurbTitle: "What is IUGA?",
	blurb: "We are the Informatics Undergraduate Association. We are an RSO that acts as the student government for Informatics students. We communicate between the Informatics student body, faculty, and administration of the University of Washington Information School. We host fun, community building events as well as events for professional development.",
	socialMediaTitle: "Follow us to keep up with all things Informatics!",
	socialMedia: [
		{
			title: "IUGA Facebook Group",
			link: "http://bit.ly/iugafb",
			icon: faFacebook
		},
		{
			title: "Instagram",
			link: "http://bit.ly/iugainsta",
			icon: faInstagram
		}
	],
	membershipBlurb: "Membership eligibility in IUGA is held by matriculated declared Informatics majors as defined by the Information School and the University of Washington. Members must also be in good disciplinary standing as outlined in the Student Code at the University of Washington.",
	officers: [
		{
			position: Officers.COPRESIDENT,
            name: "Justin Zeng",
            picture: _justin,
            github: 'https://github.com/Once28',
			linkedin: "https://www.linkedin.com/in/justin-zeng-3b7b47165/"
		},
		{
			position: Officers.COPRESIDENT,
			name: "Sachi Figliolini",
			picture: _sachi,
            linkedin: "http://www.linkedin.com/in/sachi-figliolini/"
		},
		{
			position: Officers.FINANCE,
			name: "Phyllis Chen",
			picture: _phyllis,
			linkedin: "https://www.linkedin.com/in/phyllis-chen-profile"
		},
		{
			position: Officers.CREATIVE,
			name: "Sarah Thomas",
			picture: _sarah,
            linkedin: "https://www.linkedin.com/in/sarahetthomas/",
            website: "https://sarahthomas.me"
		},
		{
			position: Officers.PUBLIC_RELATIONS,
			name: "Brianna Pak",
            picture: _brianna,
			linkedin: "https://www.linkedin.com/in/briannapak/",
		},
		{
			position: Officers.OUTREACH,
			name: "Sirena Akopyan",
			picture: _sirena,
			linkedin: "https://www.linkedin.com/in/sirena-akopyan-61862221a"
		},
		{
			position: Officers.DIVERSITY,
			name: "Pranav Shekar",
            picture: _pranav,
            linkedin: "https://www.linkedin.com/in/pranav-shekar/",
            website: "http://pranavshekar.com/"
		},
		{
			position: Officers.IT,
			name: "Devina Tavathia",
			picture: _devina,
			linkedin: "https://www.linkedin.com/in/devina-tavathia-40722b167/",
			website: "https://devinat.github.io/PersonalPortfolio/",
			github: "https://github.com/DevinaT"
		},
		{
			position: Officers.ACADEMIC,
			name: "Drew Favors",
            picture: _drew,
			linkedin: "https://www.linkedin.com/in/drewfavors"
		}
	],
	positionInformation: {
		[Officers.PRESIDENT]: {
			description: "The President is the head of IUGA and their responsibilities include:",
			responsibilities: ["Lead IUGA Meetings",
				"Represent Informatics to faculty and staff with the Vice President",
				"Shepherd and guide newly elected IUGA Officers during the annual transition",
				"Act as backup for the Director of Finance for financial matters",
				"Act as, or designate, the Informatics Representative On the iSchool Program Committee",
				"Act as liaison to other iSchool student organizations"]
		},
		[Officers.COPRESIDENT]: {
			description: "The Co-Presidents are the joint heads of IUGA and their responsibilities include:",
			responsibilities: ["Co-lead IUGA Meetings",
				"Assist each other in representing Informatics to faculty and staff",
				"Shepherd and guide newly elected IUGA Officers during the annual transition",
				"Act as backup for the Director of Finance for financial matters",
				"Act as, or designate, the Informatics Representative On the iSchool Program Committee",
				"Act as liaison to other iSchool student organizations"]
		},
		[Officers.VICE_PRESIDENT]: {
			description: "The Vice President fills roles as needed and has core repsonsibilities with which they are entrusted. These core responsibilities include the following:",
			responsibilities: [
				"Backup for the President",
				"Collaborates with the Director of Outreach when communicating with External Groups",
				"Responsible for scheduling bi-weekly meetings",
				"Responsible for booking venues for all IUGA events",
				"Responsible for handling the yearly Registration of IUGA with the SAO",
				"Responsible for the meeting minutes of every IUGA meeting",
				"Act as the Primary Point of Contact for Student Services when dealing with the Informatics Recruitment Process",
				"Fulfill or Designate a student to fill a seat on the iSchool Student Leadership Committee and the Informatics Program Committee"
			]
		},
		[Officers.FINANCE]: {
			description: "The director of finance maintains the Association’s financial records. This includes the following items:",
			responsibilities: [
				"Maintain the Financial Records",
				"Provide Reports On Finances to IUGA",
				"Fulfill or Designate a Student Representative for Informatics on the iSchool Student Leadership Committee",
				"Organize the Financial Vectors of IUGA fundraising efforts",
				"Prepare and Submit the Yearly IUGA Budget to iSchool Administration",
				"Act as the Primary Account Holder for All IUGA Financial Accounts",
				"Handle merchandise ordering and distribution",
				"Help the incoming Director of Finance with the Yearly Budget during Spring Quarter"
			]
		},
		[Officers.CREATIVE]: {
			description: "The Creative Director will work on creating the visual style of the IUGA brand and take initiative in creating and delivering branded items. These responsibilities will include:",
			responsibilities: [
				"Creating merchandise for IUGA, including clothing",
				"Creating informational posters/flyers for IUGA events",
				"Maintain the IUGA logo and design styling",
				"Create a team to help in the creation of Informatics branded items",
				"Assist Finance with ordering and distribution of merchandise"
			]
		},
		[Officers.PUBLIC_RELATIONS]: {
			description: "The Director of Public Relations serves a vital communication role within the Executive Council. These responsibilities Include:",
			responsibilities: [
				"Communicate Announcement and Events to Informatics Students",
				"Lead the Planning and Organization of Social Events",
				"Ensure the Smooth Operation and Execution of All IUGA events",
				"Oversee Elections"
			]
		},
		[Officers.OUTREACH]: {
			description: "The Director of Outreach is responsible for representing both the Informatics Program and the IUGA to the professional community. They do this by:",
			responsibilities: [
				"Working with Students Services and the Career Center to promote employment and professional development events.",
				"Work with Student Services to facilitate alumni relations",
				"Promote Informatics to the University of Washington at Large and the Professional Community Along with the Vice President",
				"Responsible for organizing and executing professional development events for Informatics"
			]
		},
		[Officers.DIVERSITY]: {
			description: "The Director of Diversity Efforts works to promote diversity both within the major and the iSchool. This includes, but is not limited to, the following:",
			responsibilities: [
				"Support and promote activist-oriented RSOs",
				"Organize and promote diversity and inclusion events for the iSchool",
				"Work closely with the Diversity Programs Advisor to ideate and execute diversity initiatives",
				"Support and engage in an active Diversity Committee composed of students, faculty and staff",
				"Fulfill, or appoint a student, to sit on the Informatics Admissions Committee during the summer",
				"Ensure that the events, ideas, and products of IUGA are made with the thought of diversity and inclusion",
				"Collaborate with Student Services and other Registered Student Organizations (RSOs) on campus for diversity and inclusion events",
			]
		},
		[Officers.IT]: {
			description: "The Director of Information Technology helps run the Association’s technology projects and online presence. While providing support when needed. This is done by doing the following:",
			responsibilities: [
				"Maintain and update the IUGA Website and associated websites using the latest web technologies",
				"Monitor and maintain the IUGA gaming servers and associated assets",
				"Maintain all IUGA online account credentials in a secure and scalable system",
				"Manage permissions and security settings for IUGA assets across social networks and collaborative systems",
				"Oversee and run technology aspects of IUGA events, including the quarterly Game Night",
				"Work closely with iSchool IT and the Administration to connect the student body with all available technology and services",
				"Support, Service, and Create Technology solutions for needs within the Association and the iSchool",
			]
		},
		[Officers.ACADEMIC]: {
			description: "The Director of Academic Support is responsible for supporting the academic needs within the Informatics Program. These responsibilities include:",
			responsibilities: [
				"Understand the needs of current students",
				"Organize and promote academic related events",
				"Work closely with other organizations to conduct joint events"
			]
		},
	},
	fyrs: [
		{
			name: "Eric Kim",
			picture: _fyr1,
            linkedin: "https://www.linkedin.com/in/taehyunnkim/"
		},
		{
			name: "Ryan Louie",
			picture: _fyr2,
			linkedin: "https://www.linkedin.com/in/ryan-zi-louie/"
		}
	]
}