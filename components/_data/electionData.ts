/** 2019 officer images */
import _2019_alejandro from "../_assets/electionsImages/2019/alejandro.jpg";
import _2019_william from "../_assets/electionsImages/2019/williamkwok.jpg";
import _2019_casey from "../_assets/electionsImages/2019/caseytran.jpg";
import _2019_godgiven from "../_assets/electionsImages/2019/godgiven.jpg";
import _2019_shruti from "../_assets/electionsImages/2019/shrutir.jpg";
import _2019_allison from '../_assets/electionsImages/2019/allison_lee.jpg';
import _2019_dayoung from '../_assets/electionsImages/2019/dayoung.jpg';
import _2019_kiran from '../_assets/electionsImages/2019/kiran.jpg';

/** 2018 officer images */
import _2018_andrea from '../_assets/electionsImages/2018/andrea_chen.jpg'
import _2018_anton from '../_assets/electionsImages/2018/anton_zheng.jpg'
import _2018_cole from '../_assets/electionsImages/2018/cole_french.jpg'
import _2018_joseph from '../_assets/electionsImages/2018/joseph_tsai.jpg'
import _2018_katie from '../_assets/electionsImages/2018/katie_goulding.jpg'
import _2018_kidus from '../_assets/electionsImages/2018/kidus_sendeke.jpg'
import _2018_mano from '../_assets/electionsImages/2018/mano_barkovics.jpg'
import _2018_neha from '../_assets/electionsImages/2018/neha_yadav.jpg'
import _2018_oorja from '../_assets/electionsImages/2018/oorja_chowdhary.jpg'

/** 2017 officer images */
import _2017_alex from '../_assets/electionsImages/2017/alex-gilbert.jpg';
import _2017_brendan from '../_assets/electionsImages/2017/brendan-kellogg.jpg';
import _2017_chris from '../_assets/electionsImages/2017/chris-oh.jpg';
import _2017_davin from '../_assets/electionsImages/2017/davin-lee.jpg';
import _2017_ethan from '../_assets/electionsImages/2017/ethan-anderson.jpg';
import _2017_jessica from '../_assets/electionsImages/2017/jessica-libman.jpg';
import _2017_rosemary from '../_assets/electionsImages/2017/rosemary-adams.jpg';
import _2017_sanjana from '../_assets/electionsImages/2017/sanjana-galgalikar.jpg';
import _2017_daniel from '../_assets/electionsImages/2017/daniel-hoang.jpg';

/** 2016 officer images */
import _2016_belltowne from '../_assets/electionsImages/2016/alexander-bell-towne.jpg';
import _2016_leeds from '../_assets/electionsImages/2016/benjamin-leeds.jpg';
import _2016_holland from '../_assets/electionsImages/2016/brad-holland.jpg'
import _2016_han from '../_assets/electionsImages/2016/jenna-han.jpg'
import _2016_li from '../_assets/electionsImages/2016/jonathan-li.jpg';
import _2016_dietzler from '../_assets/electionsImages/2016/natasha-dietzler.jpg';
import _2016_le from '../_assets/electionsImages/2016/royce-le.jpg';
import _2016_patel from '../_assets/electionsImages/2016/rutvi-patel.jpg';

/** 2015 offcers images */
import _2015_sebring from '../_assets/electionsImages/2015/Sebring.jpg';
import _2015_amaral from '../_assets/electionsImages/2015/Amaral.jpg';
import _2015_mcdonough from '../_assets/electionsImages/2015/Harry.jpg';
import _2015_yan from '../_assets/electionsImages/2015/Yan.jpg';
import _2015_woehrle from '../_assets/electionsImages/2015/Austin.jpg';
import _2015_watson from '../_assets/electionsImages/2015/Watson.jpg';
import _2015_munn from '../_assets/electionsImages/2015/Munn.jpg';
import _2015_lopez from '../_assets/electionsImages/2015/Lopez.png';
import _2015_thirumalai from '../_assets/electionsImages/2015/Thirumalai.jpg';
import _2015_hama from '../_assets/electionsImages/2015/Hama.jpg'

import { Officers } from "./homePageData";

type ElectionCandidate = {
	name: string,
	elected?: boolean,
	image: string,
	video: string,
	statement: string
}

type ElectionYear = {
	[idx: string]: ElectionCandidate[]
}

type Elections = {
	[idx: number]: ElectionYear
}

export const IUGA_ELECTIONS_ORDER_PRIORITY = [
	Officers.PRESIDENT,
	Officers.VICE_PRESIDENT,
	Officers.FINANCE,
	Officers.CREATIVE,
	Officers.PUBLIC_RELATIONS,
	Officers.OUTREACH,
	Officers.DIVERSITY,
	Officers.IT,
	Officers.ACADEMIC,
	Officers.OPERATIONS
]

