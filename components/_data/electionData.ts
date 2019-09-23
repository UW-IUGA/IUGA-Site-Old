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
import _2016_pollock from '../_assets/electionsImages/2016/joe-pollock.jpg';
import _2016_sebetich from '../_assets/electionsImages/2016/adam-sebetich.jpg';

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
import _2015_hama from '../_assets/electionsImages/2015/Hama.jpg';
import _2015_perry from '../_assets/electionsImages/2015/Perry.jpg'

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
		],
		[Officers.OUTREACH]: [
			{
				name: "Austin Woerhle",
				elected: true,
				image: _2015_woehrle,
				video: "https://www.youtube.com/embed/UDiTxZGGjcM",
				statement: "I think I would make a great Director of Outreach because I have been part of the informatics/IUGA community since the Summer of 2012. I am extreme passionate about the informatics community as it has provided so many opportunities for me, and I would like to return those opportunities to my peers. My excitement for informatics shows every time I talk about our program. I absolutely love telling people about the things we do and how great of an opportunity the technology world is. I am currently a TA for INFO 101 and in my time (this year and next) I will have had 700+ students that I will interact with. I have had many friends that went through the program and now are working at great companies companies, these are the type of current connections I will leverage. I believe I will be could be an awesome representative of our program to prospective students/alumni/and companies."
			}
		],
		[Officers.OPERATIONS]: [
			{
				name: "Linnea Watson",
				elected: true,
				image: _2015_watson,
				video: "https://www.youtube.com/embed/ykL4VAqhGB8",
				statement: "I believe I would make a great Director of Operations because of my reliability and ability to keep tasks on track. I would love to take responsibility for this position because I believe I would excel at providing stable and trustworthy documentation of IUGAs goals and principles. I am extremely excited to be a part of IUGA, and am looking forward towards adding a honest, dependable, and sincere outlook to the Informatics Undergraduate Association."
			}
		],
		[Officers.IT]: [
			{
				name: "Hiram Munn",
				elected: true,
				image: _2015_munn,
				video: "https://www.youtube.com/embed/j2lMc7_3KkE",
				statement: "I want to be the Director of IT because I want to see IUGA succeed in providing opportunities for students to learn new and useful skills and technologies, and the best way I think I can help make this happen is as the Director of IT. Through my experience as a first year representative I have already worked extensively with the current executive board and the iSchool IT department in getting our organization's website back online and our game night server back up and running. This experience has provided me with valuable insight into the existing technologies currently leveraged by IUGA and I know that in this role I can expand on what is already there. So please think of me for IT and thank you for your time and consideration."
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Jill Lopez",
				elected: true,
				image: _2015_lopez,
				video: "https://www.youtube.com/embed/Z3qvYV4N1fc",
				statement: "Hello! My name is Jill Lopez and I am accepting the nomination for the Director of Diversity Efforts for IUGA. I’m excited to be nominated, especially for an important role such as this.\nThere are a lot of responsibilities involved to being the director of diversity efforts. From planning events to being a part of various committees…however, I believe that the most important responsibility is to help foster diversity and help others engage in diversity-related topics or challenges. The Director of Diversity Efforts is a role full of important duties. All of which I am ready, and excited, to take on. I want to be the Director because I want to be at the forefront of helping foster diversity within the Informatics. I would like to be part of group that can create and implement changes that ensure that our school is full of students from different backgrounds. This role is most than just being part of a student organization. For me, this role is about creating an environment where everyone feels valued and supported and help create opportunities for others.\nI would be a good fit for this role for various reasons. I am part of the Information School’s Diversity Committee Board. Being a part of this board has exposed me to several insights on how much work is involved to plan events, what kinds of events the committee wants to do, and how to create events that will be educational for everyone. Most importantly, this board has showed me how diversity can help us become more open and learn new perspectives from others.\nSecond, I am a volunteer at the Ethnic Cultural Center at the UW campus. I help create boards surrounding the issues of social justice and create resources for cultural RSOs to use in many of their workshops. Lastly, I currently work as a Human Resources student assistant on campus. On a day-to-day basis, I get to communicate with students from various backgrounds and help them get jobs on campus. I have learned that when you help create opportunities at an individual level, it can leave a lasting impression on that person. That being said, I would like to dedicate my time and my skills and apply it as your new Director of Diversity Efforts.\nIf given the opportunity to be the new Director of Diversity Efforts, I will support my peers and prospective students to become successful individuals."
			},
			{
				name: "Perry Lin Meas",
				image: _2015_perry,
				video: "https://www.youtube.com/embed/OlNYUB08CT4",
				statement: "I seek to serve as Director of Diversity Efforts to address the growing concern of a lack of integration between existing diversity-focused groups and IUGA toward including diverse views and perspectives within our growing Informatics community. Supporting a diverse body of iSchool students will reaffirm that we represent the intersection of information, technology, and above all: people.\nEngaging with Women in Informatics (WINFO), iQueeries, and iEquality will be one of my primary steps to help shape the iSchool as an integrated force for advancing the equity, the voice, and the representation of underserved and historically excluded communities. As an ally, I aim to ensure the iSchool as a safe intersectional space for LGBTQQ students, students of color, and students of diverse ability. Expanding diversity-focused events and workshops aimed at creating a visible and vocal community of students from these communities will be of utmost concern. I hope to leverage my experience in AES (American Ethnic Studies), my organizing activities as secretary of the HCDE Student Association, and my experiences in America as a person of color to passionately engage and organize diversity efforts at the iSchool. In addition to supporting current students, I aim to strengthen community outreach efforts for prospective students interested in Informatics who are from underserved communities. Creating an environment where all feel welcome to pursue the study of Informatics will reflect our confidence as a school working at the leading-edge of the study of information, technology, and people."
			}
		]
	},
	2016: {
		[Officers.PRESIDENT]: [
			{
				name: "Jonathan Li",
				elected: true,
				image: _2016_li,
				video: "https://www.youtube.com/embed/9l1almBf-eI",
				statement: "Receiving my acceptance letter into Informatics was a dream come true; I love technology, but more importantly, I love people. As I’m sure many people are aware of, Informatics has an absolutely amazing community. The current IUGA executive board has done a great job thus far welcoming the new cohort, maintaining the strong relationship with the iSchool faculty and staff, and planning events for the student body.\nI want to be the next IUGA president because ever since I first heard of Informatics, I was hooked. Attending the events as a prospective student really further confirmed that this was the right program for me. I got to learn about the different opportunities within the major, and I realized how interested I was in cybersecurity and data science. With our community, we can establish lasting and meaningful connections.\nThe IUGA president must be able to represent the Informatics major, both to prospective students and as liaison between the iSchool faculty, staff, and students. As a TA for INFO 200, I already love representing the major to students who are interested. I will never pass up the opportunity to talk about how fantastic our program is, especially because of how great our faculty and cohort are.\nInclusiveness is another primary focus of mine; while community is important, it is more important to ensure diversity and that every member within the community feels valued. As president, I’ll do my best to build upon the current efforts being made by collaborating with the many diversity groups at the iSchool and the UW community as a whole."
			},
			{
				name: "Joe Pollock",
				image: _2016_pollock,
				video: "https://www.youtube.com/embed/6NCNN2At7H0",
				statement: "My name is Joe Pollock and I am running to be the next President of IUGA.  Many of you already know me, and know that I am passionate about and dedicated to our major and community.\nI came into UW as an intended Mechanical Engineering major. I quickly learned this wasn’t the right path and transitioned to Business. Soon thereafter, I discovered Informatics and fell in love. I switched my track immediately, and the rest is history.\nI love that our community is really more like a family - and I want our family to grow.  I want more involvement from prospective students and alumni.  I want more diversity in thought and background for us to gain a broader perspective, because that is exactly what drives us - understanding and helping others.\nBeing president is all about bringing people together.  I want to unite us by creating opportunities for all of us to interact and do what we love. This can happen in any event or forum, whether it’s for philanthropy, fun, and professional development!\nI want to plan and host a charity-focused hackathon where we donate our time and code for a cause.  If you are also passionate about this idea, check out this website: http://donatecode.com/.\nI want to bring my iSchool family (#inFam anyone?) together at a Seattle sports game. Picture us at the next Mariners game, with the sun out, all sharing garlic fries, and talking about Greg Hay.\nI want to have an event which brings our current students and alumni together. We can meet in a casual setting to discuss careers, professional development, and Greg Hay.\nI will work to make your fantastic ideas a reality.  A vote for me is a vote for family, creative ideas, and fun."
			},
			{
				name: "Adam Sebetich",
				image: _2016_sebetich,
				video: "https://www.youtube.com/embed/HiLwEAm63UA",
				statement: "Hello! My name is Adam Sebetich, and I am a caffeine-dependent person. I grew up in a small town about an hour south called Lacey. My mother is from Korea, and my father is from Pennsylvania. I was born at a very young age and fortunately, I have been a Washington resident since I was 5! In my spare time, I enjoy running, playing league of legends or Call of Duty, and shopping for food.\nWith a few years of working retail and other odd jobs, I have been able to focus on the customer relationship side of the work industry. After leaving high school, I worked as a lead instructor for Coding With Kids during my freshman year. That position gave me the opportunity to teach the fundamental concepts of Java programming to various elementary school students by using the program called “Scratch”. After that position, I moved to being an Orientation Leader for this past summer. In the OL position, I helped introduced hundreds to thousands of incoming students to the UW campus with a team and worked extensively to help make sure they knew every resource possible. After this previous summer, I started as an Intern working for CDW. In that position, I conversed and worked with IT directors in all of the UW departments to help integrate technology to help in any way possible.\nI am passionate about inclusion, diversity, and leadership development. Currently I am studying Informatics (like all of you) and am focusing in Information Assurance & Cyber security! You will come to find that I laugh at awkward moments and thoroughly enjoy my puns intended. In my past experiences I’ve learned that I really do enjoy helping people and want to push that mindset into my post-graduation employment in hopes to better this community!"
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Rutvi Patel",
				elected: true,
				image: _2016_patel,
				video: "https://www.youtube.com/embed/ofO7fMOSjr8",
				statement: "My campaign for Vice President of iuga is all about keeping us a close-knit group of people even as our program is growing, and also in having experience in the detail-oriented work that goes into this job.  As VP, I'd really like to incorporate more collaboration with WINFO, and the other iSchool groups like iQueeries and iEquality. We've got so many great events already happening, and coming together would be very valuable for us as a student body, and also for prospectives interested in a diverse community.\nI’m excited to get to know more of our cohort, and to welcome the new first years. I've also been wondering lately if campaign slogans are still cool, but that's a story for another sentence. So is a vote for me a vote for a highly collaborative, hardworking, and effective Vice President? Abso-rutvi it is."
			},
			{
				name: "Sam Wahbeh",
				image: _2016_wabbeh,
				video: "https://www.youtube.com/embed/g1W6R-A_yxI",
				statement: "Hello everyone, my name is Sam Wahbeh, a first year here in the Informatics program. I'm running for Vice President, because I believe that it is our duty as first years to continue the tradition of being the best major here at the University of Washington. As VP I plan on helping not only my fellow students that are also IUGA officers, but those who aren't as well. That in order to make INFO even greater, we must work together and support our fellow students. Kind of like how Caleb helps everyone with their hw. Bless up Info and vote for Sam 2016-2017!"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Parker Duvall",
				image: _2016_duvall,
				video: "https://www.youtube.com/embed/pXJ7y87cpUU",
				statement: "I am accepting the nomination for Director of Public Relations because one of my favorite things to do is help bring people together. I’m extremely outgoing and I’m happiest when I’m socializing with my peers. The main purpose of this position is to promote and organize social events and I would have so much fun doing it. I can’t even begin to explain what impact Informatics has had on my life. I would not have been able to get into this program if it wasn’t for the social events and activities that are open to all Informatics students and prospective students alike. I love this community so much and even though I am only in my second quarter of (officially) being a part of this community, so many of you have already impacted my life. I love being a part of this family or “INFam” as several of us have started referring to us as. Our community is such a welcoming one and we have our previous IUGA officers to thank for that. I want to continue this love train into the next generation of prospective, newly admitted, and current members of our family. After all, one of the main facets of Informatics is People. That is what makes our major so unique. I am Parker Duvall and you can bet your anus that I will do everything in my power to further strengthen our Informatics family. Thank you so much for considering myself for this position; I look forward to getting to know all of you!"
			}
			{
				name: "Brad Holland",
				elected: true,
				image: _2016_holland,
				video: "https://www.youtube.com/embed/I8bpkVqxBPE",
				statement: "Hi! My name is Brad and I would love to be your Director of Public Relations. Extracurricular events are a big deal here in the informatics program. Who can deny the success of our Emmy award-winning reality game show \"Who's Pull Request Is It Anyway?\", or the metronome-level dependability of Friday night burger outings? Regardless of whether that first one exists or not, you can count on me to implore Scott about the possibility.\nYou see, IUGA organizes a lot of fun events for students to enjoy when they're not busy crying about CSE 373. The issue is that a very small percentage of our student body actually attends! Instead of catering to a small group of regulars, I will focus on growing our community to include more INFolks. Reader: I need your support, and I would love your vote. You are what makes this the best major on campus."
			},
			{
				name: "Boris Pavlov",
				image: _2016_pavlov,
				video: "https://www.youtube.com/embed/OU_lz-tJox4",
				statement: "In my mind what separates Informatics from other majors on campus, and IUGA from other student government organizations, is community. Our community is unique in its inclusiveness, engagement, fun, and creativity. I have yet to meet a single Info major, or even prospective, that wasn’t excited and enthusiastic about contributing towards making Informatics great. As Info 200 TA, i’ve meet hundreds of prospectives and incoming students, and from attending and even hosting Info events i’ve gotten to know many of the current and former Info majors. The one common thread amongst them all is a personal drive to make things better, more fun, and more engaging.\nThe most important thing i’ve learned from this positive community environment, is that it is not an accident. Behind the scenes there are many organizers, many people putting up money, time, energy, and their reputations on the line to make sure that the stage is set for a positive community. Specifically, it’s the relentless drive of a few individuals determined to make sure that stage is set, that guarantees that the core driver of a positive community isn’t dissolved and slowly phased out. Recognition of this, and a personal drive to be the spearhead in driving the positivity and engagement of the community, is why I want to be Director of PR. A great community happens when someone makes it happen, I want to be that someone, I want to both continue the tradition of Info being a fun place to be, and make it better than it ever was before."
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Natasha Dietzler",
				elected: true,
				image: _2016_dietzler,
				video: "https://www.youtube.com/embed/ZDVpCUqwoso",
				statement: "The day that I was admitted into the Informatics program was one of the greatest moments in my life, and I am truly grateful for every opportunity that this major has given me. I would love the chance to give back as your Director of Outreach by planning professional events and maintaining alumni relations.\nMy current job title is Event Coordinator. I literally plan events to put food on my table. I am accustomed talking to recruiters, so reaching out on behalf of the Informatics community is a logical step for me. I know I would be a great bridge between the iSchool and professionals because of my skill set and my ability to convey to employers the value of Informatics. This community has helped me in so many ways, and I want the opportunity to return the favor.\nI have a debt of gratitude to Informatics alumni. I discovered Informatics on the off chance by meeting a past graduate. Their passion got hooked on the major and the people. All the pieces of the puzzle really fell together when I found Informatics, and I would love to help support the community by reaching out to alumni in the same way that they reached out to me.\nI know how to plan professional events, and I can communicate the value that Informatics can offer employers. Working alongside Student Services and reaching out to companies and alumni would be a privilege. Let me put my best foot forward and take on the role of your Director of Outreach. I am not just running for the fun of it; I am running because my heart is in it."
			},
			{
				name: "Soichi Tanabe",
				image: _2016_tanabe,
				video: "https://www.youtube.com/embed/nWDSFARJKWM",
				statement: "Hi IUGA, my name is Soichi and I am running for outreach. I want to be outreach to connect with more of you guys and get more of you involved with the IUGA events. I believe networking is the key so I want to reach out internally too so more of you can come out to our events and I’ll create an opportunity for you to network with other Info students as well as other businesses that I will reach out to.\nWhat does IUGA and INFO mean to me? I’d say it’s like taking a blender, putting in challenges and support, and mixing the two together to create an experience that helps you really learn and grow as a person. What do I mean? Well the classes will spank you outside your comfort zone and catapult you into this new area you were too scared to explore before. But by taking risks, you can reach a lot of accomplishments that you didn’t think you were capable of doing before. Now there are going to be times when these challenges get harder and harder and life just uppercuts you in the throat and you get knocked down. But when I do get knocked down, I know there’s always going to be a teammate who runs back for me and reaches his or her hand out to pick me back up. This supportive atmosphere is what Informatics is to me. I remember when I just got into Informatics, Austin Woehrle approached me from behind and he whispered in my ear, “Success is not about competing with others, it is about working together to create something better.” That is the attitude I want to bring in and spread when I become outreach."
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Benjamin Leeds",
				elected: true,
				image: _2016_leeds,
				video: "https://www.youtube.com/embed/ULy_19jzHhE",
				statement: "Hello INFO! I am running for Director of Finance because of how much the Information School community means to me. The first thing I heard about the Informatics program was how supportive the community of students, faculty, and staff is. As I attended information sessions, essay workshops, capstone, and IUGA game night I saw first hand we have a special community that, among other things, sets us apart from other programs.\nAs a transfer student from the University of Colorado Boulder (CU) our community has made me feel welcome at the iSchool and helped eased my transition to a new university. While at CU I had the privilege of serving on the University of Colorado Student Government (CUSG) as the Speaker of the Representative Council. CUSG is unique in that students leaders are responsible for and have final say over allocating and managing a yearly budget of thirty six million dollars to operate student funded programs and services. As a representative I participated in these budget processes and advocated for funding for student programs that supported underrepresented student groups and fostered diversity on the CU campus. In addition to my experience on CUSG, in my time between schools I have had the amazing experience of founding my own IT Consulting company. There I help clients organize their finances by communicating with their accountants and bookkeepers directly to implement accounting systems that provide all those involved the information they need to keep the company's books up to date.\nAs Director of Finance I look forward to contributing my business and leadership experience to further IUGA's goals, learning about what makes the Information School community so strong, and to meeting each of you."
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Royce Le",
				elected: true
				image: _2016_le,
				video: "https://www.youtube.com/embed/N9Ghfd8pYGQ",
				statement: "Hi everyone!\nMy name is Royce Le and I believe in empowering individuals to make a difference. Ever since I was a young lad, I had the innate knowledge of caring and helping others. My natural tendencies to help others solidified as I grew and as I learned about the sacrifices my parents made to escape Vietnam in order to give me a better life. Inspired by their stories and selflessness, I worked hard to be an asset to my communities by holding positions such as library helper, tutor for youth, patrol member, member of National Honor Society, and more. From being a first generation college student, being exposed to adversity because of my family culture, and from interacting with so many diverse groups of people, I know that I, Royce, will be the voice and helping hand for anyone who ever feels or have felt underrepresented or underappreciated in the Informatics community. I have made the choice to choose love and to choose to see the best in situations, in people, and to try and bring the incandescent potential out of everything. My parents always said “Bắt cá hai tay”! Which translates to you catch fish with two hands. So I have always dared myself to never take for granted the opportunities that my parents gave me, and here and now I will dare the Informatics community to find out what is their fish, what are they hungry for, and challenge them to reach out with both hands, through the roaring river of adversity and emerging out the river with hands held high, scathed, exhausted, and victorious.\nI hope you that you strongly consider Royce Le for the Director of Diversity, thank you.\nRoyce Le"
			},
			{
				name: "Mina Tari",
				image: _2016_tari,
				video: "https://www.youtube.com/embed/sKZBoOvmthI",
				statement: "Mina is pursuing a dual degree in Informatics and Gender, Women, and Sexuality Studies, with a minor in Diversity, and, because she’s a glutton for punishment, is also attempting College Honors for each degree.\nHer goals as Director of Diversity efforts is to focus on outreach for those unaware of the variety Informatics offers. To Mina, Informatics and IUGA are places to emphasize learning from each other, inclusive knowledge for the community by the community. As a child of immigrants, Mina understands the difficulties of understanding foreign cultures and hopes to welcome diverse audiences through hosting guest panels, workshops, and open discussions. She also knows how weird it is to learn English from TV and wonder why people look at you funny when you say “y’all” in the Pacific Northwest.\nBecause of her curious (read: indecisive) nature, Mina’s studied in several fields that have given her the fundamental skills in spouting fun facts at parties. She’s worked as a TA in honors, psychology, and GWSS courses, a software engineer intern, in administration for activist clubs and nonprofits, and currently as a writing tutor.\nMina’s research is focused on increasing participation of underrepresented identities in STEM. She performs hecka metadata research to analyze Informatics practices in order to suggest more inclusive techniques. She’s also studied abroad in Rome and Amsterdam, looking at strategies of immigrant integration in a global context.\nMina’s greatest accomplishments include being fluent in chicken-clucking, borrowing a pen from Anita Sarkeesian, and going on record to discuss how she would physically fight someone to defend Star Wars’ Finn and Rey (though they could definitely beat you up themselves). When not working, you can find Mina experimenting with risky baking styles, engaging in hand-to-hand combat with the fruit flies rebelliously squatting on her cacti, and skyping with her cat."
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Jenna Han",
				elected: true,
				image: _2016_han,
				video: "https://www.youtube.com/embed/RBUOWzVd4M8",
				statement: "I’m a first-year Informatics student, and I’m very passionate about the overlap between art and technology. I love to create aesthetically pleasing works that can tell a story or cater to my nerdy side, and would love to bring that to iUGA’s Creative Director position. I believe that my experiences being a First Year Representative will help me be a great iUGA Officer. Other than that, I think I covered my strengths well enough in my video, so I’ll just take this opportunity to talk about myself… Keep reading if you want to know some random facts about me.\nI’ll start off with my favorite movies – animation-wise, How To Train Your Dragon and The Incredibles. As for live-action films, I’m a huge fan of the Dark Knight trilogy as well as Love Actually. I used to play the cello, and some of my best memories growing up were from playing in orchestras. I love to dance, but I’m not that great at it… I’ve been vegetarian since the 5th grade because I really loved (and still love) dogs, and reasoned that if I wouldn’t eat a dog, then I shouldn’t eat other animals either. I cry very easily at sad or sentimental situations, and am not ashamed to admit that I’ve teared up multiple times while binge-watching ATLA.  My favorite fruit is strawberry, my favorite flavor is chocolate, and my favorite type of food is Italian though I would never say no to Pad Thai and spring rolls at Araya’s. Lastly, I’d actually love to get to know more of the iUGA community, so please feel free to introduce yourself to me sometime or shoot me a message on Facebook! (Don’t believe anything Kevin says about me, I’m actually really nice :3 )"
			}
		],
		[Officers.IT]: [
			{
				name: "Alexander Bell-Towne",
				elected: true,
				image: _2016_belltowne,
				video: "https://www.youtube.com/embed/Y_FZnHTmn6M",
				statement: "I want to be the Director of IT because want to help the informatics community thrive in their utilization of technology resources.  While working in the IT office I have found many pieces of expensive hardware not being used, which could be used to enrich our learning experience here at the iSchool. I have working in IT since the 10th grade, when I joined my high school’s IT club, and ever since I try to involve myself with IT at every level.  My freshman year at UW, I started working for the UW’s IT department, and this last summer transferred to the iSchool’s IT Department.  If elected IUGA Director of IT, I will strive to fulfill all of your IT needs."
			}
		]
	}
}