export const IUGA_ELECTIONS: Elections = {
	2015: {
		[Officers.PRESIDENT]: [
			{
				name: "Daniel Sebring",
				elected: true,
				image: _2015_sebring,
				video: "https://www.youtube.com/embed/FQtWwfO0jAg",
				statement: "I'm accepting the nomination for the role of president because there's nothing more important to me than Informatics and the Informatics family.  The exceptional students, professors, and staff mean so much to me and I want to do anything I can to further improve our status at UW and in the local tech community, while working to keep up the tradition of bringing the major closer together for a more enriching college experience and connections that extend beyond our limited time in school.  I want to keep up the good work and build on the foundation laid by our fantastic current executive board, and make sure the Informatics program grows even more relevant, more useful, and of course- more fun.  Thank you."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Allison Amaral",
				elected: true,
				image: _2015_amaral,
				video: "https://www.youtube.com/embed/QaN97InTdgo",
				statement: "Just a short two weeks ago, I celebrated the anniversary of the day I fell in love with Informatics- Winter Quarter Game Night of my sophomore year. That night planted the seed in my head that not only did I have to join this wonderful group of people, but I also knew that I wanted to be the voice of everyone from the dedicated designer to the peppy PM. So at my first opportunity, I applied to be a First Year Representative and was absolutely thrilled to get a chance to have a step in that direction. As I met more people, even though I had been excited about the major before, I came to not only see how great it was, but also how much potential this group of people had. We’re the future of technology, and carry some of the most passionate designers, developers and thinkers out there. As Vice President, I know it would be my duty to not only foster this talent in our major, but also to show everyone else at UW, Seattle and the tech field what amazing things we will bring to the table. I plan on delivering this in a few ways first and foremost by focusing on freshman-oriented events. For example, Informatics info sessions and panels advertised in classes that freshman who are interested in tech related fields but may not yet have direction would attend. Also, working together with other tech fields (yes, even CSE) to create a presence to lost freshmen who haven’t found us yet. Additionally, to bring the greater community in, I plan on using some connections I have built at Microsoft from my internships, and establishing a list of connections of those within our major to create events to teach businesses we are exactly what they have been looking for all of these years. I am honored to accept my nomination for Vice President of IUGA, and look forward to getting the chance to surprise you guys day in and day out with what I plan on bringing to the table. Thank you."

			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Vikram Thirumalai",
				image: _2015_thirumalai,
				video: "https://www.youtube.com/embed/Pbc7i9bMkV8",
				statement: "I want to hold this position because I honestly love the ischool and I always wonder how I can use my skills to benefit the school and my peers. I am very good at planning events with my friends and connecting the group together, and I believe I would be able to communicate announcements with the association very well and represent the school very well. This being said I can also coordinate the social events for the ischool from my skills doing this as vice president of the rocketry club in High School, i mean its not rocket science (HA HA). I already know a few individuals I would elect for my marketing team to make sure the ischool maintains its brand and keeps a good social media presence. I think i would be good at this because my organization and time management skills will be put to good use being on the board of IUGA. The most important reason I feel like i would be a good fit for this position is that I am sociable and love meeting people, especially informatics students and as a director of public relations I am sure it will be necessary to have many conversations with those in my cohort and in the year below me and my motivations come from my natural interests in the department."

			},
			{
				name: "Kevin Yan",
				elected: true,
				image: _2015_yan,
				video: "https://www.youtube.com/embed/RYM6se1kxHE",
				statement: "Last quarter, I ran for the first year representative position with one goal: to be the bridge between incoming first years and the Informatics community. This quarter, I am running for Director of Public Relations with greater goals in mind: to unify our major as a family and make our years here a time to remember. I know I’m not alone when I say that two of the best parts of being in informatics (excluding my raps) are the awesome IUGA swag sales and the many events we host so that we can interact and bond. As a candidate for the Director of PR, I understand just how important our brand and our events are to the major. I also understand that to be able to represent us, I must have your interests and feedback in mind. To accomplish this, I plan to assemble and lead a marketing team comprised of our finest with the purpose of designing sick new swag (that awesome scarf, anyone?). Likewise, IUGA events will be open to suggestion and heavily influenced by popular demand (mint chip ice cream is king). The truth is, after only a quarter and a half of being in major, I genuinely know that the iSchool is much more than just our school; it’s our home. The people I’ve met and the experiences I’ve had thus far are priceless, and I would love nothing more than to share these moments and create new ones with the rest of the major and next year’s cohort. I am Kevin Yan, and I sincerely hope that you put your faith in me to make our time unforgettable; I won’t let you down."
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Jason Hama",
				image: _2015_hama,
				video: "https://www.youtube.com/embed/qfEipt0yN5c",
				statement: "I believe that I would make a good director of finance because I have a bit of experience with finance from an accounting course.  I have good organizational skill to help get all of my duties done. But most of all I would like to try this new experience and benefit IUGA."
			},
			{
				name: "Harry McDonough",
				elected: true,
				image: _2015_mcdonough,
				video: "https://www.youtube.com/embed/QaCVo5rb06w",
				statement: "When I applied to the Informatics program last year, what I looked forward to the most was joining the iSchool community. For me, the major has always meant much more than just a degree. It’s an opportunity to come together with my classmates to create something unforgettable. IUGA has been a great facilitator for these connections. From the networking nights to the game nights to the first year events, I’ve been able to meet and spend time with some great people. Additionally, working as a first year representative has given me experience planning these events and appreciation of them.\nIt is because of these experiences that the Director of Finance isn’t just a position to me— it’s a commitment. Not only to maintaining the financial accounts of IUGA, but to continue building the iSchool community. I want to work with the Director of Public Relations to consistently provide as many opportunities to IUGA members as possible. More iSchool apparel orders, career information sessions and after school events are all on my list. I also want to coordinate with the Director of Outreach to fiscally secure these events through outside sources. Getting company sponsors for game nights, guest speakers for our information sessions, and company tours are all ways I want to continue to extend the breadth of opportunities that IUGA provides. The chance to manage IUGA’s budget and fundraising efforts offers ways to promote growth in my community, something I am passionate about. I don’t want this position to just count numbers on a spreadsheet—I want it to count numbers that matter. Numbers, ledgers and estimates that let us come together and continue to build on the amazing environment we have at the iSchool."
			}
		]
	}
}