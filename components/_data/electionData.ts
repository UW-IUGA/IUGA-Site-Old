/** 
 * Elections Data is inserted here.
 * 
 * This file is not very scalable, and it would be much more preferable to split this into something
 * that reads the file system instead and does dynamic imports. We can do this easily since this is
 * a server side application.
 * 
 * TODO: While the file itself is not scalable, users should not see any noticable performance impact since
 * the pages are rendered server side and sent down to the user. However, we may have to adjust how
 * the user receives the pages. They may be getting all the data at once.
 * 
 * Honestly it's so little data that it shouldnt matter unless you read this 20 years from now and IUGA
 * has become super famous or something.
 */

// import _2021_name from '../_assets/electionsImages/2021/file';

/** 2021 iuga officer images */
import _2021_kavya from '../_assets/electionsImages/2021/kavyaiyer.jpg';
import _2021_kavya_infographic from '../_assets/electionsImages/2021/kavyaiyer-infographic.pdf';
import _2021_kelsey from '../_assets/electionsImages/2021/kelseylu.jpg';
import _2021_kelsey_infographic from '../_assets/electionsImages/2021/kelseylu-infographic.pdf';
import _2021_sachi from '../_assets/electionsImages/2021/sachifigliolini.jpg';
import _2021_sachi_infographic from '../_assets/electionsImages/2021/sachifigliolini-infographic.pdf';
import _2021_aaron from '../_assets/electionsImages/2021/aaronzhao.jpg';
import _2021_yenny from '../_assets/electionsImages/2021/yennypark.jpg';
import _2021_yenny_infographic from '../_assets/electionsImages/2021/yennypark-infographic.pdf';
import _2021_justin from '../_assets/electionsImages/2021/justinzeng.jpg';
import _2021_justin_infographic from '../_assets/electionsImages/2021/justinzeng-infographic.pdf';
import _2021_pranav from '../_assets/electionsImages/2021/pranavshekar.jpg';
import _2021_pranav_infographic from '../_assets/electionsImages/2021/pranavshekar-infographic.pdf';
import _2021_chang from '../_assets/electionsImages/2021/changzeng.jpg';
import _2021_chang_infographic from '../_assets/electionsImages/2021/changzeng-infographic.jpg';
import _2021_timothy from '../_assets/electionsImages/2021/timothyjoo.jpg';
import _2021_timothy_infographic from '../_assets/electionsImages/2021/timothyjoo-infographic.pdf';
import _2021_shruti from '../_assets/electionsImages/2021/shrutikompella.jpg';
import _2021_shruti_infographic from '../_assets/electionsImages/2021/shrutikompella-infographic.pdf';
import _2021_anika from '../_assets/electionsImages/2021/anikamishra.jpg';
import _2021_anika_infographic from '../_assets/electionsImages/2021/anikamishra-infographic.pdf';
import _2021_augene from '../_assets/electionsImages/2021/augenejohnpak.jpg';
import _2021_augene_portfolio from '../_assets/electionsImages/2021/augenejohnpak-portfolio.pdf';

/** 2021 winfo officer images */
import _2021_allison from '../_assets/electionsImages/2021/allisongeary.jpg';
import _2021_allison_resume from '../_assets/electionsImages/2021/allisongeary-resume.pdf';
import _2021_gisele from '../_assets/electionsImages/2021/giselejosephinefox.jpg';
import _2021_roshni from '../_assets/electionsImages/2021/roshnisrikanth.jpg';
import _2021_roshni_resume from '../_assets/electionsImages/2021/roshnisrikanth-resume.pdf';
import _2021_sam from '../_assets/electionsImages/2021/samrondini.jpg';
import _2021_dana from '../_assets/electionsImages/2021/danarin.jpg';
import _2021_dana_infographic from '../_assets/electionsImages/2021/danarin-infographic.pdf';
import _2021_elise from '../_assets/electionsImages/2021/eliseadams.jpg';
import _2021_elise_resume from '../_assets/electionsImages/2021/eliseadams-resume.pdf';
import _2021_melina from '../_assets/electionsImages/2021/melinaperraut.jpg';
import _2021_melina_resume from '../_assets/electionsImages/2021/melinaperraut-resume.pdf';
import _2021_kayla from '../_assets/electionsImages/2021/kaylachea.jpg';
import _2021_kayla_infographic from '../_assets/electionsImages/2021/kaylachea-infographic.pdf';
import _2021_rachel from '../_assets/electionsImages/2021/rachelkinkley.png';
import _2021_emiri from '../_assets/electionsImages/2021/emirinishizawa.jpg';
import _2021_emiri_infographic from '../_assets/electionsImages/2021/emirinishizawa-infographic.pdf';
import _2021_janvi from '../_assets/electionsImages/2021/janviwadhawan.jpg';
import _2021_janvi_infographic from '../_assets/electionsImages/2021/janviwadhawan-infographic.pdf';
import _2021_sharon from '../_assets/electionsImages/2021/sharonlin.jpg';
import _2021_sharon_resume from '../_assets/electionsImages/2021/sharonlin-resume.pdf';

/** 2020 iuga officer images */
import _2020_cheryl from '../_assets/electionsImages/2020/cherylwu.jpg';
import _2020_cheryl_infographic from '../_assets/electionsImages/2020/cherylwuinfographic.pdf';
import _2020_jacinda from '../_assets/electionsImages/2020/jacindaeng.jpg';
import _2020_jacinda_infographic from '../_assets/electionsImages/2020/jacindaenginfographic.pdf';
import _2020_aaron from '../_assets/electionsImages/2020/aaronzhao.jpg';
import _2020_aaron_resume from '../_assets/electionsImages/2020/aaronzhaoresume.pdf';
import _2020_andrey from '../_assets/electionsImages/2020/andreybutenko.jpg';
import _2020_andrey_resume from '../_assets/electionsImages/2020/andreybutenkoresume.pdf';
import _2020_kiran from '../_assets/electionsImages/2020/kiranpradhan.jpg';
import _2020_suyash from '../_assets/electionsImages/2020/suyashahuja.jpg';
import _2020_alexander from '../_assets/electionsImages/2020/alexandersanchez.jpg';
import _2020_ana from '../_assets/electionsImages/2020/anadelasalas.jpg';
import _2020_ana_infographic from '../_assets/electionsImages/2020/anadelasalasinfographic.jpg';
import _2020_jojo from '../_assets/electionsImages/2020/jojosaunders.jpg';
import _2020_jojo_infographic from '../_assets/electionsImages/2020/jojosaundersinfographic.jpg';
import _2020_victoria from '../_assets/electionsImages/2020/victoriahuynh.jpg';
import _2020_josephine from '../_assets/electionsImages/2020/josephineliu.jpg';
import _2020_josephine_infographic from '../_assets/electionsImages/2020/josephineliuinfographic.png';
import _2020_nam from '../_assets/electionsImages/2020/nampham.jpg';
import _2020_nam_resume from '../_assets/electionsImages/2020/namphamresume.pdf';
import _2020_joseph from '../_assets/electionsImages/2020/josephaltamira.jpg';
import _2020_joseph_resume from '../_assets/electionsImages/2020/josephaltamiraresume.pdf';

/** 2020 winfo officer images */
import _2020_akoly from '../_assets/electionsImages/2020/akolyvongdala.jpg';
import _2020_akoly_resume from '../_assets/electionsImages/2020/akolyvongdalaresume.pdf';
import _2020_allison from '../_assets/electionsImages/2020/allisongeary.jpg';
import _2020_allison_resume from '../_assets/electionsImages/2020/allisonresume.pdf';
import _2020_harkiran from '../_assets/electionsImages/2020/harkiransaluja.jpg';
import _2020_harkiran_resume from '../_assets/electionsImages/2020/harkiransalujaresume.pdf';
import _2020_hailey from '../_assets/electionsImages/2020/haileymeister.jpg';
import _2020_jill from '../_assets/electionsImages/2020/jillnguyen.jpg';
import _2020_louis from '../_assets/electionsImages/2020/louista.jpg';
import _2020_ashlea from '../_assets/electionsImages/2020/ashlealau.jpg';
import _2020_ashlea_infographic from '../_assets/electionsImages/2020/ashlealauinfographic.pdf';
import _2020_julia from '../_assets/electionsImages/2020/juliashull.jpg';
import _2020_julia_infographic from '../_assets/electionsImages/2020/juliashullinfographic.jpg';
import _2020_michelleLee from '../_assets/electionsImages/2020/michellelee.jpg';
import _2020_michellePham from '../_assets/electionsImages/2020/michellepham.jpg';
import _2020_rachel from '../_assets/electionsImages/2020/rachelkinkley.jpg';
import _2020_rachel_infographic from '../_assets/electionsImages/2020/rachelkinkleyinfographic.pdf';
import _2020_locksley from '../_assets/electionsImages/2020/locksleykolakowski.jpg';
import _2020_lynzley from '../_assets/electionsImages/2020/lynzleykolakowski.jpg';
import _2020_lynzley_resume from '../_assets/electionsImages/2020/lynzleykolakowskiresume.pdf';
import _2020_kayla from '../_assets/electionsImages/2020/kaylachea.jpg';
import _2020_kayla_infographic from '../_assets/electionsImages/2020/kaylacheainfographic.pdf';
import _2020_shareen from '../_assets/electionsImages/2020/shareenchang.jpg';
import _2020_shareen_infographic from '../_assets/electionsImages/2020/shareenchanginfographic.jpg';

/** 2019 iuga officer images */
import _2019_alejandro from "../_assets/electionsImages/2019/alejandro.jpg";
import _2019_william from "../_assets/electionsImages/2019/williamkwok.jpg";
import _2019_casey from "../_assets/electionsImages/2019/caseytran.jpg";
import _2019_godgiven from "../_assets/electionsImages/2019/godgiven.jpg";
import _2019_shruti from "../_assets/electionsImages/2019/shrutir.jpg";
import _2019_allison from '../_assets/electionsImages/2019/allison_lee.jpg';
import _2019_dayoung from '../_assets/electionsImages/2019/dayoung.jpg';
import _2019_kiran from '../_assets/electionsImages/2019/kiran.jpg';
import _2019_james from '../_assets/electionsImages/2019/james.jpg';
import _2019_chandrashree from '../_assets/electionsImages/2019/chandrashree_karnani.jpg';
import _2019_sean from '../_assets/electionsImages/2019/sean_kim.jpg';

/** 2019 winfo officer images */
import _2019_akoly from '../_assets/electionsImages/2019/akoly_vongdala.jpg';
import _2019_allisonG from '../_assets/electionsImages/2019/allison_geary.jpg';
import _2019_autumn from '../_assets/electionsImages/2019/autumn_derr.jpg';
import _2019_eva from '../_assets/electionsImages/2019/eva_perez.jpg';
import _2019_harkiran from '../_assets/electionsImages/2019/harkiran_saluja.jpg';
import _2019_hayley from '../_assets/electionsImages/2019/hayley_younghusband.jpg';
import _2019_jeongvin from '../_assets/electionsImages/2019/jeongvin_yeom.jpg';
import _2019_rhea from '../_assets/electionsImages/2019/rhea_chen.jpg';

/** 2018 iuga officer images */
import _2018_andrea from '../_assets/electionsImages/2018/andrea_chen.jpg';
import _2018_anton from '../_assets/electionsImages/2018/anton_zheng.jpg';
import _2018_cole from '../_assets/electionsImages/2018/cole_french.jpg';
import _2018_joseph from '../_assets/electionsImages/2018/joseph_tsai.jpg';
import _2018_katie from '../_assets/electionsImages/2018/katie_goulding.jpg';
import _2018_kidus from '../_assets/electionsImages/2018/kidus_sendeke.jpg';
import _2018_mano from '../_assets/electionsImages/2018/mano_barkovics.jpg';
import _2018_neha from '../_assets/electionsImages/2018/neha_yadav.jpg';
import _2018_oorja from '../_assets/electionsImages/2018/oorja_chowdhary.jpg';
import _2018_ali from '../_assets/electionsImages/2018/ali_rafiq.jpg';
import _2018_anushree from '../_assets/electionsImages/2018/anushree_gopal.jpg';
import _2018_chelsea from '../_assets/electionsImages/2018/chelsea_le.jpg';
import _2018_david from '../_assets/electionsImages/2018/david_lee.jpg';
import _2018_patrick from '../_assets/electionsImages/2018/patrick_old.jpg';
import _2018_sagar from '../_assets/electionsImages/2018/sagar_surana.jpg';
import _2018_wesley from '../_assets/electionsImages/2018/wesley_wei.jpg';

/** 2018 winfo officer images */
import _2018_alexis from '../_assets/electionsImages/2018/alexis_choi.jpg';
import _2018_august from '../_assets/electionsImages/2018/august_carow.jpg';
import _2018_christie from '../_assets/electionsImages/2018/christie_gan.jpg';
import _2018_echo from '../_assets/electionsImages/2018/echo_zhang.jpg';
import _2018_emma from '../_assets/electionsImages/2018/emma_ropes.jpg';
import _2018_harshitha from '../_assets/electionsImages/2018/harshitha_akkaraju.jpg';
import _2018_mary from '../_assets/electionsImages/2018/mary_huibregtse.jpg';
import _2018_min from '../_assets/electionsImages/2018/min_yang.jpg';
import _2018_stefani from '../_assets/electionsImages/2018/stefani_sanchez.jpg';
import _2018_stephanie from '../_assets/electionsImages/2018/stephanie_burd.jpg';
import _2018_sulekha from '../_assets/electionsImages/2018/sulekha_ali.jpg';
import _2018_yiran from '../_assets/electionsImages/2018/yiran_ni.jpg';
import _2018_zhiqi from '../_assets/electionsImages/2018/zhiqi_lin.jpg';

/** 2017 iuga officer images */
import _2017_alex from '../_assets/electionsImages/2017/alex-gilbert.jpg';
import _2017_brendan from '../_assets/electionsImages/2017/brendan-kellogg.jpg';
import _2017_chris from '../_assets/electionsImages/2017/chris-oh.jpg';
import _2017_davin from '../_assets/electionsImages/2017/davin-lee.jpg';
import _2017_ethan from '../_assets/electionsImages/2017/ethan-anderson.jpg';
import _2017_jessica from '../_assets/electionsImages/2017/jessica-libman.jpg';
import _2017_rosemary from '../_assets/electionsImages/2017/rosemary-adams.jpg';
import _2017_sanjana from '../_assets/electionsImages/2017/sanjana-galgalikar.jpg';
import _2017_evan from '../_assets/electionsImages/2017/evan-frawley.jpg';
import _2017_oorja from '../_assets/electionsImages/2017/oorja-chowdhary.jpg';
import _2017_saif from '../_assets/electionsImages/2017/saif-mustafa.jpg';
import _2017_xingyue from '../_assets/electionsImages/2017/xingyue-yang.jpg';
import _2017_daniel from '../_assets/electionsImages/2017/daniel-hoang.jpg';

/** 2017 winfo officer images */
import _2017_andrea from '../_assets/electionsImages/2017/andrea-chen.jpg';
import _2017_anushree from '../_assets/electionsImages/2017/anushree-shukla.jpg';
import _2017_jenny from '../_assets/electionsImages/2017/jenny-lee.jpg';
import _2017_joycie from '../_assets/electionsImages/2017/joycie-yu.jpg';
import _2017_leanne from '../_assets/electionsImages/2017/leanne-hwa.jpg';
import _2017_lee from '../_assets/electionsImages/2017/lee-segal.jpg';
import _2017_sarah from '../_assets/electionsImages/2017/sarah-feldmann.jpg';
import _2017_sarahP from '../_assets/electionsImages/2017/sarah-phillips.jpg';
import _2017_tiffany from '../_assets/electionsImages/2017/tiffany-chen.jpg';
import _2017_yi from '../_assets/electionsImages/2017/yi-cheng.jpg';
import _2017_zhanna from '../_assets/electionsImages/2017/zhanna-voloshina.jpg';

/** 2016 iuga officer images */
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
import _2016_pavlov from '../_assets/electionsImages/2016/boris-pavlov.jpg';
import _2016_tari from '../_assets/electionsImages/2016/mina-tari.jpg';
import _2016_duvall from '../_assets/electionsImages/2016/parker-duvall.jpg';
import _2016_wahbeh from '../_assets/electionsImages/2016/sam-wahbeh.jpg';
import _2016_tanabe from '../_assets/electionsImages/2016/soichi-tanabe.jpg';

/** 2015 iuga offcers images */
import _2015_sebring from '../_assets/electionsImages/2015/Sebring.jpg';
import _2015_amaral from '../_assets/electionsImages/2015/Amaral.jpg';
import _2015_mcdonough from '../_assets/electionsImages/2015/Harry.jpg';
import _2015_yan from '../_assets/electionsImages/2015/Yan.jpg';
import _2015_woehrle from '../_assets/electionsImages/2015/Austin.jpg';
import _2015_watson from '../_assets/electionsImages/2015/Watson.jpg';
import _2015_munn from '../_assets/electionsImages/2015/Munn.jpg';
import _2015_lopez from '../_assets/electionsImages/2015/Lopez.png';
import _2015_thirumalai from '../_assets/electionsImages/2015/Thirulamai.jpg';
import _2015_hama from '../_assets/electionsImages/2015/Hama.jpg';
import _2015_perry from '../_assets/electionsImages/2015/Perry.jpg'

import _placeholder_image from '../_assets/electionsImages/2021/dubs.jpg'

import { Officers } from "./homePageData";

export enum ElectionGroup {
	WINFO = "WINFO",
	IUGA = "IUGA"
}

type ElectionCandidate = {
	name: string,
	elected?: boolean,
	appointed?: boolean,
	adminMessage?: string,
	image: string,
	video?: string,
	linkToPortfolio?: string,
	pdf?: string,
	extraImage?: string, // Use this extra image if they provide a PDF that is a ridiculous size
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
	Officers.OPERATIONS,
    Officers.COMMUNITY_EFFORTS,
	Officers.HACKATHON_DIRECTOR
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
				image: _2016_wahbeh,
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
			},
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
				elected: true,
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
	},
	2017: {
		[Officers.PRESIDENT]: [
			{
				name: "Xingyue (Eugenia) Yang",
				image: _2017_xingyue,
				video: "https://www.youtube.com/embed/1osewolSwmg",
				statement: "When I was 18, I moved here not knowing anything about Seattle. It was a very new and exciting experience but it was also a struggle. Like most international students, I struggled telling people about my name and culture, as some of them never tried to understand the meaning behind these identities. However, being in the Informatics program and involved in IUGA has been a wonderful experience, as I’ve found my second home where I feel connected with everyone.\nDuring my two years in Informatics, I've always felt included and welcomed into our community. INFO alums are always willing to help us prepare for jobs and internships. There are always iHangouts for us to meet current and prospective INFO students and professional events held by IUGA and Winfo to help us learn about different opportunities. Even small things, such as, people trying to remember my Chinese name, and always helping each other in TE lab, have made me feel included - thus, shaping my perspective on inclusiveness and diversity.\nI’m running for President of IUGA, because I want to make sure everyone feels welcomed in our community. Furthermore, previous IUGA presidents have exclusively only been men. As a woman of color from a different cultural background than most, I hope this election and my presidency will encourage more people, especially those of underrepresented communities, to get involved in their community and pursue leadership positions. As an Orientation Leader, Campus Tour Guide and Informatics Diversity Ambassador, I always tell incoming students and families how amazing Informatics is and how much I love this program because of its inclusiveness and diversity. And as President, I’ll keep collaborating with other IUGA officers and iSchool groups, such as Winfo, iEquality, iQueeries, to support this community by connecting everyone together ☺"
			},
			{
				name: "Ethan Anderson",
				elected: true,
				image: _2017_ethan,
				video: "https://www.youtube.com/embed/nxNnt2tg7C4",
				statement: "We all know that feeling; a mixture of anticipation and dread, finally receiving the decision email about your Informatics application. But finally, you open it: “Congratulations, you have been selected for admission to the Bachelor of Science in Informatics!” I, for one, felt a rush of relief and joy, finally getting into the program I had dreamt about and being welcomed to a great community.\nOne of my core values is to be accepting and welcoming to all people, and the vision of the Informatics community is the same. As the president of IUGA I will strive to bring our major even closer together, and to continue a focus on social events and bonding experiences. With my experience and passion for the Informatics community, I know that I am the right person for the job.\nOf the president’s duties, acting as a liaison between the student body, the IUGA board, and our illustrious faculty is one of utmost importance. This year I was fortunate to have been chosen as a first year representative for IUGA, and in this position I have really learned what it takes to be a leader for this program. I am also a teaching assistant in Informatics this quarter, and in that role I have gained knowledge on how to interpret and relate information from professor to student. I intend to apply these skills to help IUGA have an even greater impact on the Informatics experience for all of my peers.\nI feel like I have finally found my home here in Informatics. You as the student body have accepted me as a friend and peer, I feel like I have found my perfect niche of people; willing to nerd out about the new Westworld episode or to debate the societal impact of self driving cars. I couldn’t have picked a better group of people to spend my time with while at UW. You all inspire me to be an innovator and leader, and the amount of creativity and skill I see in you all is astounding.\nMy name is Ethan Anderson and I’m running for president of IUGA."
			},
			{
				name: "Evan Frawley",
				image: _2017_evan,
				video: "https://www.youtube.com/embed/F2wmTfMnXpo",
				statement: "Informatics to me is about the intersection of technology, data, and people. What makes the iSchool and the Informatics major different from the rest of campus is its dedication to interfacing technology and people. I love informatics because we choose to invest in those around us and we care about the impact that our actions have.\nI want to run for IUGA President because I love Informatics, the iSchool, and most importantly, the people that are sharing this experience with me.  For as long as I can remember, I have engaged in leadership and community building. From various clubs in high school to RSO’s on campus, I have led teams and have organized 400+ person events, all in the interest in making the community experiences for others as kick-ass as possible. My time as both a Resident Advisor and a Teaching Assistant while on campus has engrossed me in heightening the Husky Experience of fellow students. As the IUGA President, I would be honored to create memorable experience within the iSchool."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Jessica Libman",
				elected: true,
				image: _2017_jessica,
				video: "https://www.youtube.com/embed/aQdS2btpRuo",
				statement: "I want to be IUGA's next Vice President because I want to stay involved in the community that has been so welcoming to me in my first few months in the program. I have been able to meet such incredible people who have inspired me to run for a greater role in our shared community. Successful leaders at UW bring groups closer together by recognizing personal and career-related interests, and that is what I hope to do within the iSchool. As a First Year Representative, I've had first hand experience working with IUGA by planning events and assisting the members of the board. The skills and relationships I've made through this opportunity will help me in my role as Vice President because I will be able to better fulfill the core responsibilities and support the officers. As your Vice President, I would be an approachable source to current and prospective Informatics students as they find their place within this major. I am honored to accept my nomination for Vice President; thank you for your consideration."
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Alex Gilbert",
				elected: true,
				image: _2017_alex,
				video: "https://www.youtube.com/embed/8syltem-oss",
				statement: "Hey Info!\nMy name is Alex Gilbert, and I have a funny to story to tell. Two years ago, when I applied to Informatics for the first time, they didn't reject me - I rejected them.\nAnd then I came crawling back.\nWhat changed my mind, you might ask? I had the chance to talk to some Info students about the classes they were taking, the work they were doing, and how they were liking Informatics as a whole. I was also able to see the events created by IUGA for Informatics students to take part in - it's been said many times, but the community, all of the students, the classes they take, and all of the cool things they do come together to make Informatics something special. So at the end of the year (which couldn't come soon enough), I reapplied, waited anxiously for the response, and got in! I didn't hesistate to accept, and the rest, as they say, is history...\nActually, it's not quite history yet - but I would love the chance to make history (and memes!) as IUGA's Director of Public Relations! I'd help direct events to keep the Info community strong while also putting IUGA's best foot forward to show prospectives what awaits them in Info and to prevent them from making the same mistakes (not joining Info) that I initially did. I want to make sure the Info community doesn't forget how essential they are in making Info the best major at UW - but to do that, I need you to vote for Alex Gilbert as IUGA's Director of Public Relations!"
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Sanjana Galgalikar",
				elected: true,
				image: _2017_sanjana,
				video: "https://www.youtube.com/embed/Ca7ALOUZpaw",
				statement: "Hey, I’m Sanjana! I’m running to be IUGA’s next Director of Outreach because I want to help you get your next internship or job! Some ideas I have for next year include industry/alumni mentor nights, technical interview prep sessions, portfolio reviews, and company tours. I would also like to see closer collaboration between IUGA and Winfo for professional events.\nPrevious leadership experiences that have prepared me to succeed in this role include my current position as the Vice President of Winfo. I worked closely with companies to gather sponsors for this year’s Winfo hackathon. I also previously served as the VP of Community Outreach for the UW Society of Women Engineers, where I helped organize professional development events for students.\nA major reason I applied to Informatics is because of its tightknit community and the people in the major. I would love to be a part of IUGA and help foster and grow the community even more, while expanding the professional development programs the major has to offer INFO students."
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Davin Lee",
				elected: true,
				image: _2017_davin,
				video: "https://www.youtube.com/embed/f_tSB9PTU0Q",
				statement: "Hello People of Informatics!\nMy name is Davin Lee, and I am an undergraduate in the University of Washington Information school just like you all. As a current first year representative I am honored to be nominated to the role of treasurer for the 2017 – 2018 academic year. I feel privileged by this nomination and would like to thank you all for giving me the opportunity to introduce myself.\nOutside of Informatics, my time is mainly invested towards the Husky Badminton club where I am the current treasurer. I am tasked with managing the funds that will ensure we are able to continue hosting the annual Husky Badminton Tournament. The event usually includes over a hundred participants and requires proper regulation of funds to ensure that we can continue to run the annual event and the tri-weekly club sessions. As the treasurer for IUGA, I would like to continue many of the current events such as INFO game nights, iHangouts, and other social events.  In order to continue funding these event, I would like to explore more fundraising opportunities so that we may continue to host events that will promote the tight-knit family we have in the iSchool."
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Rosemary Adams",
				elected: true,
				image: _2017_rosemary,
				video: "https://www.youtube.com/embed/HN3uRqwyUQU",
				statement: "Diversity is a powerful force for good, and has always been a fundamental part of my core values, and so I am thrilled to have been nominated for Director of Diversity Efforts. To foster a diverse and inclusive community serves to better the whole of society, down to each individual participating in it, and so I firmly believe in doing just that for Informatics. As far as my own experience, I am currently the VP of Finance for my sorority. Our house was founded by Jewish women in a time where Jews were incredibly discriminated against, so naturally, we have grown into an organization that actively pursues diversity in our members, and I am currently spearheading an effort to overhaul our Diversity programming to reflect this. I have also been fortunate enough to participate in a massive increase in discussion (and art) about race, gender, and sexuality in Seattle's arts community, specifically focusing on black trans/femme identifying women. I have greatly admired the dedication that faculty, staff, and student groups in Informatics have to diversity, particularly in light of the current political climate, and believe I have the passion and skills to continue and expand on that momentum. If elected, I will work closely with other Informatics organizations to expand diversity events that will not only increase awareness of challenges faced by minorities in the tech sphere today, but will also explore what we can learn from each other, celebrate our differences and bring us together as Informatics students."
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Saif Mustafa",
				image: _2017_saif,
				video: "https://www.youtube.com/embed/yYwvO_T509E",
				statement: "Ideas start as simple, fragile fragments of thought.\nThey need to be taken care of. Cultivated. Matured. Questioned. Only then can we dare to take them to the next level. Only then can we make them into something tangibly profound. Something that can communicate a meaningful experience.\nI live in the intersection of that process. My name is Saif, and I want to be the next Creative Director of IUGA.\nI remember my first interaction with Informatics. I remember it so clearly because it was the first time someone questioned my thinking that way. I took the Mobile App Design class in Fall 2015. This was the first INFO class I had taken, and I wasn’t even in the major. This class was an eye-opening experience for me because it made me realize that I had a natural eye for design – and I didn’t even know. It's what started my love for Informatics, and showed me a world of endless possibilities.\nOn July 28th, 2016, I was accepted into the Informatics major. This was indeed one of the greatest moments of my life.\nSince then, with each project I have committed to in my INFO classes, I’ve observed that the more I was learning about design academically, the “less” I was designing in action. Informatics put me in an arena where I began to craft around intention of efficiency through simplicity. It educated me with not just the robust technicality of design, but also help me focus on forming a deep understanding of human values.\nAs Creative Director of IUGA, I look forward to contributing my design thinking and leadership skills to exemplify what IUGA and Informatics stand for. It would be an honor to be part of an organization that highlights the essence of what Informatics is: People, Technology, Mentorship, Inspiration, and Opportunity.\nCheck out www.saifmustafa.com to see some of the work I've done – this should give you a better sense of what I love to do and what makes me want to wake up each morning.\nThank you!"
			},
			{
				name: "Daniel Hoang",
				elected: true,
				image: _2017_daniel,
				video: "https://www.youtube.com/embed/5-2R5MFpsm8",
				statement: "2 pieces of bread\n1 scoop of jelly with the flavor that suits you best\n1 scoop of peanut butter\nSpread the jam on one slice of bread\nSpread the peanut butter on the other\nPut the two slices of bread together and serve\nThis is what IUGA means to me. Picture this, you and me, we’re both two ordinary pieces of bread, but we’re stuck together by a quirky smorgasbord of unique flavors that are simple but perfect. From our personalities, backgrounds, skills, and aspirations, we create the jelly and peanut butter of information and technology that binds us together by our collective, collaborative bread. Under informatics and IUGA, we are the simple synergy of success, ready to serve a hungry world.\nWe make up a simple recipe for success and I plan on plating us so perfectly that people want to take a bite. As creative director, I want bring out our quirk, fun, and professionalism from our apparel to our flyers. From helping you get dressed up and take pride in our IUGA community--or hide the fact you just pulled the worst all-nighter of the quarter for the morning after--to making promotions for events you can’t help but notice, it would be an honor to lead and work with an amazing group of flavors.\nWhether you like your PB ‘n’ J cut diagonal or down the vertical, I want to make it my job to present us in the most mouth-watering way possible."
			},
			{
				name: "Oorja Chowdhary",
				image: _2017_oorja,
				video: "https://www.youtube.com/embed/i-xEmSl-7bA",
				statement: "Hi there! My name is Oorja, like Georgia but without the ‘G’. I’m currently a junior in Informatics as well as HCDE.\nI decided to run for Creative Director because graphic design is my passion and running for office sounded like a fun opportunity to get more involved with the iSchool community. For me, IUGA is a great place to make new friends but also possibly lose them over a game of bowling or Smash. My hobbies include but are not limited too: joking about sick memes, re-watching episodes of Parks and Rec, playing video games, etc."
			}
		],
		[Officers.IT]: [
			{
				name: "Brendan Kellogg",
				appointed: true,
				image: _2017_brendan,
				video: "https://www.youtube.com/embed/aToShMfHEYg",
				adminMessage: "Brendan Kellogg was appointed to be the next Director of IT after Chris Oh assumed the role of Director of Academic Support.",
				statement: "I am honored to be nominated for IUGA’s Director of IT and I am excited to be running for this position. I am running because I have a passion for growing IUGA’s ability to provide technologies and opportunities to learn skills. This will benefit not only iSchool students but also all members of the iSchool. As your Director of IT, I will be able to achieve this goal. I have already worked extensively with iSchool IT to provide more technologies and resources, such as the Virtual Reality equipment, for the iSchool’s student body. In addition to my experience working with iSchool IT, I have already built relationships with many of the staff in Student Services and faculty which will prove helpful when trying to incorporate changes to improve the ability of technology used throughout the iSchool to enrich student learning.\nIf elected Director of IT, I will use my experience working with the iSchool’s technology systems as well as my existing relationships with iSchool IT and Student Services to both adopt new technologies and incorporate those new technologies into the learning environment."
			}
		],
		[Officers.ACADEMIC]: [
			{
				name: "Chris Oh",
				appointed: true,
				image: _2017_chris,
				video: "https://www.youtube.com/embed/ZyTMvF9soRY",
				adminMessage: "Chris Oh was originally elected to be the next Director of IT, but instead chose to take on the new role of Director of Academic Support.",
				statement: "Hi, my name is Chris and I’m a junior in the iSchool. I have been part of this wonderful community since 2013. I have seen the Informatics major and community grow into something that wasn’t imaginable back then and I have highly ambitious plans to accelerate that growth. These plans tie closely to my lifelong passion for using technology to bring people closer to each other, and also to discover or achieve their goals.\nI want to cultivate talent in students preparing to apply for Informatics and seeking internship opportunities. To that end, I have started and become president of newly formed UW RSO: Student User Development Organization, or SUDO for short. Because the organization has dedicated guidance and support to students that need help finding technical projects to work on to build their resume and portfolios in preparation for applying for Informatics and securing internship opportunities, I understand what it takes to lead a coordinated technology-oriented effort focused on brightening people’s futures.\nAs the Director of IT, I will use my knowledge of various IT resources, my experience from the Informatics program, and my leadership skills from SUDO to better support the learning experience for Informatics students and prospective Informatics majors. I hope to do so by providing technical support and guidance so that everyone in the iSchool is able to take advantage of all the amazing IT resources the iSchool provides."
			}
		]
	},
	2018: {
		[Officers.PRESIDENT]: [
			{
				elected: true,
				name: "Andrea Chen",
				image: _2018_andrea,
				video: "https://youtube.com/embed/oBPsRqX2GWU",
				statement: "Hello Info! My name is Andrea Chen and I am running to be your next IUGA president! I've loved being a part of the iSchool for the past 2 years, where I've made incredible friends and unforgettable memories of late nights in the TE lab. Being a part of the iSchool has been amazing, and as your President I want to continue building and improving our fantastic iSchool. \nWe're in a pivotal moment of change here at the iSchool. With the newly established INFO minor to a new dean, this can be an incredible opportunity to grow as a community. Through my experiences as an officer for Women in Informatics, to being a Teaching Assistant for INFO 201, and working as an Informatics Peer Advisor, I have been able to learn and listen and truly understand what makes the iSchool, well, one of the best programs at the UW and in the nation. \nAs your President, my goals are centered around growth, transparency, and engagement. With growth, I want you to grow. College and being in the iSchool is an incredible opportunity, and as your President, I will prioritize activities and events that will help you grow professionally and personally. This will include events with Google engineers about contributing to open source software, designing for non-profit organizations, to open discussions about our vulnerabilities such as failures and resiliency. \nFor me, leadership is a responsibility to the people I serve, which is the Informatics student body. As your President, I will always be transparent about what is occurring in IUGA and the Information School. You can always slide into my dms; they're always open. I also plan on sharing monthly updates to public channels like Facebook or Twitter, so you know exactly what is always happening in the iSchool. \nLastly, it's engagement. Community is a result of everyone's hard work. Throughout my time within the iSchool, I've noticed a change with event attendance or those who habitually live in the labs with me, in terms of those who feel engaged and active. Because our community is changing, as your President I will work to engage students in new ways such as a developing an INFO buddy system to encourage building new friendships to fun ice cream socials. \nI am excited about an opportunity to serve as your IUGA President, but I also know I can't do this alone. I need your vote, your input, and your voice to help create the iSchool we all believe in. Working together, we'll create a stronger and more inclusive community."
			},
			{
				name: "Chelsea Le",
				image: _2018_chelsea,
				video: "https://youtube.com/embed/KGhyaTnPukU",
				statement: "Passion. People. Purpose. Before Informatics, I didn’t know what those three words meant. Growing up, technology enabled me to help my community find new resources, such as new jobs or food banks, but I never envisioned technology as more than just a hobby. In fact, I came into UW with the intention of becoming a dentist. I thought it was the best way to play an important role in people’s lives and make a difference. But, I was wrong. My freshman year I stumbled upon Informatics through a conversation I had with a new friend (s/o to Jessica Libman). Through her encouragement, I found my passion for technology, design, and user interaction -- something that was there all along, just waiting to be exposed. Even though my original plan has changed, my desire to make an impact on people’s lives has not. \nWe all have our own unique story in how we found the perfect major and community within Informatics, but we wouldn’t be here without that initial introduction just like how I wouldn’t be here without an enthusiastic and passionate iSchool community. Because of people like Jessica, I’ve found my passion and my purpose in Informatics. \nIf given the opportunity to be your next IUGA President, I will use my experience as an iSquad Leader, Treasurer and Director of Career & Personal Development of my sorority, and Husky Presidential Ambassador to help others find their passions, people, and their purpose, so we can keep bringing the iCommunity even closer with the next generation of students. \nI aspire to inspire others and want to work with you all to continue fostering this great community, guide those who are searching for their purpose like I once was, and make a lasting impact."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Neha Yadav",
				image: _2018_neha,
				video: "https://youtube.com/embed/xSt_7o2siYc",
				adminMessage: "Offered Public Relations role after Patrick departed.",
				statement: "When most people hear of Informatics they think it's another tech major venturing to help its clients better utilize technology. But to me, Informatics is a close-knit community which strives to make information work. By attending countless IUGA events, I have seen firsthand the impact that this association has had on every informatics student. As Vice President of IUGA, I will strive day in and day out to enhance and drive the INFO community by collaborating with IUGA officers to make the most of our amazing community. \nBy being a first-year rep, I have had the chance to oversee procedures for scheduling events, getting in touch with INFO constituents, and witnessing firsthand how our officers connect with each and every cohort. As Vice President, I aim to maintain the excellent standard that our current officers execute daily and improve efficiency and communication within the IUGA Board. \nAs well as being a first-year rep over the years, I have been a tireless leader in countless school projects. I’ve led students with different experiences and time schedules to work together productively to provide impressive projects before stressing deadlines. I will bring this sense of motivation to IUGA by being ever present at meetings and events. \nPersonally, I have experienced how powerful this INFO community can be to elevate someone to their maximum potential within this field. As your Vice President, I will endeavor to be the voice of the student body and assist you in being the best version of yourself whether that through putting you on a stage for success or making meaningful connections that can last a lifetime. \nI am ever so grateful for being nominated for this position and if elected I will work diligently so that you can have the best experience within the iSchool!",
			},
			{
				name: "Mano Barkovics",
				elected: true,
				image: _2018_mano,
				video: "https://youtube.com/embed/tS6wn6tRuo8",
				statement: "'I could either watch it happen, or be part of it' - Elon Musk \n Over half a year ago, on November 2nd, 2017 I accepted the opportunity to join IUGA as a First Year Representative. Through working closely with the current officers, it gave me the chance to learn what it takes to run the association and the fundamental elements to make it an engaging community. Through becoming a U.S. Citizen just last year there is no better way to exercise our democracy by announcing that I'm campaigning for the IUGA 2018-2019 Vice President position! \nWhat started it all is by being a TA in the iSchool for the past two years. I got to meet a lot of you through INFO 466/467, but most importantly it made me confident to step out of my comfort zone to go above and beyond in order to make sure that everyone succeeds and gains core knowledge. From here I challenged myself to pursue leadership skills and to create a multi-disciplinary community at UW dedicated to scholars from all fields interested in exploring cutting-edge tech. Thus, Virtual Reality Association was born which raises awareness for Extended Realities and making such technology accessible all-around campus. I would like to take everything that I learned to continue supporting IUGA to the best of my abilities. \nAs your Vice President, I will solely focus on providing guidance and support to all of the current and prospective peers by committing time to be an exceptional leader, while collaborating with the team to propel IUGA forward! #ischoolismyschool \nIt would be a great privilege to be your Vice President for my final year at UW! \nThank you for your consideration, IUGA!"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				elected: true,
				name: "Patrick Old",
				image: _2018_patrick,
				video: "https://youtube.com/embed/z_Ayh6zlv2Q",
				adminMessage: "Departed role.",
				statement: "Hello IUGA! \nI’m very excited to say that I am running for the IUGA position of Director of Public Relations. I deeply value relationships with those around me, whether they be professional or personal, and have found no better people to be in relationship with than those in IUGA. From going to various events such as the beginning of the year BBQ to weekly hangouts, I have been inspired and overjoyed to grow with those around me as we engage in meaningful coursework and community that will last well past graduation. \nI look forward to the challenge of being a key part of the communication of IUGA events to all of it’s members, organizing and overseeing the events, and just having a dang good time with you all anytime we are around each other. \nIn conclusion, I ask for your vote today as your peer and friend. Please reach out to me at any time - we are in IUGA to grow and strengthen the community, and I love hearing other’s ideas on how to best make that happen. \nCheers,\nPatrick"
			}
		],
		[Officers.OUTREACH]: [
			{
				elected: true,
				name: "Cole French",
				image: _2018_cole,
				video: "https://youtube.com/embed/4ZjQsQKLBNg",
				statement: "Hey voters! My name is Cole, a former Education student now in Info. One of the reasons why I made the switch between fields was from realizing how students are learning outside of the classroom more than ever before with the help of the Internet and technology, and I wanted to position myself at the forefront of this new shift and help shape the ways we all come to understand the world around us. \nSimilarly, I’m excited to be running for Director of Outreach because as important as classroom learning is, I believe it’s equally as important to promote the professional opportunities that classes can’t provide. Of course, I wouldn’t be running if I didn’t think I was capable of performing this responsibility, and fortunately with 3 years of experience as an educator and resource liaison for students, I feel well prepared to take up the challenge. \nDuring this time, I was a middle school advisor for college and career readiness through the Dream Project, where I met one-on-one with over a thousand students from the Renton School District connecting them to relevant scholarships and programs. Additionally, I put together outreach curriculums in classrooms, and planned school assemblies and events that brought together speakers from local colleges, giving students who knew nothing about college the chance to discover what it’s all about for the first time. \nOutreach has consistently been the crux of my leadership experience, and I look forward to building off the work of my predecessors and helping iSchool students connect to the professional resources they need to find success. Whether it’s planning career events, inviting guest speakers, or coordinating company tours, I want to ensure that our amazing community stays in touch with the fast-moving world around us."
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Anushree Gopal",
				image: _2018_anushree,
				video: "https://youtube.com/embed/XOdVmNSDx0M",
				statement: "Have you ever been to IUGA’s game nights, iHangouts, or any other event? If yes, you know how welcoming and fun they are. If not, you’re missing out and that will hopefully change next year! \nHi, my name is Anushree Gopal and I want to your Director of Finance for the following school year. I want to help the Informatics community be even more close knit and for everyone to come to events without the financial burden. All you have to do is add IUGA events to your calendars and show up! Meanwhile, I will work hard to find sponsors, secure finances, and have that monetary stability that will allow us to keep organizing your favorite events. \nIn the past, I have taken care of budgets in various leadership roles, one was as treasurer for Operation Smile and the other is the floor budget as an RA. In both these roles, I have stayed organized and kept the budget up to date, so I know I will be able to do that for this role, too. I have handled our RSO merchandise, found great sponsors, and fundraised extensively for our events. I will listen to each of you to understand what events you want and then make that happen! \nOne of my favorite parts of Informatics is how diverse every person is and with IUGA’s events we are all able to come together and have a great time! Together, let’s make new traditions and keep our current ones running. \nSo don’t forget to vote, Anushree Gopal for Director of Finance!"
			},
			{
				elected: true,
				name: "Anton Zheng",
				image: _2018_anton,
				video: "https://youtube.com/embed/QJpa2cPmbag",
				statement: "Hey there Info! \nI am honored to be nominated for the IUGA officer position of Director of Finance for the 2018-2019 school year. This past year getting to know the students in our community has been an absolute pleasure. I would like to accept my nomination in order to give back to this community that has given me so much. \nExperiences that I've had that make me qualified for this position include working as a student assistant for UW's Office of Finance and Administration and as a First-Year Representative for IUGA. Working at the Office of Finance and Administration, I helped out with budget reconciliation. While some people might find this boring, I understood how important keeping track of finances is for an organization. As your First Year Representative this year, I've had the pleasure of helping organize social and professional events to bring together our community. I've noticed that a lot of our social events require our members to spend money. While these restaurant hangouts are fun, I propose a wider variety of events. Events such as the Movie Night we hosted last quarter and the potluck event encourage more involvement. \nAs the Director of Finance, I would want to take a step back and look at the bigger picture. This job is not just about budgets and numbers. It's about making things work logistically to the benefit you. I want to work together with the director of public relations and the director of outreach to plan events that you want. Afterall, our jobs are to work for you. Thank you for your time and consideration IUGA. \nThanks,\nAnton Zheng"
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Ali Rafiq",
				image: _2018_ali,
				video: "https://youtube.com/embed/qDt1eDeHYOs",
				statement: "Hey everyone! My name is Ali Rafiq and I’m a first year in Informatics. It has been an amazing experience hearing everyone’s stories and making so many new friends. I have come to really love this community and all the opportunities it has provided me. I believe diversity in the informatics major is definitely something that could be improved upon.  I myself come from a Muslim-American background and have been apart of the Muslim Student Association. My role in the MSA was to spread awareness of my organization and bring in as many people as possible. Throughout my time doing this I have made personal connections with a lot of other organizations on campus such as the Middle Eastern Student Commission, the Pakistani Student Association, the Somali Student Association, and many more. I understand how to get to organizations that are underrepresented in Informatics because I am greatly involved with them. I also understand that diversity doesn’t just mean different looking people, it also means different genders, sexual orientations, and ways of thought. I want to reach out to those communities just as I have reached out to the other many organizations. I also think that diversity is a community effort. If you are apart of a community that you don’t see represented in our community than by all means, feel free to reach out to me. If you  I would absolutely love to get to know you in person and for you to tell me what community you come from and how I can benefit you."
			},
			{
				elected: true,
				name: "Katie Goulding",
				image: _2018_katie,
				video: "https://youtube.com/embed/lz3ZZr09Y5g",
				statement: "Hi! My name is Katie, and I am so excited to be running for Director of Diversity Efforts! \nDiversity is one of my core values and I use it to guide my actions to positively influence my community. I believe in seeking new perspectives (especially ones in opposition of my own) to gain insight into societal inequities and its relationship to diversity. I am confident that my experiences, leadership, and passion will make me a qualified director. \nFor the last five years, I have had the incredible opportunity to volunteer as a summer camp counselor for the Muscular Dystrophy Association. More recently, this year I have become a weekly volunteer at ROOTS, a young adult shelter in the University District. These opportunities have provided me with ineffable knowledge centered around systemic oppression and diversity, and I am excited to bring a new perspective of accessibility and inclusivity to Informatics. Additionally, I actively seek out courses in the Gender Women's and Sexuality Studies department to better understand the societal inequities faced by people who identify within racial, gender, or sexual minority groups and learning how I can become a stronger ally. \nFor almost two years, I have been a TA for introductory Informatics courses. As a TA, I feel it is my responsibility to use the platform of an educator to share the knowledge, importance, and influence of diversity, especially to prospective students. I do this through a technical lens, presenting how data driven systems have the potential to perpetuate systemic inequities. \nWhat makes Informatics so special to me is the welcoming and warm community. I want all Informatics students to share that feeling and bring our community of amazing, unique individuals closer together. If elected, I want to focus on improving diversity within the classroom, highlight the challenges minorities face in Informatics and the technology field, and ensure prospective students know we are a community committed to diversity. In doing this, I ultimately want to channel my enthusiasm and passion for diversity to create a more inclusive environment where we all have the opportunity to succeed in the major and beyond."
			},
			{
				name: "Sulekha Ali",
				image: _2018_sulekha,
				video: "https://youtube.com/embed/dPOSZMAzLB8",
				statement: "Hi, I’m Sulekha and I’m running to be your Director of Diversity efforts. Diversity has always been something that I've been very passionate about. Coming from my own background as a first generation college student, Somali, as well as being a black Muslim woman I have experienced and witnessed first hand how a lack of representation and diversity can have negative effects. \nI want to run to be your Director of Diversity efforts as I feel that I can contribute a voice and unique perspective as one of few underrepresented minorities currently in the major. \nThe reality is that the field is not very diverse and that many varying factors such as race, gender and socioeconomic status play a large role in why many groups don't have the opportunity to pursue a career in the field of technology. Change can start with us. \nTo me the iSchool is a community and a place to feel welcome. Within the iSchool I want to work to create a diverse and inclusive environment where we celebrate each individuals diversity and are able to have open conversations about diversity and representation. \nI want to work on creating more inclusivity and diversity in the iSchool through further working with the iSchool community to see what we can do to create opportunities for underrepresented groups and increasing our number of and awareness of marginalized groups within the iSchool and make all feel welcome. Not only this but I want to create a safe an open space where we are all able to share our own stories and celebrate our differences. \nAs your director of diversity I will do just this and want to work to allow everyone from all diverse backgrounds to not only know but to feel that the iSchool is their school. Thank you!"
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Sagar Surana",
				image: _2018_sagar,
				video: "https://youtube.com/embed/hZM6EvsL1rg",
				statement: "Hey Everyone! \nMy name is Sagar and I’m so excited to be running for Creative Director of IUGA! \nI love creating designs for anything and everything and have experience with it through my design internship in the past and involvement with Pixel Husky last year. \nI’m only a year old in Informatics and three years old in America but I found a home at the iSchool pretty quick. I think that was because we, as the informatics community, exemplify diversity and inclusivity and I truly believe that is our strength. If elected as your creative director, I want to be able to project these very values by incorporating them into our merchandize and designs. Equal representation is a very important part of strengthening diversity and I plan to do exactly that through the pieces I create. \nAside from that, I personally believe there needs to be a greater presence of informatics swag at our events and on campus in general. I plan to make several designs for various t-shirts, caps, pens, hats, posters, etc. and then bring them to all of you. I hope to increase accessibility to info merchandize by making sure they're available at events, fairs and maybe even by taking orders. \nLastly, this election is our chance to make a difference in the informatics community, so doesn’t matter who you vote for but don’t forget to exercise the power of your vote. \nGO DAWGS!"
			},
			{
				name: "David Lee",
				image: _2018_david,
				video: "https://youtube.com/embed/0NTJ5btitvc",
				statement: "My name is David Lee, and I am running to be the creative director of IUGA. I am running for this position because I find there is a dire lack of iSchool swag on campus today. I want to help the iSchool be a memorable and wanted major on campus by building a brand that expresses the sheer awesomeness of this community of iSchoolers. I hope to do this by bringing forth some of the sickest swag designs showcasing an iSchool brand that is unique and exciting. Being able to show who we are to the rest of the school will not only bring us closer together as a community, but also help express ourselves in a hip and stylish manner. \nA little more about myself, I am currently a first-year junior in Info with a focus track of HCI. By trade, I am an aspiring UX designer (*plug alert* - www.leedave.com). This background in design will most certainly help in the creative director role as they seamlessly go hand in hand. That, and my love for graphic design will help in making merchandise that hypebeasts would drool over. \nI’m not sure what else to write, so here’s the first part of the Bee Movie script to fill out the 300 word minimum: \nAccording to all known laws of aviation, there is no way a bee should be able to fly. \nIts wings are too small to get its fat little body off the ground.The bee, of course, flies anyway because bees don't care what humans think is impossible. \nYellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! \nLet's shake it up a little. \nBarry! Breakfast is ready! Coming! Hang on a second. Hello? Barry? Adam? Can you believe this is happening? I can't. I'll pick you up. Looking sharp. \nVote for David. \nDavid? Who’s David? \nOnly the coolest person ever! Now go vote for him!"
			},
			{
				elected: true,
				name: "Oorja Chowdhary",
				image: _2018_oorja,
				video: "https://youtube.com/embed/FgFBxxCSYXE",
				statement: "Hi guys! My name is Oorja and I’m running for Creative Director for IUGA! \nCan you design stuff? \nYes! I’m part of HCDE and I have experience designing swag/branding. I’m currently part of the branding team for UW Hyperloop, and I’ve made t-shirt designs for my old job at the science center. Contact me if you want some examples! \nWhat can you contribute to IUGA? \nAs someone who’s been a part of Informatics for two years, I’ve seen and experienced the community firsthand and have some ideas to help improve it! I believe having only the IUGA board to represent all the students in the community can be really tough, and so I would love to establish more “town hall” sort of meetings that allow students from across the major to give their input and thoughts on Informatics events, academic resources, etc. I believe this way we can create a community that is inclusive to all ideas. I also want to help find ways to ensure students don’t feel or get lost in their first years in Informatics. In the same sense, I’d also love to create swag that includes as much student feedback as possible. \nWho am I? \nI’m a giant loser who likes anime and memes. If you see me please say hi! I love meeting new people :^)"
			}
		],
		[Officers.IT]: [
			{
				name: "Kidus Sendeke",
				elected: true,
				image: _2018_kidus,
				video: "https://youtube.com/embed/aGuNgKgAJZM",
				statement: "I am very excited to be nominated and running for the Informatics undergraduate associations Director of IT position. The reason I am running is to create an awareness of the Information technology resources that current and prospective Informatics students have in the information school as well as anywhere on campus. As an information student, I believe it is my responsibility to create and provide platforms that contribute useful information to our students and organizations who look up to us as well as support us. \nIn order to accomplish this goal, I will work with our department’s IT division to provide technological tools and spaces that are available for our students. In addition, I will reach out to other student-led organizations and associations such as National Society of Black Engineers in which I am a current officer for and Society of Hispanic Engineers and other organizations in different departments and colleges to develop a relationship and mutual benefits. I have a great connection with my current and past professors and advisors in order to learn and provide what ischool students want in terms of accessibility in all technological aspects. \nIn addition, I will utilize my knowledge that I have gained throughout my classes in the information school to execute tasks that are assigned to me as well creating new features for our online presence. I will continue to uphold the values of the information school and the great officers that have come before me."
			}
		],
		[Officers.ACADEMIC]: [
			{
				name: "Wesley Wei",
				image: _2018_wesley,
				video: "https://youtube.com/embed/lZXcKh59jJw",
				statement: "Good day IUGA, \nMy name is Wesley Wei and I am running for the next IUGA Academic Director. First of all, let me mention how humbling of an experience it is to be nominated and running for this position. As a Taiwanese American, I grew up getting comments of, “where are you really from?” I don’t look American, but since I am also tan skinned, I get comments that I don’t look Taiwanese. So, I struggled in finding my own niche in society. When I first entered the Informatics program at University of Washington, I was amazed by the welcoming feeling that I got from the community. I am passionate about Informatics and similarly to the inviting experience I felt, I hope to use technology to make others feel welcomed too by providing academic support to IUGA or anyone interested in learning more about this wonderful community. \nAs a student coming from California, I understand the needs of students struggling to find their place in a different environment. I have too gone through the same thing, and I want to be able to provide academic support to ease the worries of other students. One of the best ways to make IUGA community feel more inclusive is to provide warm and inviting events to bring people together and learn more about academics. \nAs a previous RSO president for Husky Table Tennis Club, I believe I am capable in my skills of teamwork, leadership, and the spread of knowledge. With these skills I will host gathering events with the intention to share knowledge amongst one another. Although all Informatic students are talented, there can sometimes be that sense of insecurity amongst one another and I hope that I can provide for the extra academical resources to make all of IUGA feel more confident and also thus preparing for the real world. \nTo also gauge what students are interested or where they are struggling, I strive to provide as a communication medium and listen to the thoughts on what IUGA wants to learn. From the responses, I can better understand the academic needs of current students and create more opportunities, such as hands on projects, small academic seminars, hangouts with professionals to gain connections, etc. Whatever it takes, I will push to meet the needs of the students of IUGA. I want to be the Academic Director, because I want to help students be successful. Remember, there are multiple ways you can take to succeed, but follow my way, “Wesley Wei”."
			},
			{
				elected: true,
				name: "Joseph Tsai",
				image: _2018_joseph,
				video: "https://youtube.com/embed/a2HMDchbz7Q",
				statement: "I am the undoubtedly, unmistakably, no questions asked, definitive person to go to when someone needs help with technology. \nThat is… if that someone is my grandma. \nEven since my childhood, my grandma has always asked me to help her with technology. To be honest, it used to bother me. I would be playing video games and I would hear my grandma call from the other room (in Thai), 'Joseph! The computer isn’t working again!' \n Usually with a groan or heavy sigh (sometimes both), I would put my video games down to go help her solve the problem. Regardless of my attitude, every time I would help her she would thank me. 'Thank you, Joseph! Show me how to do that again so I won’t need to ask next time.' \nHer willingness to learn throughout the years taught me a valuable lesson about helping others: Don’t just offer a one-time solution. Work as a team to obtain the necessary knowledge and resources to succeed. \nThat’s what I want to do for you, with you. \nI want to understand the academic needs of both prospective and current Informatics students and proactively present resources that will help students succeed. I would love to hear ways you’ve academically succeeded (and failed) and pass on your experiences to students who are seeking help. I want to listen to your ideas, analyze the academic needs within the iSchool, and provide the resources to address those needs. I believe that the reason the iSchool thrives is because as a community of learners, we contribute to each other’s success. \nThe iSchool is a collaborative community: We support each other. We work together. We help each other grow. As your Director of Academic Support, that’s where I’ll keep my focus. \nBecause together, we are what makes IUGA so great."
			}
		]
	},
	2019: {
		[Officers.PRESIDENT]: [
			{
				elected: true,
				name: "Alejandro Huante",
				image: _2019_alejandro,
				video: "https://youtube.com/embed/cvzGNKX-6Ts",
				statement: "My name is Alejandro Huante and I am a first-generation transfer student from Lynden, WA. I am a Senior, and this is my first year within the amazing iSchool. UW and the iSchool was a destination I never imagined myself to be at. In high school, college was a thought that never crossed my mind. It wasn’t until two recruiters from UW reached out to me and believed that I could do it. Once I arrived at the UW, I wanted to give back to my community and show other students who are like myself that it is possible. Since then, I have become a Student Ambassador for Multicultural Outreach and Recruitment, an Orientation Leader for First Year Programs, a brother for Omega Delta Phi where I hold the current position of Social Chair, and a First-Year Representative for IUGA. These experiences have taught me how to overcome difficult challenges. I have grown to learn how to manage, delegate, and communicate effectively with my teams. I have also learned how to reach out to other organizations and set up successful social events throughout the year. Now that I am in the iSchool, I want to start giving back to the school and the community within. I want to be your next IUGA President and help continue the iSchool to grow. I want to bring our community together, and assure that the student voices are being heard. By bringing everyone together, we can help support each other and help each individual strive towards their future goals."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				elected: true,
				name: "James Kim",
				image: _2019_james,
				statement: "Hi! My name is James, and I am honored to accept the nomination for the IUGA Vice President position for the 2019-2020 year. I am lucky to be part of the ISchool community, which has been excellent. I want to maintain that and continue to make it better. As Vice President, my central goal will be around improvement. The iSchool has made a ton of progress becoming one of the most sought out majors at UW, but I believe we can continue to grow. I will represent you on the Informatics Program Committee to improve our already exceptional course curriculum, fix our registration, and push to get our own building. I will work tirelessly to achieve these goals. Through my experiences as a Teaching Assistant for INFO 200 and starting my own non-profit, I believe I have what it takes to fulfill the challenges of representing you as Vice President. As a TA, I've understood the passion that every student has to be part of the iSchool. I will do my best to continue cultivating that passion as your representative. As a founder, I've understood what it takes to run an organization with goals in mind. I will use my experiences to meet our goals. I will always be available for suggestions because I will need your voice to better represent you to help improve the iSchool the way we want it to be. I’m excited to get to know more of you all. And, it would be a great privilege to be your Vice President. \n Thank you!"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				elected: true,
				name: "Allison Lee",
				image: _2019_allison,
				video: "https://youtube.com/embed/cERbJnt8SQ8",
				statement: "As someone who traveled across the sea from the tropical islands of Hawaii to the wetness of Seattle, you know I mean it when I say the iSchool embodies the word ohana, or family. When I started taking Informatics classes, I was introduced to an engaging, diverse, and welcoming community. I was pleasantly surprised because I’ve never seen students so passionate about their department and supportive of each other before. Even as a prospective student, seeing memes on the IUGA Facebook page, this sense of community was evident. I mean, what other department on campus would prefix everything with an “i”? As Director of Public Relations, I want to continue to grow our ohana by connecting the iSchool community to prospective students, staff, and faculty alike and publicizing IUGA events. I believe our bond is what makes Informatics so different from other departments. That’s one of the main reasons why I applied for Informatics and so grateful to be a part of this community today. As an IUGA officer, I hope to grow and strengthen our community and look forward to working with you all. Please exercise your civic duty and go vote for the people who will represent you!"
			}
		],
		[Officers.OUTREACH]: [
			{
				elected: true,
				name: "Dayoung Cheong",
				image: _2019_dayoung,
				video: "https://youtube.com/embed/5L6EM_q1M1I",
				statement: "It’s not every day that I have to give a speech that’s going to be on the internet forever, but when I do, I sound like Chewbacca. Hi everyone! My name is Dayoung Cheong and I am so excited to be running for IUGA’s Director of Outreach position. This is my first year in Informatics and I already feel like I have gained so much from this community. From late nights in the TE lab to being on the TA team for info 201, I have met some really amazing people and would love the chance to help each of you guys reach any or all of your professional goals. The reason I want to be Director of Outreach is because of how much informatics has already helped my personal professional growth. Just from attending different informatics, IUGA and Winfo outreach events, I was able to start my professional journey here and find an internship, which definitely would not have happened if I didn’t have the amazing resources hosted by this community. As your Director of Outreach, I would be dedicated to finding resources and opportunities to connect students to the outside world. In our classes, we learn so many technical and hard skills that we sometimes forget about growing our professional soft skills. My job would be to help bridge the gap between the two. I would love the chance to help foster the growth of informatics and see how we can succeed professionally as a community. "
			},
			{
				name: "Chandrashree Karnani",
				image: _2019_chandrashree,
				video: "https://youtube.com/embed/YDMSBoQxFxk",
				statement: "Hi IUGA! \n I’m Chandrashree, and I am running to be IUGA’s next Director of Outreach. One of the most common questions I have continuously been asked by my peers is - What is Informatics? From my time at UW so far, I have realized that not many people are aware about this major. Informatics is often considered as a backup for CS, but this was not the case for me. My first priority had always been Informatics which helped me get direct admission into the major and I have been blessed to be a part of this wonderful community since day one. Networking, one of the key elements for professional development, can be a scary concept for college students who are transforming into working adults. I want to be able to help students build professional connections outside college. The process of finding internships and building connections in the industry can seem frustrating and difficult for many students and I want to be there to help them ease in the process. With technology rapidly growing and changing in our world, it is important to be aware of how these changes are affecting the industry. While classes teach us the hard skills, there still exists a gap in being connected to the industry. I want to be able to work towards bridging that gap. Some ideas that I have to connect students are  - hosting mentorship programs with industry professionals, having industry panel sessions, hosting networking nights and also having company tours and information sessions. Currently, I am an officer of an RSO on campus called NEXUS UW where I work towards connecting students with Seattle’s non profit organizations to enable them to work on live projects. I want to be able to do something similar for the broader iSchool community. I look forward to helping iSchool students connect to the resources they need to succeed. I would love to be a part go IUGA and help foster and grow the community even more! "
			}
		],
		[Officers.FINANCE]: [
			{
				elected: true,
				"name": "Kiran Pradhan",
				"image": _2019_kiran,
				"video": "https://youtube.com/embed/fmHqds765L8",
				"statement": "Hey there Info students! \n My name is Kiran Pradhan and I’m excited to accept my nomination for IUGA Director of Finance! I was immediately drawn to the iSchool when starting at UW because of the open-minded, friendly community that came with an studying an interdisciplinary subject like no other. I have enjoyed this year thoroughly getting to know many of you in the classroom setting. But I want to go beyond that and meet those of you I will not have classes with at more engaging community events that you will benefit from whether that’s in a professional, academic, or social context! As Director of Finance, I will get the opportunity to do exactly this! In this position, I get to look big-picture and think how to creatively implement changes that will better our community, while also managing our allocated budget in a way that best serves what you as the students in Informatics want to see. I have experience creating budgets and managing finances while serving as Treasurer for a non-profit organization where I worked to set up our bank accounts and even legally obtain 501(c)3 status! I love number-crunching and will work hard to maintain a smooth back-end so that we can continue to put on the events you love! This year, I have also been observing our current IUGA Director of Finance while serving as your First-Year Representative. I am learning the ins-and-outs of running this association and am full with ideas to make it a more welcome place for students, starting with organizing the TE lab and ideating events that include your professors! Meeting new people, hearing their experiences, and seeing from new perspectives is what I enjoy most about attending such a large university. But regardless the size of the student body, I wholeheartedly believe leadership is about the people who you give a voice to. As a liaison to administration of Informatics, I will be fully transparent and echo your sentiments accurately as I attend meetings on the Student Leadership Team. I am beyond excited to have this opportunity to get involved in the Informatics community, especially as Director of Finance, a position that plays to my strengths. I am hardworking and enthusiastic and ready to foster a more inclusive major community to facilitate making connections that help you succeed in school and beyond! \n Thank you!"
			}
		],
		[Officers.DIVERSITY]: [
			{
				elected: true,
				adminMessage: "Left office.",
				name: "Godgiven Reamico",
				image: _2019_godgiven,
				video: "https://youtube.com/embed/BNvQnBFyxMA",
				statement: "Hi! I'm Godgiven and I'm running for IUGA Director of Diversity! I feel so thankful and honored to be an Informatics student because it was my goal to study at UW. I grew up in Chicago, IL and when I was 21, I decided to move to LA. I packed all of my stuff and took the train halfway across the country to start a new life there, but well... things didn't work out the way I thought it would. I spent the next four years in California trying to make a living, while pursuing my dream of getting my degree. I am a first-gen college student, who has had to put herself through school while working full-time in order to survive. I have had a difficult past and I am candid about my experience whenever people do ask; I say this because I feel that when I speak up about my hardships and experiences, I hope to encourage others to do that same. I feel that the world would be less lonely when we stop hiding behind false masks that inevitably make everyone unhappy. Moving to Seattle and pursuing my dream at UW has been a daunting experience, and I was pretty scared of transferring into a major that was competitive. But I found that my fellow INFO students were kind, accepting, but most of all, supportive. I am grateful for everyone that has helped me transition into UW and I want to give back by becoming your IUGA Director of Diversity. I feel that I have a lot to offer as your Director of Diversity. I have moved around quite a bit, and have met all kinds of people. I'm still learning and by being an officer, I hope to keep learning about diversity and equity, in order to serve you and our program to the best of my abilities. I want to give back to the community that has given me so much, and I know will continue to provide me with many more opportunities even after I graduate from UW. And yep, that's Bill Nye (The Science Guy) in my picture. I worked for him when I was working at the law firm that represented him! He's the reason why I love science!"
			}
		],
		[Officers.CREATIVE]: [
			{
				elected: true,
				name: "Casey Tran",
				image: _2019_casey,
				video: "https://youtube.com/embed/CofyFytIsJo",
				statement: "Hey everyone! \n I’m Casey Tran, a first year Informatics student, and I’m running to be your next IUGA Creative Director! I have a background in design from taking design classes in the Informatics, HCDE, and also the Design department. I think it’s important for me to get a diverse background by learning from multiple disciplines. This has taught me that diversity, inclusiveness, and a strong sense of community is so valuable. I want to apply all of these principles if I get elected as Creative Director by building a team around me of those who wish to help in designing, continuing to ask for feedback and advice, and just in general keeping an open mindset. A lot of people have been curious and have asked me, what exactly does design mean to me? I believe that design incorporates a lot of things, but at the very core of design, it’s about solving problems. Everybody is a problem solver, so I believe anybody can help in designing. Another aspect of my life that I believe will make me an effective Creative Director is that I have a strong interest in fashion. Fashion to me is all about expressing yourself. Informatics is a big part of who we all are, and I want to design clothing and merchandise that starts conversations, and truly shows what Informatics is. The iSchool is full of bright, innovative, and loving people and I wish to help create gear and posters that represents that. Overall, I’m just really grateful for everything IUGA has done in helping me feel included in the Informatics community, and I want to give back by hopefully being your next IUGA Creative Director. Thank you!"
			}
		],
		[Officers.IT]: [
			{

				name: "Sean Kim",
				image: _2019_sean,
				video: "https://youtube.com/embed/S9Eae2ZsBwY",
				statement: "Hello IUGA! \n My name is Sean Kim and I am running to be your 2019 2020 Director of Information Technology. Fall quarter of freshman year, I joined a FIG and it was a time for me to get a feel for the college atmosphere but also a time to learn about my interests. I had a passive interest for Business which faded away quickly due to the lack of technical development. Next was computer science but where was the emphasis on users? The way we use so-called “tech”, what we build with it, and the like? Aren’t I, you, and we all users, per se, of technology? This is what I want to emphasize during my time as the director of IT for IUGA; to ensure that students know how to use the iSchool technologies and services, especially the latest tools that are to come during my term. Providing support in technology services for a vast array of people is second nature, as I have experience working as a Web Tools Consultant at the Odegaard Library as a Sophomore. During this time, I assisted students, faculty, and staff with services such as Canvas, Catalyst, Panopto, and Poll Everywhere. I have further experience working in IT as I have worked at the IT Helpdesk and this past summer, I interned at Expeditors as a PC Support Intern. My experience and ability to serve a diverse group of people will allow me to be successful as your Director of IT. My hope is to provide the necessary resources to help students, faculty, and staff thrive to learn new skills and find opportunities to grow. Thank you!"
			},
			{
				elected: true,
				"name": "William Kwok",
				"image": _2019_william,
				linkToPortfolio: "https://williamk.info",
				"statement": "Hi everyone! \n My name is William Kwok and I am running to be your Director of Information Technology. Previously as a Teaching Assistant for Client Side Development and as an Undergraduate Tutor, I noticed a lack of information on frequently asked questions, a lack of clear explanations and examples for all sections of courses to access, and a lack of ready help. I have already taken steps towards solving some of these issues with my Informatics Hub and Tutor Queue applications, but I believe a lot more has to be done in order for our Informatics community to flourish even more. My main goal as your Director of IT is to use technology to enrich the student experience in Informatics. First, I will hear the technological needs of our students and work closely with our department to make it a reality. I will work towards upkeep of all technology related to IUGA as well. Most importantly, I will use technology to increase the strength of connections within the Informatics community. I see the Informatics community as my second family. I want the Informatics program to grow and produce even more successful individuals. We all should want that. I will do everything I can to take large strides in that direction. The iSchool isn't just my school; it's our school."
			}
		],
		[Officers.ACADEMIC]: [
			{
				elected: true,
				name: "Shruti Rajagopalan",
				image: _2019_shruti,
				statement: "Hello IUGA! \n My name is Shruti and I am super excited to be running for the position of Director of Academic Support this year! Often times, when we think of academics, we tend to feel intimidated, stressed and scared. I strongly believe in creating a safe space for all types of academic and career interests. I hope to engage in the community in a way that brings the fun into education. I do realize that all of us have different strengths and weaknesses but with the right resources and support everyone can have a pleasant experience! Having moved to the US from Africa where I was not really exposed to technical or design classes has definitely been a challenge. However, through the support of iSchool advisors and the Informatics community I feel that I have managed to build a support system. I look forward to helping you connect with people who can relate to your interests and challenges to build your support system. As a Resident Advisor, I constantly try to foster a community that focusses on inclusivity and open-mindedness regardless of one’s interests. Similarly, as Director of Academic Support I hope to help continue to build an inclusive community amongst Informatics students. After volunteering for several years at local schools in Zambia, I have realized that working with the right people can help make school exciting and fun! Additionally, by helping out at non-profit organizations that work to provide education to low-income students, I have realized the impact academics can have on one’s life. Please feel free to reach out to me if you have any ideas or requests! I’d be more than happy to incorporate them. I hope to make this upcoming year one for the books! "
			}
		]
	},
	2020: {
		[Officers.PRESIDENT]: [
			{
				name: "Kiran Pradhan",
				statement: "Hey there Info students!\nMy name is Kiran Pradhan and I am excited to accept my nomination for IUGA President for the 2020 - 2021 year! When I began my university career, I was immediately drawn to the Information School because of our commitment to community and social good while studying topics that define the frontier of today’s tech-centric world. Over the past few years, Informatics has gained incredible traction becoming one of the most popular majors on campus. But as we continue to grow in size, I think it’s vital that we do not forsake the community we work so hard to foster. That is what I want to focus on in the upcoming year.\nI believe the feeling of community will be achieved when all Informatics students know each other by name. This will change the dynamic inside class and outside to be more collaborative in nature, which will no doubt increase the quality of work we put in and get out of our education. After all, studying is more exciting when you’re having fun! Check out my video below for details of how I want to tackle this next year!\nWhen I got into Informatics, I immediately wanted to get involved and joined IUGA as a First-Year Representative. This year I am serving as your IUGA Director of Finance. Next year will be my third year in this major and the experiences I have had so far creating new events like Demystifying the Tracks, managing budgets, and bringing your opinions and suggestions to the Student Leadership Committee has prepared me for the position of IUGA President. I know the ins-and-outs of running this association and am full of ideas to make Informatics a more welcoming place for all students!\nI am beyond excited to have this opportunity to lead IUGA and represent Informatics to faculty and staff. I am hardworking and enthusiastic and excited to foster a more inclusive major community to help facilitate making connections with your fellow students and make school a fun place to be!",
				image: _2020_kiran,
				video: "https://www.youtube.com/embed/N84pVuHgOlg",
				elected: true,
			},
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Jacinda Eng",
				statement: "Hello! My name is Jacinda Eng and I’m excited to be running for IUGA’s Vice President position for the 2020-2021 year. A little about me, I’m a sophomore from Bellevue, WA and this is my first year in the iSchool! I’m so grateful to be a part of this welcoming community that has helped me truly feel a part of this large university. In high school, I wasn’t sure what I wanted to study until I heard about Informatics at UW’s admitted student preview day. Hearing that I could creatively connect individuals to technology sparked my interest in Informatics, but what stood out to me was the supportive and inclusive iSchool community that provided me academic and professional guidance even as a prospective student. After getting the opportunity to be a part of the iSchool, I planned on giving back to provide the next generation of Informatics students the same encouraging community I received. This year, I got the opportunity to be an IUGA first- year representative where I helped prospective students connect with the iSchool through student panels to hackathons. I have seen collaboration be a core value of the iSchool and I hope to continue to build on collaboration for the coming year. I will work hard in bringing the student body closer together through creating opportunities where students can voice their thoughts and challenges to officers and faculty. As college is a time for personal and professional growth, I hope to provide opportunities for open discussions about how to improve the ethics of technology, invite industry professionals to share their work to inspire students, and reach out to companies to create company tours and workshops. I’m always available to hear your thoughts to better improve the iSchool and can’t wait to connect with you all! Thank you!",
				image: _2020_jacinda,
				pdf: _2020_jacinda_infographic,
				elected: true
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Andrey Butenko",
				statement: "Hi! My name is Andrey Butenko (he/him/his) and I am excited to be running to be your next IUGA Director of Public Relations.\nIn this role, I have two objectives. First, I believe that mental health is an important topic at the University of Washington, and I hope to organize accessible de-stress and self-care events so Informatics students can take time for themselves amidst studying and job-hunting.\nSecond, I hope to further develop our sense of community and belonging through organizing social events that bring us together. I am continually impressed by the collaborative, supportive, and welcoming environments I find in my Informatics courses. I believe that our community makes Informatics really special and I am excited to help support it.\nI feel that I would be very effective in this role: as the current Assistant Resident Director of Haggett Hall, I help develop a sense of community among our 400 residents and 25+ active members of our community council through advising and organizing building-wide initiatives. I also regularly send out announcements and design marketing for our diverse population of residents.\nTo wrap up, the Informatics community is special and I am excited to publicize IUGA events, bring us together, give us the opportunity to de-stress, and create connections within our community of current and prospective Informatics students. I hope to meet many of you and serve all of you as your Director of Public Relations. Thank you for your time!",
				image: _2020_andrey,
				video: "https://www.youtube.com/embed/8kLZvIm1o8Y",
				pdf: _2020_andrey_resume,
                elected: true,
                adminMessage: "Elected as Director of IT"
			},
			{
				name: "Cheryl Wu",
				statement: "Hi there, my name is Cheryl Wu and I’m running to be your Public Relations officer! Informatics has a special place in my heart because of all the amazing people that are in it. In fact, it was because of the iSchool that I was able to figure out more about myself. My love for writing and tech has led me to become a UX Writer in the future. Using my words in order to bring ease and be informative is what I want to do. I believe that words have so much impact on us and I want to exercise my writing skills to inform students and staff clearly and concisely. I hope to act as a bridge between students and the school in order to integrate others with each other to create new ideas and deepen our community. I also want to be able to meet and interact with more people who are connected to the iSchool since I enjoy getting to know others. There are so many bright minds and genuine personalities around me and I want to give back by being a supporting and engaging officer that connects people with each other. Thank you for reading and I hope to meet you all!",
				image: _2020_cheryl,
				pdf: _2020_cheryl_infographic,
				elected: true
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Suyash Ahuja",
				statement: "Hey Infam! One of the best moments in my life was the day I was accepted to the Informatics program and I am truly grateful for every opportunity this major has offered me. I am excited to run for Director of Outreach because as important as learning in the classroom is, I believe it is equally important to encourage the professional opportunities that classrooms cannot offer. As the Director of Outreach, I would love the opportunity to give back by organizing professional events and fostering alumni ties.\nBesides Informatics, I am pursuing the Foster Sales Certificate and the Husky Leadership Certificate which has added to my connections. I would love the opportunity to help foster IT development and see how we, as a group, can be professionally successful. My goal would be to make Informatics more recognizable in the industry. Getting in contact with experts in my field of interest was what greatly encouraged me to pursue my interests as they showed me the world of endless possibilities through their own journeys.\nWe learn so many technical and hard skills in our classes that we sometimes forget about our soft professional skills. As the Director of Outreach, I would love to bridge this gap and see the Informatics Committee grow.",
				video: "https://www.youtube.com/embed/sY5YXmjXznw",
				image: _2020_suyash
			},
			{
				name: "Ana De Las Alas",
				statement: "It’s funny how a little over two years ago, I could not tell you what the word “informatics” meant. With a super lucky guess, I could have said it was the science of information, but nothing more beyond that. Fast forwarding to the present, it’s gained a special meaning to me and transformed into a word that defines my whole college journey.\nHey everyone! My name is Ana and I am a third-year undergrad from the Bay Area. In my time as an Informatics student, I've grown to love and appreciate the supportive community I've unexpectedly found here. With each new class and group project, I’ve been surrounded by peers who encourage and challenge me, both academically and personally. The iSchool is a place where my ideas take flight. A place to express myself. A place that's gradually becoming my home away from home. I am running for IUGA's Director of Outreach to further immerse myself in this community and shape this program into a space my peers can call home, too Outreach is all about bridging the gap between students and professional opportunities. Some of my biggest achievements, including getting my first on-campus job and landing a summer internship, stemmed from my attendance at Informatics-related events. I understand how pivotal these opportunities can be and I hope to use this role to promote events and support my peers in reaching their professional goals.\nCollege flies by fast. I hope to spend my last year here at UW investing in the communities I'm going to miss the most! As Director of Outreach, I'd be thrilled to serve my peers in the iSchool—the motivated, creative individuals whom I am lucky to collaborate with, lean on, and be inspired by!",
				image: _2020_ana,
				extraImage: _2020_ana_infographic,
				elected: true
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Alexander Sanchez",
				statement: "Hi IUGA! My name is Alexander Onesimo Escalera Sanchez, or just Alexander Escalera! I am honored to be running as your Director of Finance for the 2020-2021 school year.\nComing into UW and the Informatics Program, I was nervous about learning to code and the possibility of not being able to make friends. It was thanks to IUGA and its events that I was able to make long-lasting friendships and have fun while learning about different topics in the field. Having this community has made my college experience a great one. I want to give back to the organization so others can further enjoy or become interested in Informatics by allocating funds and responsibly using the budget for events, whether they be for our social or professional development.\nGrowing up as a first-generation American with a family who did not know how to speak English quickly introduced me to financial topics and management at a young age to help them understand and make sure we were spending our money wisely, which helped me become more financially literate.\nI have dedicated most of my undergraduate career in conducting research with the iSchool Game Research Group. Conducting research under their supervision has given me analytical skills by looking at both quantitative and qualitative data, helping me understand different points of view and the needs of users, as well as how to read different statistics. As an aspiring researcher, I am eager to learn new things and hear the perspectives of teammates and others.\nThank you for giving me the chance to run for this position. We can work together to ensure we support ourselves and the iSchool to continue our development and the development of the program. I hope you will allow me the chance to become your Officer of Finance!",
				image: _2020_alexander,
				video: "https://www.youtube.com/embed/Jh6YTjyGans",
				elected: true
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Aaron Zhao",
				image: _2020_aaron,
				statement: "My name is Aaron and I would love to be your next Director of Diversity.\nAt the age of 14, I moved to a small town called Colesville in Maryland for high school. On my first day of school, a girl yelled out \“What is wrong with his eyes\” to the whole class as soon as I entered the classroom. I was rather confused at that moment. But I soon realized that this very incident is called racism. \nThis makes me think about what kind of community do I feel belonged after I came to college.  I want to belong to a community where it is not the shared identity that brings people together but rather our eagerness to learn for each other’s differences. I felt that sense of belonging ever since my first Informatics class, my first game night with IUGA, and my first Hackathon with WINFO. \nThat’s why I want to take on the role of Director of Diversity. I truly believe that at the iSchool, we don’t just talk about our commitment to diversity, we put them into actions. Thus, here are some of the things I will do as your Director of Diversity:\n\t- Continue fostering our relationship with K-12 schools in Washington with my connections in UW Dream Project\n\t- Work with prospective and transfer students, providing a welcoming, inclusive, and engaging environment for them. \n\t- Work closely with WINFO’s Director of Diversity Efforts when it comes to event planning, diversity outreach efforts, and communicating the students’ needs in the Diversity Committee.\n\t- Promote Diversity resources from various departments on campus such as OMA&D and UAA.\nVote for me! Together, we can make sure that everyone, no matter their race, ethnicity, religion, socioeconomic status, gender, and sexual orientation can feel welcomed and respected as a human.",
				pdf: _2020_aaron_resume,
				elected: true
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Josephine Liu",
				statement: "Hi there! My name is Josephine Liu and I’m not used to typing more than 280 characters at a time (thanks Twitter). Having been admitted after my freshman year, I initially felt very intimidated being surrounded by seemingly mystical upperclassmen. Thankfully, I was quickly disproven and welcomed into an open-minded and encouraging community. To me, the Informatics major is beyond a study, but a community where we are creative, constructive and cohesive.\nShy and easily intimidated, I never thought I would be want to be an officer. However, through my time being an INFO 362 TA, I realized the impact that leadership can make on creating a safe environment where everyone feels like they have a place to voice their opinions. Hence, as someone who's dabbled with art and design for a long time, I see running for IUGA’s Creative Director as the perfect opportunity for me to give back to the community.\nWhile I've always been more into traditional art than graphic design, I have over half a decade's worth of experience in making merchandise from tabling at events on top of being the current UW Sustainability Campus Sustainability Fund graphic design. To me, the best part of designing and making swag is the collaboration aspect! Seeing the people within the major, regardless of their track or cohort, bond through proud feelings of representing their community is what solidifies my belief that design can easily help transcend superficial dividers. Through taking part in IUGA, my hope is to continue to foster the same warm culture that welcomed me when I first got into the program. Thank you!",
				image: _2020_josephine,
				extraImage: _2020_josephine_infographic
			},
			{
				name: "JoJo Saunders",
				statement: "Hello hello!\nMy name is JoJo Saunders, I'm a second-year student in the iSchool with a passion for education and design, and I'm honored to be running for the position of IUGA Creative Director! The iSchool was my first ever real exposure to the possibility of working within the technical world. I've always been passionate about design, videography, and creating things around me as extensions of myself, but I never saw the connection to a career. Taking INFO 200 and learning about informatics changed that for me. For the first time in my life, I realized the passions I had now had a connection to a career and to helping people. I truly found a path I was excited to pursue.\nThis school has given so many people, myself included, a chance to explore within the world of information in a way we might not have thought we could do.  I want to help ensure people know that the iSchool is about giving students the ability to use their passion to help people through the world of technology and information. The Creative Director role has mainly been the role of developing a new swag for the iSchool, but I want to take it a step farther.\nI want to help rebrand and update the iSchool's visual branding and push us to show that the iSchool is about inclusion, passion, potential, and people. Developing new merch ideas, designs, and videos are some of the steps I want to help take to showcase what an amazing school we have, but overall I want to work with IUGA, the iAdmin team, and the rest of you to showcase to UW and the outside world what believing in people's passion and potential to make change through technology and information can do.",
				image: _2020_jojo,
				extraImage: _2020_jojo_infographic,
				elected: true
			}
		],
		[Officers.IT]: [
			{
				name: "Nam Pham",
				statement: "HI! I’m Nam Pham and I’m very thankful that I’m nominated for the IUGA Director of Technology role and I’m excited to be running for the position!\nI’m running to enrich and improve of the vast information technology resources that we have in the iSchool for current and prospective students in Informatics. My experience as a First Year Representative has given me a chance to get a good perspective on how the role works and what is expected from this position. My goal as your Director of Technology will be to built upon the strong foundation laid by my predecessor and be a liaison for Informatics students to communicate with the department about their information technology needs. One thing I realized after being here for a year is how tight knit the Informatics community is, and I will take large stride to maintain and improve that bond. ",
				image: _2020_nam,
				pdf: _2020_nam_resume,
				adminMessage: "Departed office",
				elected: true
			}
		],
		[Officers.ACADEMIC]: [
			{
				name: "Joseph Altamira",
				statement: "Hello!\nMy name is Joseph Altamira, I am your current first-year representative. I would love to continue my work of a positive force within IUGA and the iSchool.\nAs iSchool students, we are currently ranked at #20 (out of 60) for the highest GPA by the department. My goal is to maintain and create an upward trend in this statistic by allowing an environment where, as informatics majors, we all thrive and prosper. In addition, I hope to continue my work in broadening the horizons of informatics by helping preserve the diversity within our major.\nAs a first-year representative, I have been involved with many of the events that were held this year by both Women in Informatics and IUGA. The very first large scale event that took a lead role in was the ‘iTech Symposium’. The symposium showcased the many resources we had at the University of Washington and specifically the Information School, which hopes to promote our amazing major. The second event was Demystifying Tracks, which further helped prospective students understand the types of careers that informatics majors can venture in. Lastly, I will be highly involved in the ‘Hack for Social Good’ event that will be set in the spring quarter. All of these events are so we continue to maintain high standards within our students.\nI have attained good experience in the first year that I have served that iSchool, I wish to use what I learn and put them into good use by becoming your next Director of Academic Support.",
				image: _2020_joseph,
				pdf: _2020_joseph_resume,
				elected: true
			},
			{
				name: "Victoria Huynh",
				statement: "Hey IUGA!\nI’m Victoria and I’d love to have the honor to be your Director of Academic Support!\nMy goal is to help equip every student in the iSchool with the tools they need to make the most out of their experiences here. There’s so many ways we, as college students, wind up feeling helpless because of a lack of support or ability to obtain information—despite being in a major that literally revolves around information.\nFor instance, I didn’t know how the DRS Center could help me until my sophomore year, so there were several quarters I struggled with both academics and mental health due to not knowing who I could reach out to. I’d never want anyone else to spend college like that, so I plan to actively reach out to all students and provide them with the resources they’re unaware of. I try to do that now as a TA for INFO 200 and by engaging with younger students outside of school through organizations like Girls Who Code!\nOn a wider scale, I know from talking to my peers who also joined the iSchool later in their college career; a lot of us are in a spot where so much of college has passed us by, yet there’s still a good chunk of college that we want to explore to the fullest. I plan to be the one who helps us navigate the way forward; whether it’s helping you decide your track, listening to the interests of students in each track, helping people figure out how to apply to that research position or internship, or just as a shoulder to lean on when you’re stressed in the TE Lab—I have so many ideas for how to help us all make the most out of our time together!",
				image: _2020_victoria,
				linkToPortfolio: "http://www.victoriahuynh.dev"
			}
		]
	},
	2021: {
		[Officers.PRESIDENT]: [
            {
                name: "Aaron Zhao",
                statement: "Hello Info students!\nMy name is Aaron Zhao and I would love to be your next IUGA President. \nThis past year presented unique challenges for us: Our interactions are limited to Zoom and we feel disconnected from our friends and classmates. As we move onto the new year, it is an incredible opportunity for all of us to rebuild our relationships and community that we might have lost during the Pandemic. Through my experiences as a TA, an IUGA Officer, and an Undergraduate Peer Advisor, I have been able to understand what makes our program so great and unique, and the struggles we are going through as students in the recent years. \nAnd that’s why I want to be your President: I want to make sure your voices are heard as our program continues to grow. I want to push for the changes you want. And I want to make sure that we continue nurturing our community to include everyone, no matter your background. Check out my video below for more details on how I want to tackle this next year!\nDuring my past two years as an Informatics student, I have taken on many initiatives. As INFO 200’s TA, I get the opportunity to meet and mentor many prospective students. As your Director of Diversity Efforts, I get the chance to organize IUGA’s Care Package, host FearLess, Tech More, a tech challenge reaching out to high school students, and help out with many other events. My experience working with faculty, staff, and fellow students has prepared me to serve you as IUGA President. \nI am grateful for the opportunity to serve as your IUGA President. And I need your help, your vote, your input, your voice, and your criticism. Together, we can make iSchool a more inclusive, stronger community.",
                image: _2021_aaron,
                video: "https://youtube.com/embed/VyoSxBRF3lo"
            }
		],
		[Officers.VICE_PRESIDENT]: [
            {
                name: "Justin Zeng",
                statement: "Hey there Info!\nMy name is Justin Zeng and I'm stoked to accept my nomination for IUGA's Vice President position for the 2021-2022 school year! Starting at UW as an Informatics Freshman Direct Admit during COVID-19 wasn't quite what I expected. Although I've found it particularly difficult to get to know more people, I have always been drawn by the open-minded, friendly, and motivated community of the iSchool. \nExperiences that I've had that make me qualified for this position include being the First-Year Representative for IUGA as well as the Director of Public Relations for SUDO. As your First Year Representative this year, I've had the pleasure of meeting a lot of you from organizing popular social events like the quarterly game night and new professional events like the PM speaker panel series. But I want to go beyond that and get to know those of you who don't really attend these events. Through being the Director of Public Relations for SUDO, I learned the importance of open communication and transparency as well as being adaptable to different situations. This is why as Vice President, my goal is to provide you with the opportunities and events that you want. I will work hard with the Director of Public Relations to provide consistent ways to support students from different time zones by hosting events in times that work for everyone. I plan to build a collaborative community after the devastation COVID-19 caused on our community. I want to also coordinate with the Director of Outreach to secure outside sources like sponsors for game nights, guest speakers, and even company tours when we are back together in person. I am beyond excited to have this opportunity and can't wait to connect with you all! Thank you!",
                image: _2021_justin,
                pdf: _2021_justin_infographic
            }
		],
		[Officers.FINANCE]: [
            {
                name: "Sachi Figliolini",
                statement: "Hello Informatics Students! My name is Sachi Figliolini and I am excited to be running for IUGA’s Director of Finance for the 2020 – 2021 school year.\nAs a freshman direct admit to the Information School, I am so grateful and eager to be apart of this amazing community to collaborate and learn from fellow students. This year, I had the opportunity to be an IUGA first-year representative where I learned more about the iSchool community, while helping and observing what leadership looks like in an online environment. I learned the importance of building community and maintaining events to keep students motivated to learn and communicate.\nWith this position as Director of Finance, I want to help this community continue to thrive. I will listen to the concerns and opinions of the student body to help allocate the budget in a way to best serve students.\nI have experience working with managing finances in my high school student council, where I managed different budgets for all school events and resources that were needed by different leadership groups and classes. I found ways to fundraise or create merchandise with a restricted budget and distributed it by listening to student voices.\nAs your Director of Finance, I would like to act as a liaison between the student body and the administration to support IUGA by looking at the big picture and allocate the budget meaningfully to serve students. I am enthusiastic to start working with this professional, hard-working community to help students in the iSchool succeed.\nThank you!",
                image: _2021_sachi,
                pdf: _2021_sachi_infographic
            }
		],
		[Officers.CREATIVE]: [
            {
                name: "Chang Zeng",
                statement: "Hello!\nMy name is Chang Zeng, a third-year student in the iSchool. I am glad to have the opportunity to run for the position of Creative Director in the IUGA team. I have been always passionate about visual design and have half a decade of experience of designing key visions and event advertising materials. Before entering the University, I have not considered too much of how to convert my passion into a career. Taking INFO 101 during my first quarter answered the question of where and how I can contribute my passion and what are the meaningful things I should do to help more people. \nI received huge amounts of support from people in the iSchool during the anxious application days, and I gradually understood the core value in the community of inclusion, diversity, and creativity. I want to uphold these ideals and maintain the image of the iSchool as a place where people who are passionate about information technology and innovation can interact, explore, and help create a better world. The position of Creative Director allows me to contribute my knowledge and experiences to meet these goals. \nAlong with collaborating with other officers holding and advertising IUGA events, I want to illustrate the creativity, diversity, and passion within every person in the iSchool. By upgrading and uniform the iSchool visual elements, I want to make the iSchool brand recognizable throughout the campus. In our posters, banners, and merchandise, applying these visual elements will help popularize the iSchool icon and draw more people to understand what the iSchool is and what ideas we hold. I want to be part of the IUGA team, support people in/out of school like people supporting me, spread our enthusiasm and vision to wider audiences and draw my life at the iSchool to perfect end.",
                image: _2021_chang,
                extraImage: _2021_chang_infographic
            },
            {
                name: "Timothy Joo",
                statement: "Hello iSchool students! \nMy name is Tim Joo and I’m a junior in the iSchool with a focus on Data Analytics, UX Design, and Project Management. A little bit about myself is that I’m a first-generation Korean American from Tacoma, WA. Overall, I couldn’t be more excited to run for this position as Creative Director for the 2021-2022 School year! \nA past experience relating to this position is with my own personal photography business. I’ve been shooting photos for the last 5 years, ranging from portraits, weddings, events, high school seniors, college graduations, family, and even engagement photos. My absolute favorite aspect of photography comes with the emotions that I’m able to capture for each person that I work with. I hope to capture all of the best moments for the students within the iSchool and help highlight all the incredible feats that the students do achieve. \nAnother recent experience comes with my 2 years working in professional videography settings. The power and emotion that can come from a single video are truly an incredible thing. I hope to evoke more of this to help unify and bring our students together through the year to come. \nAt the same time, I’ve led as the creative lead for the past 3 years at my college fellowship group, ConXion. I’ve built up our team from the ground up and have experience working alongside other students to create incredible pieces of work. \nOverall, my goal is to bring my past experiences in the creative field to help the iSchool students shine brighter to the world around us. IUGA has made a tremendous impact on my experience as an Informatics student and my goal would be to continue its vision of welcoming future students and truly making the iSchool their home away from home.",
                image: _2021_timothy,
                pdf: _2021_timothy_infographic
            },
            {
                name: "Anika Mishra",
                statement: "Hello! I’m Anika Mishra, a junior in Informatics, and I’m so excited to be running for Creative Director for the 2021-2022 school year!\nWhat makes the iSchool truly incredible is its people. From the first INFO course I took, I knew that this community was special, and I knew I wanted to be more involved. After getting accepted, it wasn’t long before I felt like I belonged to the community and could count on those around me. \nIUGA has played a huge role in making me, and countless others feel welcome, and that’s why I’m running to be an IUGA officer. From Portfolio 101 to Ergonomics Workshops, to working with admin to voicing student thoughts, I’ve felt supported in every way possible. \nAs IUGA Creative Director, I want to help support the entire Informatics community, and make sure everyone has the resources they need to be successful. I’m committed to upholding the IUGA branding across material, in helping create new ways to share and discover content, and in helping make sure you can rep the iSchool wherever you go. \nI’m currently a Campus Tour Guide, a TA for INFO 498A, and Marketing Officer for Women in User Experience. Through each of these roles, I’ve not only learned organizational skills, but also the importance of being communicative, dedicated, and persistent. I’ve also worked as a UX Designer at three Seattle-area startups, and was previously Recruitment Chair for my design fraternity. I love design, and I love making things, and I’d be honored to be IUGA’s Creative Director!\nI want to make sure that everyone feels comfortable sharing feedback, thoughts, and critique, and that everyone in the iSchool community continues to feel like they belong. Thanks for reading, and don’t hesitate to reach out :)",
                image: _2021_anika,
                pdf: _2021_anika_infographic
            }
		],
		[Officers.PUBLIC_RELATIONS]: [
            {
				name: "Augene John Pak",
				statement: "Hello IUGA Students! My name is Augene Pak and I am excited to be running for IUGA’s Director of Public Relations for the 2021–2022 school year. \nAs a freshman direct admit to the Informatics major, I have been grateful to be a part of this community that brings us together and allows us to collaborate and benefit from each other. I believe that IUGA is a truly amazing opportunity to connect with others in the major on a communal level; while our major itself is open-ended and allows for various career opportunities, I feel like the close-knit nature of the major largely originates from organizations like IUGA tying everybody from the major together. With this position as Director of Public Relations, I want to help IUGA continue to grow through providing an improved platform that connects the public with the various events that we would plan. \nI possess ample experience in public relations, as I worked with public relations for both my high school’s Academic Coaches department and a nonprofit organization Hugs for Ghana. Through experiences in both, I amassed crucial communication skills with the public regarding marketing and advertising events and utilizing social media as a mean for communication. \nLastly, I am extremely enthusiastic to begin work as the Director of Public Relations and do my part in improving public relations within the IUGA community and therefore the experiences of every Informatics student. \nThank you! \n(I have attached a portfolio containing a compilation of my past work)",
				image: _2021_augene,
				pdf: _2021_augene_portfolio
			}
		],
		[Officers.OUTREACH]: [
            {
				name: "Kelsey Lu",
				statement: "Hi there! \nMy name is Kelsey Lu and I’m excited to run for the 2021-2022 Director of Outreach position! I’m currently a sophomore from the Bay Area and a first year student at the iSchool. When I got accepted into Informatics, I was eager to get as involved as possible. It didn’t take long for me to feel comfortable in this new community, and a big part of that is due to IUGA. From joining portfolio 101 events to chatting with fellow INFO students, I loved how everyone is so supportive and passionate about the field. IUGA has helped me feel like I’m part of a community even though I’m 954 miles away from Seattle. \nI’m running for the Director of Outreach position because I want to plan events similar to the ones that helped me grow professionally. I’ll continue to organize informational sessions, but I’ll also increase the amount of events with companies. Since everything has gone virtual, it can feel harder to connect with professionals. However, I’ll work to bridge that gap by planning networking workshops and Q&A sessions with employers. This way, students can feel prepared and comfortable asking questions once they open those zoom meetings. I’m confident I can use my experiences in organizing, planning, and marketing to promote events and highlight resources that help students reach their professional goals. \nThere’s so much to learn in Informatics that it can feel overwhelming at times. I hope I can ease that stress and create an environment where everyone feels heard and supported by organizing valuable workshops and events. \nThank you!",
				image: _2021_kelsey,
				pdf: _2021_kelsey_infographic
			},
            {
				name: "Shruti Kompella",
				statement: "Hey I'm Shruti Kompella and I'm running to be your next Director of Outreach!\nWhen I came to UW, I knew I wanted to do something related to technology but I wasn't sure what to major in. After taking INFO 200, I knew I wanted to pursue Informatics because of the incredibly supportive community who encouraged me to be well rounded regardless of my track. Although the tracks students pursue in this major are diverse, everyone had something interesting to bring to the table during discussions and projects and it was the most welcome I'd ever felt since coming to UW. I knew I'd found my place and I want to help other students find their community at UW and continue to grow.\nAs Director of Outreach, I want to bring back more in person tours of local Seattle offices! We haven’t had those much this year because of the pandemic and I’m excited to organize visits with companies and meet with current employees. I also want to continue to host professional development workshops such as resume and portfolio review. However, I also want to host general workshops for students starting their internship/job search that give them tips and resources on where and how to apply and specific workshops for each INFO track. I was pretty confused when I started applying and talking to other informatics students in the same boat helped me a lot with applications. I also want to continue to update the IUGA Medium blog! There’s some great advice about classes and applications on here and I want to continue to contribute to it and make sure that different backgrounds and different aspirations are shown on the blog. \nExcited for the next year!",
				image: _2021_shruti,
				pdf: _2021_shruti_infographic
			}
		],
		[Officers.DIVERSITY]: [
            {
                name: "Yenny Park",
                statement: "Hi, my name is Yenny and I am running to be your next Director of Diversity Efforts! I am a sophomore majoring in the Human Computer Interaction track of Informatics and was admitted as a freshman in 2019. I grew up in a variety of academic settings. I attended private schools, public schools, and even schools abroad. Each time I was placed in a new environment, the idea of being included and represented in unfamiliar settings overwhelmed me. In certain settings, there were definitely moments I felt discriminated against and disrespected whether it was intentional or not. That is where my passion for diversity and inclusivity stems from. \nThere are many students in the Informatics program, and everyone comes from different backgrounds and stories. In such a community, while it can be difficult to create an environment that equally hears all of these voices and recognizes the differences, I have always felt accepted and heard. Within classes, events, and even just light conversations with people in this community, there has never been a moment where I did not feel appreciated. \nI would love to continue promoting this inclusive environment as a Director of Diversity. By working with the Diversity Programs Advisor, the Diversity Committee, and other diversity promoting RSOs like WINFO, I want to organize meaningful, diverse events for the iSchool. I will strive to ensure that current students and prospective students all feel welcomed and safe in this environment. As an open-minded and dependable candidate, I can promise my commitment to this role and its responsibilities.",
                image: _2021_yenny,
                pdf: _2021_yenny_infographic
            },
            {
                name: "Pranav Shekar",
                statement: "Hello! My name is Pranav (they/he) and I’m a second-year iSchool student hoping to be your Director of Diversity! \nAs a non-binary queer South Asian in Seattle, identity has always been centered within my life. Understanding identity as important and fluid, I have consistently focused my efforts on fostering environments that are conducive to growth, healing, and collaboration. Working on K-12 sustainability curriculum, ethical childcare, and worker’s rights, my first two years at the University of Washington have allowed me to find identity within community and myself - through my experiences inside and outside UW. \nLooking forward, as Director of Diversity, I aim to facilitate identity-making spaces within the iSchool. Oftentimes, it’s simple to conflate diversity with representation. Instead, I hope to push the iSchool for diversity that maintains a proactive awareness of race, ethnicity, religion, sexuality, gender, socioeconomic backgrounds, etc., and the disparate structural and interpersonal barriers that impact students and faculty. \nGenerating challenging conversations with leadership, I want to push the iSchool to be a major and community intent on cultivating students invested in equity; a community that is not reactionary, but radically becoming better. Working with the Diversity Programs Advisor, Diversity Committee, IUGA, and various groups and RSOs, as your Director of Diversity, I will strive to prioritize the demands of the people and our spaces. \nIn my time within the iSchool, I have greatly admired the conversations faculty and students have had and strongly believe I have the dedication to expand and cultivate those same discussions. At the intersection of tech, design, and human values, it’s necessary that the iSchool has a distinct awareness of the nuanced socio-technical impacts technology has had and continues to have and I hope to be part of a group of people dedicated to understanding and highlighting that. Thank you!",
                image: _2021_pranav,
                pdf: _2021_pranav_infographic
            }
		],
		[Officers.IT]: [
		],
        [Officers.ACADEMIC]: [
            {
				name: "Kavya Iyer",
				statement: "Coming from a high school graduating class of 66 people, I was terrified of how huge UW would be. How would I make friends, and find a space for myself at this school? \nAfter I took INFO 200 and 201 in my sophomore year and got to know the professors, TA’s and more about what the iSchool stood for, it was clear to me that Informatics would be the perfect place for me to call home at the UW. Once I was accepted to the program, I knew I wanted to help other people like me find their community in college as well. By working as an Informatics Peer Advisor and a Tour Guide with the Office of Admissions, I get to learn firsthand the academic and emotional support both current and prospective Informatics students need in order to thrive. With the pandemic winding down and us transitioning back to on-campus life again, I believe my perspective is necessary in order to make sure no student is left behind. \nAs your Director of Academic support, I will do my utmost to ensure every student at the iSchool has access to the resources and materials they need to succeed at school – whether its organizing capstone groups, hosting social events, or building mentorship programs. Informatics is a close knit community, and my goal as IUGA’s Director of Academic Support is to make our connections even stronger!\nPlease feel free to Facebook message me if you have any questions or just want to chat! Thank you for your time, I look forward to making the 2021-22 school year the best it can be 😊  \nKavya ",
				image: _2021_kavya,
				pdf: _2021_kavya_infographic
			}
        ]
	}
}

export const WINFO_ELECTIONS: Elections = {
	2017: {
		[Officers.PRESIDENT]: [
			{
				name: "Tiffany Chen",
				elected: true,
				image: _2017_tiffany,
				video: "https://www.youtube.com/embed/RQZs_cFoHuY",
				statement: "Hey there INFO! I’m Tiffany Chen, and I’m running for president because Informatics is so much more than just a major to me - it’s a community. Being able to work with winfo officers as a First Year Representative these past few months has been among the best opportunities I’ve had to give back to info, and continuing with winfo in the capacity of president would allow me to do so much more. I consider myself extremely fortunate to be a part of Informatics, and the one who led me to this major left me with an idea: that he had someone who helped him find his home in the major, which inspired him to help others find their place, creating a cycle that would help Informatics continue to embody the welcoming environment that distinguishes it from other majors.\nThat community is something I’ve always felt is inherently part of what Informatics truly is. I want to keep building this community up, making it stronger and always trying to find new opportunities not only to engage with all the brilliant students that make up info, but also to cultivate new opportunities for informatics students wherever possible. That might be through making new connections for more company tours, or expanding our hackathon to have even more great sponsors, or making entirely new events to help students along with the entire process of getting from college to the workforce.\nThat’s just some of what I want to do. A lot of that is focused on expanding established winfo practices, but we’re a fast growing major, which means a lot of change, including a new program chair, a new dean, a whole new application process - and I want to make sure our voices aren’t lost. I want to make sure that any of our concerns are presented to the people who can make a difference, and that we don’t have to compromise on any of the things that we joined info for just because things are changing. I look forward to working with you all, and let’s keep info true to itself."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Joycie Yu",
				elected: true,
				image: _2017_joycie,
				video: "https://www.youtube.com/embed/QObocNPxz4E",
				statement: "Before I found the Informatics program, I had never been exposed to the tech field. Because of this, I am evermore thankful for the opportunities and experiences that our program has provided me with. One of my personal goals is to bring these opportunities to others especially as a woman in technology. This is why I am a part of Winfo. As a current Winfo First Year Rep, I’ve been able to learn the ins and outs of the organization and connect with our community. I'm running for Winfo Vice President not only because I hope to continue my work within this organization but also because I care. I care our informatics community. I care about supporting women in technology and helping others to join our field. But more specifically, I care about you. As your Vice President, I will make sure that all of your ideas are supported. I will welcome advocates of all genders into our organization. I will support you and your voice.\nNow, I urge you to vote for me for Winfo Vice President, not because you’re friends with me or because your friend told you to vote for me. I urge you to vote for me because you believe in my passion for Winfo, in my capabilities as a leader, and in my care for you.\nThank you.\n #aVote4YuIsAVote4You"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Andrea Chen",
				elected: true,
				image: _2017_andrea,
				video: "https://www.youtube.com/embed/QrCrNSFuXpU",
				statement: "Hello! My name is Andrea Chen and I'm running to be your Director of Public Relations for Winfo! I don’t usually run, unless it's after ice cream trucks, but despite this I’m running because I am passionate about Winfo’s mission of creating a more inclusive tech industry community here at the UW and beyond.\nBeing a part of the Informatics community this past year has been amazing! I have loved getting to know more Informatics students, from the constant late nights in the TE lab to the shared experience of 343 bringing us all closer together.\nAs your Director of PR my goals will be orientated towards inclusion, outreach, and involvement. Once elected I plan to start next year by introducing member spotlights and weekly newsletters. These member spotlights would be to celebrate our amazing Winfo members by featuring a bi-weekly spotlight on the fantastic people we have within our community. There are over 670 members in the Winfo Facebook group, that’s a lot of incredible people we can and should highlight! The weekly newsletters would be emails that would contain information about what’s happening within Winfo as well as upcoming Winfo events. This way you can stay in the loop and have greater access to a reliable source of information.\nTransparency and approachability are important values to me, so feel free to slide into my dms at anytime, but I also plan on creating an anonymous survey where you can send us your thoughts and suggestions. As Director of PR, I value your opinion and will work with you all to improve and grow Winfo.\nThe Director of PR for Winfo must be able to connect and promote Winfo to students and other UW communities. From my experiences as a First Year Representative for Winfo and as a TA, I have been able to connect with students within Informatics to attend Winfo events as well as encourage prospective students to become more involved with Winfo’s mission of diversity.\nI'm looking forward to being your Director of PR, but I can't do this alone. I need your vote to help shape the future of Winfo and to reach and connect with more Informatics students. Together we can and will make Winfo better and stronger."
			},
			{
				name: "Sarah Feldmann",
				image: _2017_sarah,
				video: "https://www.youtube.com/embed/JBgt9Ad-Pvk",
				statement: "I’m Sarah Feldmann and I am running for Director of Public Relations of Winfo. My journey to Informatics was long. I came into UW without a plan. I tortured myself with gen chem, accounting, econ and bio, not knowing what I wanted to major in. I feel incredibly fortunate to have discovered and been admitted to Informatics.\nUW is a huge school that can easily feel lonely and isolating making the community Informatics fosters priceless. Similarly, being a woman in the technology industry can be lonely and isolating. The Informatics community is great, but I want to focus on further growing a community that supports women in tech. By becoming an officer in Winfo I can accomplish this goal.\nI believe I am a good candidate for the Director of PR because I value the community Winfo creates and I have experience in PR positions. I have served as a member of the PR council of my sorority and I am currently in charge of running my sorority's social media accounts. I intend to expand Winfo’s online presence by adding more social media accounts like Instagram and starting a weekly email newsletter.\nI hope you consider voting for me for Director of Public Relations for Winfo."
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Lee Segal",
				image: _2017_lee,
				video: "https://www.youtube.com/embed/hMgQ1yzgZyQ",
				statement: "Hi everyone! My name is Lee Segal and I am running for the Director of Outreach position of Winfo.\nWhen I began school at the University of Washington I was not sure what I wanted to study. After taking INFO 200 my freshman spring quarter I fell in love with Informatics and the iSchool. My favorite part about Informatics is that it combines technology, creativity, data, and knowledge, while fostering the iSchool community.\nAfter joining the Informatics major I discovered Winfo and ran to be one of Winfo’s first year representatives. Holding this position this past year has been an incredibly rewarding experience. I helped plan a diverse array of events including the hack-a-thon and the student job panel that encouraged informatics students to pursue a career in something that they love.\nBeing a Winfo first year rep has given me the unique advantage of working with each officer individually, which is how I came to the realization that the Director of Outreach position is perfect for me. With my combination of organizational, communication, and social skills, along with my love for Winfo (what it supports and stands for) I know that I will be driven to accomplish amazing things in this role.\nI want to be an officer for the students of the iSchool, making sure that as many as possible are benefiting from company tours, networking nights, alumni panels, student job panels, and any other events we host. I will listen to students’ needs and interests, and gain feedback about companies or the types of events that we host, ensuring that your requests become reality as I am an officer here to serve you. My main goal is help students cultivate long lasting beneficial relationships with companies and alumni. I think with my skill set and passion will empower me to make a difference in this position.\nI love being involved with Winfo because of all the people I have been able to meet and all the students I have been able to impact thus far. Please vote for me so I continue forward on this amazing journey!"
			},
			{
				name: "Jenny Lee",
				elected: true,
				image: _2017_jenny,
				video: "https://www.youtube.com/embed/_0XvI7iuYfo",
				statement: "Switching my major from Mechanical Engineering to Informatics was probably one of the best decisions that I have ever made. I was blessed to be accepted into the major in the most competitive year to date and I want to give back as your next Winfo Director of Outreach.\nWinfo has a special place in my heart because it was one of the main factors that made me fall in love with Informatics. I first fell in love while taking Info 200 with Dr. Stearns. I confirmed my love for the major when I went to a Winfo professional networking event and saw everybody’s love and passion for the major. I immediately knew I was at home.\nAfter receiving my acceptance to the major, I knew I wanted to share this opportunity with other prospective and current informatics students. I strongly believe that it is a valuable experience to hear industry leaders’ stories, especially as women leaders in the technology industry. Their failure and success stories could be reflected in our futures. And many students seem to not know how to take advantage of these opportunities. I want to open these doors of opportunity - whether that be through networking nights, company tours, industry leader speed dating nights, or alumni panels.\nBy utilizing my networking skills and ability to communicate the values of Informatics to employers and recruiters, I want to give back to Winfo by maintaining alumni connections and planning professional events.\nAs the Director of Outreach, I want to not only be the bridge between Informatics and the industry, but also between the students and alumni. "
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Zhanna Voloshina",
				elected: true,
				image: _2017_zhanna,
				video: "https://www.youtube.com/embed/B-dT_DUfI_I",
				statement: "Hi everyone! My name is Zhanna Voloshina and I am running to be Winfo's next Director of Finance.\nAs I’m sure we all know, the Informatics major has an incredible community and Winfo in particular provides a myriad of opportunities for getting involved within the major's community and for professional development. I am particularly passionate about these opportunities and chose to run for a position as I want to contribute to continually making the success of the organization and its members a reality.\nAs Director of Finance, I plan to continue to keep Winfo fiscally secure and able to both maintain and expand hosting all the great events that the organization already does in this upcoming year. I am excited for the chance to be able to further Winfo's breadth of opportunities by serving as the official channel of communication to UW and iSchool sponsors, thus maintaining financial success and stability for the organization. I have the strong analytical skills and organizational capabilities necessary to maintain the organization’s budget and financial records, and plan to work concurrently in liaison with the other directors, ensuring that all of the events that they plan for Winfo are financially feasible. I look forward to contributing what experience I have to the position and being a part of a team that helps to continue fostering the success of the informatics community!"
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Anushree Shukla",
				elected: true,
				image: _2017_anushree,
				video: "https://www.youtube.com/embed/iynzAKTiwls",
				statement: "Hi everyone! My name is Anushree Shukla and I believe in helping people bring the best in themselves! As long as I can remember, I’ve always had the ability to care and empathize with people. If it weren’t for my encouraging father that mentored and motivated me to do what I really wanted to do, I wouldn't be the person I am today. Everyone needs a support system in their lives and as a nominee for Winfo’s Director of Diversity Efforts, I want to focus on creating an environment that is inclusive and appreciative to all communities within our society.\nAs a former International Student Representative at the UW’s Undergraduate Admissions, I responded to a lot of young prospectives that emailed admissions from all realms of the world. My work at admissions deeply resonated with me as I remembered the time I was schooling in India, hesitant yet excited to move to another country for college. Having the opportunity to work in that space made me realize how much I enjoyed interacting with different people about the culture and circumstances they grew up in.\nDiversity has played a major role in shaping my college experience. This past year, I served as the Director of Outreach for Tech++, an organization that strives to empower women to capitalize on technology in different career paths. Working with these amazing women and planning events based on this objective served as an incredible experience. Moving forward, I want to engage and collaborate with different organizations to put up a range of diverse events.\nWinfo, IUGA and the Informatics staff and faculty have already done an incredible job in nurturing a sense of diversity, and as the Director of Diversity Efforts, I will strive to maintain and expand on this existing momentum.\nSo vote for Anushree Shukla as your Director of Diversity Efforts!\n#ShakeItUp4Shukla\nThank you!"
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Leanne Hwa",
				elected: true,
				image: _2017_leanne,
				video: "https://www.youtube.com/embed/JxHxLn8lVG8",
				statement: "Hi everyone! My name is Leanne Hwa and I’m super excited to be running for Creative Director of Women in Informatics!\nGraphic design is my passion (as are memes) – I’ve found my calling as the designer role in various projects from INFO 200 to (most recently) the Winfo Hackathon. Behind each sticky note and wireframe is a story just waiting to be told, and as your Creative Director, I hope to build upon Winfo’s current brand to tell a story together of all of us: as allies for, and supporters of women in technology.\nI’ve enjoyed every moment as a First-Year Representative for Winfo thus far, and have worked hard to help plan events that give back to the people that make Informatics the amazing major it is today. I would love to continue this journey as Creative Director to further represent and strengthen this wonderful community through creating, and maintaining a unified and powerful visual brand for Women in Informatics.\nThank you for your vote – I can’t wait to tell your story."
			},
			{
				name: "Sarah Phillips",
				image: _2017_sarahP,
				video: "https://www.youtube.com/embed/WVBNQgn8amE",
				statement: "Hello, my name is Sarah Phillips :)\nI want to start out be saying that the dynamic community of female leaders in Winfo has helped me tremendously. The organization has inspired me to look inside and figure out what I want to do with my life and allowed me the freedom to step outside of my comfort zone and create lasting friendships. The panels and networking opportunities associated with Winfo and Iuga has also allowed me to create a support system for myself this year at the University of Washington.\nNow, I want to give back by becoming the Creative Director for Women in Informatics. I am passionate about user experience design and feel like I can learn and grow in this position. I will not only create posters and maintain the website, but also go above and beyond by helping other Winfo Officers. I am also an open book and feel quite approachable.\nRegardless of whether I get this position, I am here in support of Women in Informatics and Iuga. Feel free to connect with me so I can bring you into my support system. The best way to reach me is through my email or portfolio (www.sarahp39.com).\nThanks!!"
			},
			{
				name: "Yi (Carol) Cheng",
				image: _2017_yi,
				video: "https://www.youtube.com/embed/BLz9imoSCL8",
				statement: "Hi! My name is Carol and I am running for creative director. I am a first-year Informatics student who is also majoring in Psychology. Before I was admitted into the program, I got a lot of helps from Winfo officers. I was impressed by how supportive the whole iSchool community is. One of the most important reasons why I want to be part of our Winfo family is because I want to contribute myself to this awesome community in return. As a visual person, I love expressing my ideas by creating graphics. I am willing to spend a lot of time on designing just one graphic to make it look good. I would love to bring my patience on design when it comes to creating and designing promotional materials for Winfo events! I can’t wait to design cool swags for all iSchool folks. If you trust me and are willing to give me this opportunity, I promise that you will be more proud of our community cause you are going to wear the swag I designed :)\nNow you know my name, you know my face and you know I am friendly, feel free to say hi to me if you see me (or rescue me if I am struggling with homework in the TE lab). Let’s be friends!"
			}
		],
	},
	2018: {
		[Officers.PRESIDENT]: [
			{
				elected: true,
				name: "Stephanie Burd",
				image: _2018_stephanie,
				video: "https://youtube.com/embed/vKG9dA2N85Y",
				statement: "Hi, I’m Stephanie Burd and I’m running for President of Women in Informatics for the 2018-2019 school year. I’m currently an Informatics student with a focus in human-computer interaction and double major with Psychology. Outside of school, my favorite activities include traveling, hiking, spending time with my friends, and going to the dog park. I want to be president of Women in Informatics because of my passion for encouraging women in the technology field. Being directly involved with Women in Informatics enables me to make an impact and directly engage with women in and interested in the field to help inspire their interest in the field. I am a good fit for this role not only because of my passion for encouraging woman engagement in the tech industry, but also my past experience in leadership roles. In my college career, I have participated in leadership roles as a FIG Leader and teaching assistant. I first became involved in WINFO when I was accepted into the Informatics program. The first WINFO event I attended was a company tour, and it was so amazing to see the inspiration in everybody’s eyes as they walked through the building and began imagining the possibilities in front of them. I knew after this, I wanted to be involved with this work. I hope to continue to inspire our members as WINFO president by organizing more opportunities for members to be engaged in the group. In the past quarter, I have had the pleasure of joining the WINFO Board as a First Year Representative, in which I was given a leadership role and an opportunity to work with the board to make an impact in our community. As president, I want to continue to encourage diversity and female engagement in the tech industry and boost engagement, interaction, and inspiration in our Informatics community."
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				elected: true,
				name: "August Carow",
				image: _2018_august,
				video: "https://youtube.com/embed/ITmSnS3iamo",
				statement: "Hi, I'm August and I'm your next VP of WINFO! \nAfter serving as a WINFO First Year Representative, I understand the effort that goes into this role and I'm excited to take on the responsibility. \nI recognize that WINFO isn't just an RSO that promotes professional opportunities and fun events--it's also an incredible platform from which we can make sure that people of all identities and from all backgrounds feel welcome and included. \nI plan to keep this at the forefront of everything I do in this new role of WINFO VP. \nThank you!"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				elected: true,
				name: "Mary Huibregtse",
				image: _2018_mary,
				video: "https://youtube.com/embed/Ueoa7Y6O0TE",
				statement: "Creating communities has been a big part of my academic life. When I began attending college, I immediately became involved with clubs promoting women in STEM. I competed in NASA competitions, and eventually started an Engineering Club at Bellevue College. After transferring to the University of Washington, I served as a Junior Representative for WINFO; this not only gave me a greater understanding of the role WINFO plays in providing opportunity to students, but also insight into the richly diverse community that informatic students create. \nCoretta Scott King said, “The greatness of a community is most accurately measured by the compassionate actions of its members.” At the iSchool, I see compassionate acts daily, where students encourage, share, and include. This great community is truly a privilege to be a part of, and I am thrilled to be your next Director of Public Relations. \nThis next year, I will focus on promoting our major to underrepresented groups to create more diversity and inclusion in the iSchool. More specifically, I’ll initiate gender-neutral outreach events for middle and high schoolers. I also will bring the student body together through fun, organized social events. \nMy name is Mary Huibregtse. I have a minor in math, a two-year engineering degree, and am currently working toward a Bachelor of Science in Informatics with a data science focus. I walk my cat when the weather is nice; when it is raining, I paint."
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Emma Ropes",
				image: _2018_emma,
				video: "https://youtube.com/embed/aR9KvZ8Q9wk",
				statement: "When I started at UW, I was set on studying business. However, during my sophomore year here, I began to explore the field of Informatics and I immediately fell in love with Informatics and the iSchool community. Making the decision to join the iSchool, was the best and easiest decision of my college career. \nInformatics is made up of diverse, dedicated individuals who are passionate about what they do and are using technology to make a difference in the world. We as Informatics students will go on to revolutionize technology and in doing so, revolutionize the world we live in. My goal is to communicate the value of Informatics students to potential employers and advocate for Informatics students in a professional setting. \nMy connection with Winfo started during my first month as an Informatics student. I attended an event that involved a panel of women in the industry who shared their work and experiences. I was so inspired by what I heard and immediately felt compelled to reach out and connect with more people. So, I started attending events in the Seattle area and speaking with professionals in the tech industry. This provided me with key communication skills that make me well equipped to speak with companies on behalf of the Winfo community. \nAs Director of Outreach, I intend to use my networking and communication skills to advocate for Informatics students. I want to help provide you with the resources and connections you need to be successful in finding your next job or internship, be that through company tours, networking nights, or other professional events."
			},
			{
				elected: true,
				name: "Alexis Choi",
				image: _2018_alexis,
				video: "https://youtube.com/embed/IM4n6PhKtW4",
				statement: "“You can’t be what you can’t see” \n7 months ago, I was sitting on a bench in New York City, reflecting on my trip and my life in general when I received the acceptance email into the informatics program. Hands shaking, I was bawling in the middle of the street as I tried to process all the memories and emotions that rushed through me. \nComing to college with zero experience in coding and such, I constantly struggled to believe myself that I was qualified enough to actually pursue the studies of Informatics. However, in addition to the tremendous support of my friends and family, getting in contact with the professionals in the fields of my interest was what greatly encouraged me to follow my passions, as they have shown me the world of endless possibilities through their own journeys. \nBecause the Women in STEM conference provided me the chance to meet the women executives with STEM background; because the WINFO alumni panel allowed me to engage in the dialogues of this inclusive community; because INFO 102 taught me that I wasn't the only one experiencing certain challenges as a woman of color in STEM; and because the WINFO hackathon empowered me to present my passion for storing equality in professional fields, I want to continue on my journey by giving back to the community through my service. \nBy leveraging the experiences and skills I have gained in networking and communicating through my involvement in the professional business organization AKPsi, multicultural rso SUDO in the iSchool, and as the political intern of ASUW's Asian Student Commission, I am confident that not only can I communicate and sell our info program to the professionals in the most effective way, but more importantly be the connector of professionals and students by hosting events such as company tours, mentor meet-ups. This will go not only with corporations but with various sectors from the public to research fields to meet the diverse needs of the students. \nAs the next director of outreach, my goal is to your supporter who helps you see what you can Be and do. \nMy name is Alexis Choi and please vote for me as your next WINFO director of outreach!"
			}
		],
		[Officers.FINANCE]: [
			{
				elected: true,
				name: "Zhiqi Lin",
				image: _2018_zhiqi,
				video: "https://youtube.com/embed/YOAcH8fN-ao",
				statement: "Hello Info fam! \nMy name is ZK and I am running to be the Winfo director of Finance. This is my first year in info and I am so excited to involve in this amazing community and meeting awesome people. \nThe reason why I want to be an Winfo officer is that I hope to help and encourage more women to engage in tech field. The last high school I went to was an all-girl school(Yes, I have attended 3 high schools :)) with no coding classes at all. By then, I was wondering whether I was the only girl wishing to learn coding in school. In my Junior year in high school, I have participated in a coding summer camp, which has told me the answer of my confusion. I was the only girl in the over 13-year-old group in that camp. Therefore, I determined to support women in Technology and bridge the gap between STEM field and young girls. Being a WINFO officer, not only that I am able to develop my strengths, but also help and support other women or underrepresented groups in tech field. \nFinance is a core part of an organization. As Director of Finance, I am planning to achieve Winfo’s financial health, which allows winfo continue hosting great events within the budgets by developing suitable budget plans, keeping good financial records and obtain funds from the University or the sponsors. I am a detail-oriented and self-driven individual. I believe that  my analytical and organizing skills will allows me to be a strong candidate for this position."
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Min Yang",
				image: _2018_min,
				video: "https://youtube.com/embed/02gmbv2fslc",
				statement: "Dear INFO family, \nI am very excited to be running for WINFO's diversity efforts because it is my first time running for anything ever. I was born and raised in Taiwan, where people around me have a very similar cultural background. Moving to the US enabled me to experience interactions with people from many different countries. I found myself really loving the connection beyond the color of the skin or cultural background; I saw how coming together as a whole for the same goal can create powerful, amazing actions in a community. Informatics students embody diversity, and I believe that I can be an integral part of this movement. \nI believe that INFO is successful for many reasons, the main one being the diverse group of students. We respect and include all people without exception.  Because of the different cultural background and values in INFO, it is growing into an unshakable major. As your director of diversity efforts, I want to develop an environment that is judgement-free where students feel comfortable expressing their values and beliefs. \nBeing accepted into INFO was one of the most unforgettable moments in my life; I was seen as an opportunity and a family member, not a number or a grade. I want to be more involved in this family and spread positive energy to our community. Regardless of where we go in the future, INFO will always be a page in my life that I cannot forget and will forever be grateful for. \nThank you for your time :) \nSincerely,\nMin"
			},
			{
				elected: true,
				name: "Harshitha Akkaraju",
				image: _2018_harshitha,
				video: "https://youtube.com/embed/IU5HeJgdydQ",
				statement: "Hello, everyone! \nMy name is Harshitha Akkaraju and I am running to be WINFO’s Director of Diversity Efforts. \nI was born and raised in Hyderabad, India, where technical literacy and access to technology were only attainable to a select few. I believe that technology can create new affordances for everyone. I also believe that there is room for diversity of thought in the tech industry. \nThe inclusive community at WINFO and its high regard for diversity is what inspired me to run for this position. I find diversity of thought to be empowering because it puts me in a position to empathize with others; it helps me adopt a more inclusive world view. \nFor the past two years, I’ve represented Informatics at Society of Women Engineers (SWE). And over the last year, I’ve been on SWE’s Girls Who Code Committee and helped plan events like the Women in Tech Majors Panel, and an Introductory Coding Workshop for local high school students and underclassmen at UW. \nI’ve been fortunate to find incredible support through WINFO. I find their initiatives like Breaking the Glass Ceiling to be truly inspirational. WINFO’s signature event, the Hackathon, is by far, the most inclusive hackathon that I have participated in. I want WINFO to be a support system for everyone in the Informatics community. Their current networking events, the iSquad program already do a great job in providing guidance and mentorship opportunities for aspiring tech professionals. \nAs your Director of Diversity Efforts at WINFO, I want to focus on iterating on the current initiatives and creating new ones to encourage more involvement within the INFO community. \nVote for me and I will strive to advocate for your interests through WINFO. \nHarshitha Akkaraju"
			},
			{
				name: "Stefani Sanchez",
				image: _2018_stefani,
				video: "https://youtube.com/embed/AKcD0q7O7Ao",
				statement: "Hello, my name is Stefani Sanchez and I’m running to be Winfo’s next Director of Diversity Efforts. As a student in the Informatics and Speech & Hearing Sciences majors, I’m passionate about working with diverse communities & cultures. This includes informing others about what diversity encompasses, increasing awareness, and being an advocate for diversity. These actions are crucial in defining what it means to being committed to promoting and seeking diversity and are part of my motivation in running for this position. \nWhile attending UW, I’ve gained more passion and commitment to working towards diversity through my academics and extracurricular activities, more specifically within my sorority which strongly promotes cultural pride and awareness. For the past year, I have been involved as President, cultural awareness, and community service chair. I’ve been able to work closely with other multicultural organizations that are part of the United Greek Council and organizations affiliated with the ECC. I’ve had the opportunity to develop relationships with the members of these organizations and experience more of their culture by supporting their events. My involvement with my sorority and the ECC has provided me with many opportunities to learn about other cultures and broadened my world perspective. \nBased on my experience, one thing I would like to focus on as Director of Diversity Efforts is recruiting first and second year students from different backgrounds to the major and to Winfo. This would help expand awareness of Informatics as a major and help provide students with professional and academic opportunities. Another thing I’d like to incorporate as Director of Diversity Efforts is more involvement with the ECC and their organizations. \nI am strongly committed to help contribute and expand Winfo and the iSchool’s efforts to promoting and seeking diversity. I am excited to run for this position and will work towards sharing my passion and commitment towards diversity with prospective students, current students, and faculty."
			},
			{
				name: "Christie Gan",
				image: _2018_christie,
				video: "https://youtube.com/embed/Oh99aQJNnqg",
				statement: "I hope to become your next Director of Diversity Efforts to do my part in encouraging women to develop and pursue their interest in information science and technology. I have been lucky enough to join such organizations like Winfo, and have seen the profound impact diversity efforts have on students. The encouraging and open community helps bring students the courage to take chances at opportunities. As a second year in Informatics, I have seen many students’ growth in their academic and professional careers due to the support they receive from amazing organizations such as Winfo. \nI am a WiSE (Women in Science and Engineering) scholar alumni, and that experience has largely shaped me to being who I am today. The organization gave me a voice when I was too timid to, and helped me have the courage to apply to Informatics the summer after my freshman year. Ever since I have been accepted, I have experienced a wonderful, accepting environment from everyone in the department, and I want to do the same for all the next incoming Informatics students. Winfo, in particular, is especially great at welcoming women into the field, and I hope to give back and be the one to welcome others. \nAs a Director of Diversity Efforts, I plan to work closely with the Office of Minority Affairs and Diversity to create events geared towards empowering women and any other historically underrepresented groups. In the iSchool, I want to collaborate with iWorld, iQueeries, and iEquality to bring perspectives of other clubs to Winfo. To do so, I plan to have speakers from different organizations to come and talk about their experiences in industry in Winfo general meetings, and host events geared towards diversity. \nDiversity is about empowering women and minorities, but it is also about influencing an entire STEM field to have more diverse thought. I want to also encourage men and absolutely everyone to join in on the discussion of diversity. Diverse ideas are what shapes better products in industry, and better communities of people."
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Echo Zhang",
				image: _2018_echo,
				elected: true,
				video: "https://youtube.com/embed/dKPofOfNy0s",
				statement: "Hello everyone! I’m Echo Zhang, and I’m running for the creative director for WINFO. I’m currently a junior and first year in Informatics, and I’m focusing on the HCI design track. \nI have been in Informatics community for almost two quarters, and I absolutely loved it and truly felt like this is a second home for me. As an international student, my parents are away from me most of the time. However, everyone is so friendly and helpful to each other in Info. When I stayed up late doing projects at the TE lab with my friends, I really felt the connection I made with these people. And I love all the materials and projects we do here. I feel less homesick when I’m into designing, and doing other info class projects. Therefore, I want to bring more people to join us, and especially more international students to attend to our Winfo events. \nI want to join the Winfo’s family because I have always been interested in gender equality issues. And after I took INFO102, I realized we need more women and their voice in the technology field. I believe in empowering women in the technology field can change the world. So, I hope to be in part of WINFO team, and bring fun events to empower women to join and explore about informatics and the technology field. I’m a good candidate for creative director because I have a passion towards design. I love to design ANYTHING. To become a good designer, the most important thing to remember is to think from another person’s perspective. I am good at communicating and getting to know what people really want. So, if I become the creative director, I would definitely communicate to the other Winfo officers to discuss about my design, and also ask people who are interested in our events to get their suggestions, too. My goal is to make everyone feel interested and excited about our event not only because of the content of it, but also by looking at our poster and feel like the poster of the event is professional and attractive to them! \nThank you for your vote!"
			},
			{
				name: "Yiran Ni",
				image: _2018_yiran,
				video: "https://youtube.com/embed/tLQGEOrjSaQ",
				statement: "Hello, everyone! My name is Yiran and I am really excited to be running for next Creative Director of Women in Informatics! \nDesign is a thing that I’ve enjoyed in doing for many years. Before my college life, I was a professional badminton player. Due to this special role, I did not have lots of chance to study any knowledge about design. However, the concept of design grew up in my mind. Back to a few years ago, I got an idea that redesigning the abandoned badminton birdies into key chains. At the beginning, I just designed the birdies for fun, but they later attracts lots of people’s eyes and people even wanted to buy them. This might be my very beginning experience related to design. \nAfter getting into UW, I still kept my passion on design because I believe design is my thing and is what can really improve the quality of people’s lives. You may ask me, why not majoring in design? But you know, iSchool is my school. This community is something I have felt being part of it inherently since I first took INFO 200. What it taught me is above the knowledge it self, it also taught me studying is not just about competition that I’ve been doing many years in badminton, and teamwork is also essential. \nI’ve enjoyed my roles being a designer in different students associations, clubs, and class teams. I am passionate to keep on this journey to be a Creative Director of women in technology. I hope to strengthen this community with my creativity and foster the success of the informatics community. \nThank you for your vote!"
			}
		],
	},
	2019: {
		[Officers.PRESIDENT]: [
			{
				elected: true,
				"name": "Hayley Younghusband",
				"image": _2019_hayley,
				"video": "https://youtube.com/embed/jf5a3m0NXp4",
				"statement": "Hi, I’m Hayley Younghusband and I want to be your WINFO president! My first introduction to members of this community was through an iSchool study abroad program in India. One of the most memorable experiences on the trip was on a 24 hour train ride from Mumbai to Bangalore. This journey was when I got to really know my fellow INFO students who are incredibly adventurous and motivated. As WINFO president, I hope to encourage involvement in this community full of remarkable individuals and create bonds like the ones I made while abroad. As a woman in STEM I advocate to bridge the gender gap in the tech industry. I have been a teacher for Girls Who Code where I encouraged learning and was a role model for girls pursuing technology. Each week, I would come up with motivating lesson plans to teach young women how to program. To me, teaching the girls how to code is much more than just teaching a new skill—it is shaping the future of our field. As WINFO president, I hope to empower women to find confidence and strength in the technology field. Even through the multiple INFO group projects, nothing has tested my leadership more than being a TA for INFO 101. Let’s face it, college students have a hard time paying attention in class but make it a late-night, 2 hour class and led by someone the same age as you…it can be challenging to say the least. What has helped me the most is my motivation to ignite a passion in my students for the informatics field. As president I will be a driven leader and work to inspire others to love informatics and the community we cultivate. Through involvement, empowerment and driven leadership I am confidence I will succeed in this position!"
			},
			{
				"name": "Akoly Vongdala",
				"image": _2019_akoly,
				"video": "https://youtube.com/embed/joCbZt6CqIk",
				"statement": "Hi INFO! \n My name is Akoly Vongdala and I am running to be your next WINFO president! I am currently an informatics student with a focus in Data Science and a double major with psychology. Being a part of the iSchool has been an amazing experience because of the diverse relationships that I have built within this community; whether it is a personal or professional relationship! I realized that WINFO is not just an RSO but a community. It’s a community that values diversity and accepts people of all identities and backgrounds. And that has truly inspired me to run for this position. As president, I want to continue to bring these values and acceptance into the forefront of everything I do in this position. I believe that I can fulfill the role of president not only because of my passion for diversity and engagement, but also my past and current experiences in leadership roles. For the past two years, I represented Informatics at the Society of Women Engineers (SWE) and Husky Leadership Initiative. And for this year, I was a part of the SWE officer team where I had the privilege to learn and built upon my own leadership skills as an officer and a person. I first became involved with WINFO even before I was accepted into the Informatics program. The first WINFO event I attended was the WINFO Hackathon, it was so awesome to see the energy and opportunities that WINFO had created for so many different people to collaborated with one another! And I want to make sure that those opportunities continue. As your WINFO president, I want to focus on the current initiatives and create new ones to encourage more diversity and engagement within our iSchool community. But I can’t do this alone! I need your vote and your voice to help make this happen! Thank you!"
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				elected: true,
				"name": "Autumn Derr",
				"image": _2019_autumn,
				"video": "https://youtube.com/embed/esYpS4XVSis",
				"statement": "Hi Informatics! \n I’m Autumn, and I’m running to be your next Women in Informatics Vice President. Reflecting back on my experiences at the iSchool, I realized how much I’ve grown as a person. I wouldn’t be the person I am today without the inclusive and inspiring community I found here. Through Informatics, I found a community of supportive individuals who have gone out of their way to help me succeed. My INFO 200 TA inspired me with the innovative projects he had created throughout his time in the major and helped each of us define what Informatics meant to us. Therefore, I feel the value of supporting the next generations to come. Through support and inspiration, we get the opportunity to continue this unique community that we are so lucky to have found. As an INFO 200 TA and INFO Peer Advisor, I have challenged my leadership and communication skills to inspire and support the next generation of Informatics students. I’m grateful to contribute to the major that I love so much. Helping students navigate classes, requirements, and applications, I have learned how to empathize, communicate, and find solutions as a Peer Advisor. Through presenting in large lectures, grading, and working on a team with other TA’s, I have challenged myself in my leadership and analytic skills. Through these experiences, I got to give back to my community and grow as an individual. Being a woman in technology, I understand the value of women’s unique perspectives. It’s difficult to feel comfortable in a field dominated by men, but with the support and professional connections that Winfo caters, we can make our ideas heard. As Vice President of WINFO, I will continue to keep inclusivity of women in technology at the forefront of our community. Let’s continue to grow together as a community and work to make women’s ideas prominent in the tech industry. Vote for me, Autumn Derr, for your next WINFO VP. Thank you!"
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				elected: true,
				"name": "Allison Geary",
				"image": _2019_allisonG,
				"video": "https://youtube.com/embed/S9NgeXY9ZXg",
				"statement": "Hi all! \n My name is Allison Geary and I am currently an Informatics Freshman Direct Admit and one of Winfo’s First Year Representatives this year.  I am originally from Chicago and have loved making the Pacific Northwest my new home!  Some of my side hustles include musical theatre, hiking, and anything that has to do with food :).  Having grown up in the theater, I love communicating with others and have thoroughly enjoyed my time working alongside the current Winfo Officers.  I would love to do more for Winfo, therefore I am running for Winfo’s Director of Public Relations. With my background, I believe I can really make an impact by increasing awareness and interest in what Winfo is all about: female empowerment through technology.   As a freshman, out-of-state, theatre fiend, it would be an honor to be Winfo’s Director of Public Relations and help break the stereotype of what a tech leader is “supposed” to be.  If given the position, I would work with the team to implement programs designed to increase Winfo’s presence on campus.  My ideas include increasing our social media presence across multiple apps, creating video content of our events for marketing and information purposes, and raising awareness of our club through University publications and with corporate relationships.  For example, the team has found this past year that many students aren’t aware of our events because they are not active on Facebook.  By bringing the content to them through more popular apps such as Instagram or Snapchat, I believe we would have better event turnouts.   Some of that content could be fun clips of our events that will help bring them to life.  I am committed to making a positive impact and putting the time and effort in that’s needed to be a great Director of Public Relations."
			}
		],
		[Officers.OUTREACH]: [
			{
				elected: true,
				"name": "Jeongvin Yeom",
				"image": _2019_jeongvin,
				"video": "https://youtube.com/embed/Enpv1pv2_JA",
				"statement": "Hi, my name is Jeongvin Yeom, most people call me JV and I am so excited to be running as your next Director of Outreach for WINFO! I came into UW with very little idea of where I was going to take my education. Informatics pulled me in not only with the classes, opportunities, and professors but with the community itself. I would go into the TE Lab and there was an atmosphere to it that I knew right away that I wanted to be part of. Coming into the program with no prior technical or coding experiences, I felt years behind many of my peers and questioned my qualifications to be part of the iSchool. I truly believe there is so much power in connecting with those who are industry leaders - especially those who are women. It is valuable to hear other’s adventures and understand that many of the struggles that we face aren’t uncommon and something that many in the industry has struggled as well. Informatics is a unique program, created by the diverse community and devoted individuals. We all work extremely hard on our projects and coursework and I want to help translate the effort in our classroom beyond academia and into the professional world whether that is industry or research. By utilizing my networking and communication skills I believe I can sell to employers and recruiters the talent in our program and continue to grow the strong bond of the alumni connections we have. I want to help open doors for others through different events and help you grab the resources and confidence you need to share your talent. As the next Director of Outreach, I want to empower and be the support system to bridge the gap between the professional world and our program."
			}
		],
		[Officers.FINANCE]: [
			{
				appointed: true,
				name: "Rhea Chen",
				image: _2019_rhea,
				statement: "Hi everyone! \n My name is Rhea Chen, and I am running to be Winfo's next Director of Finance. Receiving my acceptance letter into Informatics was a dream come true! I have always loved technology, business, and humanities, so Informatics is the perfect fit for me. Informatics has an amazing community that I have been happy to get to know and now I am ready to serve in a director role. My previous experiences have prepared me for this role. I have held a similar position for UW's Technology and Business Association and gained experience planning large scale events involving corporate sponsors and hundreds of students. As a TA in the Information School, I also have experience doing administrative works with professors, faculty, and other highly involved students in Informatics. I believe that As Director of Finance, I plan on maintaining the fiscal integrity of Winfo. My main goal is to introduce industry standard bookkeeping software and techniques to manage Winfo's financial records. I feel this is important to continues Winfo's success with holding great events that benefit the Informatics community. I want to create long term stability so that Winfo can run smoothly over the next several years. I will try my best to serve as the liaison between UW, iSchool sponsors, and Winfo,  and thus maintain the financial success and stability for the organization."
			}
		],
		[Officers.DIVERSITY]: [
			{
				elected: true,
				"name": "Eva Perez",
				"image": _2019_eva,
				"video": "https://youtube.com/embed/ORW8jFrG7hE",
				"statement": "Hi, iSchool community! \n My name is Eva Perez, and I am running for Winfo’s Director of Diversity Efforts. I’ve had the honor of being a Winfo First Year Representative for the current school year and had an amazing experience working side by side with the officers on various diversity efforts and events. Two fun facts about me: I was born in Guatemala and grew up in Seattle. I also originally started off as a violin music major in New Orleans and slowly found my way to this amazing program. One thing that attracted me to the iSchool was its transparency about its goal of creating more diverse cohorts and its continuing conversations, efforts, and actions towards accomplishing this goal. I have further loved being a part of Winfo and a community of women who are always happily willing to uplift and support all communities and work as a supportive, fun team. I’ve learned so much, from being able to help with our continuing conversation on the iSchool diversity blueprint, by helping with various panels of women in technology, by working the ins and outs of Winfo’s Hackathon, and by helping start to lead an outreach initiative to local community colleges. As an officer of diversity, I plan to continue outreach to foster Winfo’s continued relationships with K-12 schools. I also would like to continue to expand the iSchool’s outreach to transfer student communities. I myself am a transfer student from Seattle Central College, and I want to ensure that the iSchool recognizes and fosters the diverse local transfer student communities around us as potential applicants for iSchool cohorts. I’m very excited about the iSchool’s commitment to equity and diversity. I look forward to helping continue the work with you all on furthering our success toward these goals!"
			}
		],
		[Officers.CREATIVE]: [
			{
				elected: true,
				"name": "Harkiran Saluja",
				"image": _2019_harkiran,
				"video": "https://youtube.com/embed/HmVyQfG5r0o",
				"statement": "Coming from California, the idea of going into computer science was a lot more popular than going into information sciences. Before coming to UW and the iSchool, I knew what the basic idea of informatics was but I had no clue what is exactly studied and how a degree in this field could turn into a variety of careers. Once I researched the tracks and took INFO 200 (with the legendary Andy Ko), I found out about human-computer interaction, and user interface/user experience design, and as someone who loves to design things, I knew I wanted to do just that, and that’s how I found my passion for design. Since then, I have taken every opportunity to practice my design skills, and running for the position of WINFO Creative Director allows me to do more of that. As the Creative Director, I want to bring my ideas to life by designing event banners, posters, and best of all, the swag! When creating the next designs for WINFO, it would be awesome to get feedback and suggestions from the iSchool community in terms of what they want to see, as the Informatics brand reflects who we all are. I’ve only been part of the Informatics community for two quarters, but there couldn’t have been a better place where I actually feel like I belong. The iSchool has amazing events full of the coolest people, and this is what encouraged me to apply to this position! I promise to get the most professional and captivating posters for WINFO events! Vote me to be the next WINFO Creative Director!"
			}
		],
	},
	2020: {
		[Officers.PRESIDENT]: [
			{
				name: "Allison Geary",
				statement: "Hi all!\nMy name is Allison Geary and I am currently a sophomore in Informatics and Winfo’s current Director of Public Relations. I am originally from Chicago and have loved making the Pacific Northwest my new home! Some of my interests include theatre, astrology, and anything that has to do with food :). Having grown up in the theater, I love communicating with others and have thoroughly enjoyed my time working alongside the current Winfo Officers. I would love to do more for Winfo, therefore I am running for Winfo President.For the past two years, I have been heavily involved in Winfo, first starting off as a First Year Representative and then as their Director of Public Relations.With my background, I believe I can really make an impact by increasing awareness and interest in what Winfo is all about: female empowerment through technology.My leadership skills have grown immensely in the past year through being a TA for INFO 200. I want to not only incorporate these leadership skills, but also the knowledge I have gained from being on the Winfo team for the past two years into the President’s position. I am committed to making a positive impact and putting the time and effort in that’s needed to be a great Winfo President.",
				image: _2020_allison,
				pdf: _2020_allison_resume,
				elected: true
			}
		],
		[Officers.VICE_PRESIDENT]: [
			{
				name: "Akoly Vongdala",
				statement: "Hi INFO! My name is Akoly and I want to be your next WINFO Vice President! I am currently an informatics student with a focus in Data Science and a double major with psychology. Being a part of the iSchool and WINFO for the past three years has been an amazing experience because of the diverse relationships that I have built within this community. Through my experience as the WINFO hackathon project manager this past year, I realized that WINFO is not just an RSO but a community. It’s a community that values diversity and accepts people of all identities and backgrounds. And as vice president, I want to continue to bring these values and acceptance into the forefront of everything I do in this position.\nI believe that I can fulfill the role of the vice president not only because of my passion for diversity and engagement, but also my past and current experiences in leadership roles. For the past three years, I represented Informatics at the Society of Women Engineers and the Husky Leadership Initiative. And this year, I was a part of the WINFO officer team where I had the privilege to learn and built upon my own leadership skills.\nI first became involved with WINFO when I was accepted into the Informatics program. The first WINFO event I attended was the WINFO Hackathon, it was so awesome to see the opportunity that WINFO had created for so many different people to collaborated with one another! I want to make sure that those opportunities continue.\nAs your WINFO vice president, I want to focus on the current initiatives and create new ones to encourage more diversity and engagement within our iSchool community. But I can’t do this alone! I need your voice to help make this happen!",
				image: _2020_akoly,
				pdf: _2020_akoly_resume,
				elected: true,
				adminMessage: "Joined Allison to be a co-president."
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
			{
				name: "Shareen Chang",
				statement: "Hi I’m Shareen! I am currently a Junior in Informatics doing HCI track. In my free time, you can catch me scrolling through various meme groups on Facebook or watching the latest dance challenges on Tik Tok.\nWe have all been through the struggle of explaining what informatics is to our family and friends. As the Director of Public Relations, I would be dedicated to increasing WINFO’s presence on campus. I want to increase the attendance to events and the retention rate by exposing people about these events through posting regularly on social media but also reaching out to people in person. I want to connect the iSchool community to prospective students and publicize WINFO events.\nI would love to work alongside other WINFO officers to implement programs that strive towards WINFO’s mission statement which is to empower women in the tech industry to be “producers of technology” by supporting and encouraging each other to succeed. Some ideas I have to increase awareness of informatics programs are to grow WINFO’s social media presence by collaborating with the creative director to make banners and posters to post throughout our social media. This would greatly help garner attention of viewers visually on platforms such as Instagram and Facebook. I would also like to collaborate with other organizations such as DubsTech or WiUX to host events together for a wider audience other than just informatics students. I strongly believe that with my strategic leadership and working together as a team, I can strengthen our community and make a positive impact.",
				image: _2020_shareen,
				extraImage: _2020_shareen_infographic,
				elected: true
			},
			{
				name: "Ashlea Lau",
				statement: "My name is Ashlea Lau, and I am a current Junior in Informatics. I strongly believe that technology is the future, and that it is crucial to ensure that all people, from all backgrounds, are included in its development. I was first introduced to coding, and the importance of diversity, through the Girls Who Code program during the summer before my junior year of high school. Since then, I have striven to inform myself on feminism and the causes of real-world injustice and oppression. I believe that change starts small, and the easiest place for it to begin is within the community around you. For these reasons, I am running for the position of Director of Public Relations. I want to be a part of cultivating a community that promotes the values of all people, all marginalized groups, and ensures that they are taken into account as we develop the future. As an officer, I want to help build the connections that are the foundations of a strong community, and that begins with spreading awareness of the organization and its impact. I hope that I can continue my journey with WINFO, and make this vision a reality. Thank you!",
				image: _2020_ashlea,
				pdf: _2020_ashlea_infographic
			}
		],
		[Officers.OUTREACH]: [
			{
				name: "Jill Nguyen",
				statement: "Yahallo~ My name is Jill Nguyen and I am running to be your next Director of Outreach for WINFO! I've just gotten into the Informatics program this past fall, but I feel super connected with the community and what the iSchool is all about: people, information, and technology. One of these especially stands out to me, as hinted by the position I am running for: people! As your hopeful incoming WINFO Director of Outreach, I'd like to utilize my networking and communication skills to maintain relationships within our community and help it grow with those outside of it. Before college, I was definitely a shy, quiet kid who struggled to open up to others. However, as I entered college and realized my passion for people through Informatics, it became something that is so central to my identity. Now, my goal is to to open up and connect others through whatever I am capable of doing. I hope to be able to bridge the gap between the professional and our almost-as-professional (heh) community and gather the resources that you all need to succeed. I believe that the connections we make with the professional world can be our biggest allies, and I want to not only connect that world to the iSchool through the WINFO Director of Outreach position, but to give you the opportunity to do so as well. Feel free to reach out to me for whatever!\nIf you aren't convinced, here is a blurb from a fellow INFO student that I requested:\n\"Hello my name is Jill. My specialities including outreach and persuation (like how you asked me for my stuff), excellent use of human resources (like how you are asking me to write your personal statement), planning and time management (like how you procrastinate in 340)\"",
				linkToPortfolio: "https://www.linkedin.com/in/jill-nguyen/",
				image: _2020_jill
			},
			{
				name: "Julia Shull",
				statement: "Hi everyone!\nI’m Julia and I’m running to be the next Director of Outreach for Women in Informatics. I was first introduced to Informatics when I took INFO 102. The course opened my eyes to the tech industry, the gender gap within it and the need for women to join. I’ve been pursuing informatics ever since which has gifted me with experiences like the iSchool and OMA&D Tahiti study abroad program I attended at the end of last summer. I went not knowing a single other person and met some of the most wonderful people who I still keep in contact with to this day. In general, I enjoy being faced with a challenge and appreciate any opportunity to be pushed out of my comfort zone and, I love encouraging others to do the same. Being an officer for WINFO would allow me to become more involved with the Informatics community but also the chance to be part of a team that is actively empowering women. I was inspired by the opportunity to do informatics but I believe it is important that women are inspired more by examples of women succeeding in the tech industry. That being said, as Director of Outreach, not only will I utilize my communication skills to grow our Alumni Network and provide new and exciting outside activities with employers and organizations, but I also hope to connect our community with more female role models. Something that stuck with me from Tahiti was to “value the relationship”, a phrase that is applicable to all people involved in our college careers like our peers, advisors, professors, potential employers, recruiters, etc. I hope to be able to ignite those important relationships to help kick start everyone’s professional journey after college.",
				image: _2020_julia,
				extraImage: _2020_julia_infographic,
				elected: true
			}
		],
		[Officers.FINANCE]: [
			{
				name: "Lynzley Kolakowski",
				statement: "Hi, I’m Lynzley. I am running to be the director of finance for WINFO. I am a freshman direct admit to the Informatics major, and a first-generation college student. In high school, I earned my associate’s degree, so even though I’m in my first year at the University of Washington, I am already a rising senior. I am extremely passionate about learning about technology and using it to empower others. In 2018, I spent my summer developing a passion for technology in the Girls Who Code Summer Immersion Program with AT&T. Last summer, I interned as a program management intern with the TEALS team in Microsoft and learned a lot about leadership and managing projects and outreach.\nI have been an active member of WINFO and the Informatics community by participating in the WINFO, DubHacks, Microsoft OneWeek, and TreeHacks hackathons. I am also committed to outreach in the technical community, and have mentored students for the UW Match Academy and have worked to increase the accessibility of computer science education with Microsoft and TEALS. \nMy experience has allowed me to pursue my passion for technology, outreach to underrepresented groups, and building a strong organization to serve my community. As the WINFO financial director, I would apply my experiences to effectively optimize the WINFO budget to organize more events for the club and for outreach, more opportunities to build a strong network in the Informatics and technical community, and ways to get involved in the University of Washington community.\nThank you so much for taking the time to watch this, and I am looking forward to hopefully serving you as the WINFO Financial Director.",
				image: _2020_lynzley,
				video: "https://www.youtube.com/embed/dIGLRs_j3w4",
				pdf: _2020_lynzley_resume,
				elected: true
			}
		],
		[Officers.DIVERSITY]: [
			{
				name: "Rachel Kinkley",
				statement: "Hey iSchool!\nMy name is Rachel Kinkley and I am a Freshman Direct Admit to Informatics. When applying to UW, I initially sought a major in either psychology or computer science. After conducting some research, I stumbled upon Informatics. This program is not only a perfectly blend of my two passions but is also filled with incredible people who do truly amazing work. Because of this, I instantly knew that I wanted to become more involved. This past year I’ve been immensely grateful to be a WINFO First-Year Representative. This gave me the opportunity facilitate a variety of different diversity efforts put forth by WINFO. These experiences have opened my eyes to the wonderful work the iSchool does to make our community a better place, and I am eager to be a part of it! I believe that I could best apply my skills and passion in the role of WINFO’s Director of Diversity. My vision for diversity within the iSchool focuses around two central points. First, as Director of Diversity, I would continue to foster outreach to high school and community college students to encourage a diverse array of prospective students to apply to Informatics. Secondly, I would emphasize efforts to support current minoritized communities within the iSchool. These efforts would focus specifically on mental health support and community building opportunities. The Mental Health Power Hour I helped plan and implement this quarter was an incredible bonding experience that I would like to continue and expand throughout my year as Director of Diversity. Overall, I would seek opportunities for INFO to embrace the inclusion and intersectionality of all its members. I would be honored to have the opportunity to promote and support the diversity efforts of the iSchool as WINFO’s next Director of Diversity. Thank you!",
				image: _2020_rachel,
				pdf: _2020_rachel_infographic,
				elected: true,
				adminMessage: "Elected as Director of Community Efforts."
			},
			{
				name: "Harkiran Saluja",
				statement: "What’s up iSchool! I’m Harki and I am running to be your next Director of Diversity Efforts of WINFO. I had the honor of being WINFO’s Creative Director this school year and had an amazing experience working alongside the current officers, being a part of planning and attending WINFO’s events, and designing WINFO’s event banners and swag! Coming from Southern California, I wasn’t sure what to expect at UW and the iSchool, but I can definitely say that being a part of the iSchool community is one of the best experiences I’ve had. What’s so wonderful about the iSchool and the people here is the fact that we make diversity a big part of who we are and our goals. I’ve had the privilege of being a part of the diversity events here at the iSchool, from mentoring in the Hack for Social Good to attending the iSchool Diversity Summit to volunteering at the iTech Symposium. As a diversity officer, I intend to continue outreach to further strengthen WINFO’s relationships with K-12 schools and community colleges. I would also like to further expand into diversity events that involve current iSchool students so that you all can have more of a voice. I’ve learned so much from being a part of WINFO and a community of women who make up such a fantastic and supportive team and are willing to help various communities. I’m excited to see how the iSchool will take further steps in its commit to diversity, equity, and inclusion, and am looking forward to immersing myself more into achieving more of these goals! Vote for me to be WINFO’s next Director of Diversity Efforts!",
				image: _2020_harkiran,
				pdf: _2020_harkiran_resume,
				elected: true
			}
		],
		[Officers.CREATIVE]: [
			{
				name: "Kayla Chea",
				statement: "Hi everyone~\nMy name is Kayla and I am running to be your next WINFO Creative Director! My path to Informatics, like the paths of many others in the iSchool community, has been a bumpy but rewarding ride.\nWhen I was a young, I loved being artistic, whether it be turning tissues into flowers or cardboard into mini-furniture for my Build-A-Bear box. This passion, however, faded as I grew older and focused on my studies. My parents wanted me to become a doctor (ಥ◡ಥ) so all of my time was dedicated to acing my science courses in high school. At one point senior year though, I broke down and realized I couldn't do pre-med in college. Thus, I entered UW clueless and unsure whether I would find a major fit for me. But then I took INFO200 and my life changed forever.\nInformatics reignited my passion for creating and made me realize the importance of design in our everyday lives. After realizing I could pursue a career in designing for good, I’ve worked hard to grow as a designer. I’ve taken design, HCDE, and HCI-focused Informatics classes and learned the tools of the trade. I am also SUDO’s current Creative Director so I have experience making graphics for a club.\nAs WINFO Creative Director, I would create merch/posters that align with the iSchool’s brand and bring a little joy into your life. I would also be approachable and open to any feedback or ideas you may have. One of my biggest goals though is to meet more of the people in this wonderfully diverse community. I’m Kayla and this is my story. I hope you’ll give me the chance to learn about yours ٩(ˊᗜˋ )و",
				image: _2020_kayla,
				pdf: _2020_kayla_infographic,
				elected: true
			},
			{
				name: "Michelle Lee",
				statement: "Hi Informatics!\nMy name is Michelle Lee and I’m running to be your Creative Director for Winfo. 😊\nAs a woman who came from a non-technical background into Informatics, I’ve been so encouraged by the supportive, driven, and intelligent people I’ve met in this community. I am running for Creative Director because I believe my experiences have prepared me well for this role. How so? Last year, I was the Vice President of Marketing for DSP, a professional business organization on campus. In this role, I had the opportunity to orchestrate our fall and winter recruitment marketing efforts including researching previous themes and materials to learn and grow from the past, communicating with members to better understand what designs they wanted to represent the organization, creating videos, and designing graphics and apparel. In addition, I’ve had the opportunity to co-found and serve as the Officer of Marketing for Business Leaders of Faith, another RSO on campus. In this role, I’ve designed numerous graphics, fliers, and our Instagram page. I hope to apply these experiences, combined with feedback from the Winfo community, to best communicate, design, and contribute to a team that will empower women in technology.\nSome background and fun facts about me:\n\t- I’m studying Informatics (admitted with the Autumn 2019 cohort!), Marketing, and minoring in Dance.\n\t- I work as the iSchool Career Services Student Assistant. If you haven’t seen me there already, swing by to say hi and grab some candy 😊\n\t- I’m obsessed with dogs and Dogspotting on Facebook is my happy place.\nWant to know more? Check out some of the relevant work I’ve done on my portfolio under \"Extras\" or reach out to chat!\nVote for me, Michelle Lee, to be your next Winfo Creative Director. Thank you!",
				linkToPortfolio: "https://themichellelee.myportfolio.com/extras",
				image: _2020_michelleLee
			},
			{
				name: "Michelle Pham",
				statement: "Hi everyone! My name is Michelle Pham! I’m from Lynnwood, WA. I’m currently a Sophomore here at the UW, but this is my first year being a part of the iSchool community! Coming to the UW, I was interested in tech, but I didn’t see a clear avenue on how I could enter the industry. After taking INFO200 with Amy Ko, I was introduced to design thinking and began to see a purpose to why I wanted to pursue tech. I wanted to promote inclusivity and allow users to feel represented within the tech I created, and I found how UX design fulfilled that for me.  Since being a part of the iSchool community, I’ve found myself surrounded by other students who want to leverage technology to make a positive impact on the community around us.\nGrowing up, whenever I looked to famous tech leaders, I rarely saw women of color like me who I could look for an example of what it’s like in technology. In and out of technology, I’m emotionally invested creating welcoming and diverse environments. WINFO directly resonates with my values of focusing on women in technology. I want to contribute more directly to the WINFO community by serving as the Creative Director so that my actions may reflect my values. My emotional investment with WINFO coupled with my interest in design would serve well in the Creative Director position. I personally believe that one of the most important aspects of being a designer is creating channels of feedback for my work. Input is important to me as I would be creating designs for posters and apparel for the Info community! I would want all community members to have a voice and feel like these designs are made for them. As the potential next Creative Director of WINFO, I intend to invest myself fully and to further the goals of WINFO through a creative platform. Thank you!",
				image: _2020_michellePham,
				video: "https://www.youtube.com/embed/TIuXRWozT34"
			}
		],
		[Officers.HACKATHON_DIRECTOR]: [
			{
				name: "Locksley Kolakowski",
				statement: "Hi! I am Locksley, and I am running to be WINFO’s Hackathon Director. This year, I was a Freshman direct-admit to Informatics and a first-generation student at the University of Washington, but through earning my Associate Degree in high school, I am currently a rising senior. In High School, I participated in the Girls Who Code Summer Immersion Program at Adobe, Seattle. Last summer, I was a Software Engineering Intern as part of Microsoft’s High School Program where I volunteered to mentor teams from the University of Washington’s Math Academy when they attended a Hackathon at Microsoft. I also spoke on a panel for underrepresented students from Upward Bound. Programs like these are what inspire me to empower people from underrepresented backgrounds, especially women, to pursue a future in STEM.\nThe WINFO Hackathon promotes inclusivity and technical advancement in the iSchool community, and I will introduce more prize options that reflect that such as the best first-time hack, entrepreneurial hack, best design, and most brilliant idea. Not only will more prize tracks mean more winners, but it will also mean that we can give opportunities to people from diverse backgrounds and experiences an opportunity to shine. I will also work closely with iSchool alumni to increase mentorship and company sponsorship at the event. As your Hackathon Director, I also want to be your personal advocate. This includes making the iSchool spaces feel more comfortable and welcoming to every one by bringing in new furniture, seat covers, and vending machines. Finally, I will provide more opportunities for student engagement. The Microsoft Internship Program as a program called Camp Microsoft where all of the interns get to engage in weekly bonding activities such as paddle boarding, hiking, and other events. I want to expand WINFO and IUGA’s events and budget to create a \"Camp iSchool\" for us to network with each other, with mentors, and with companies outside of the university. Thank you for taking the time to read my personal statement, and I would be honored to be WINFO's next Hackathon Director!",
				image: _2020_locksley,
				video: "https://www.youtube.com/embed/GWvctId9vus",
				elected: true
			},
			{
				name: "Hailey Meister",
				statement: "Hey Everyone!\nMy name is Hailey Meister and I am running for Winfo Hackathon Director! When I came to UW my goal was to get into Computer Science,but before I finished the prerequisites I found and fell in love with Informatics! It happened during my first quarter here in INFO 200. I have always loved business, technology, and helping people, so this class made me understand that there is a better major for me then computer science. Now, I'm happy to say I am pursuing an Informatics degree with a minor in Disability Studies. I have a passion for design and accessibility so I know this major/minor combination will give me the future I want! I am running for Hackathon Director because I love to lead people while taking into account different abilities and mindsets. In the past I was scared to participate in the hackathon, so this year I decided to volunteer. I thought it was such a cool experience and I knew I wanted to be a part of it next year in some way. I got to see first hand how much of a community Winfo is and I want to contribute to that. If elected, I want to make sure that everyone knows how the hackathon is run to make it more accessible and less scary to newcomers. Right now, I work at the DO-IT office as a student office assistant. There, I work on reconciling budgets as well as creative projects on inDesign and Photoshop. These tasks have shown me both the creative side of my workplace and the administrative side. I believe that these skills as well as other experiences in leadership roles have adequately prepared me for the role of Winfo Hackathon Director. So please support me in running for Winfo Hackathon Director! I can wait to serve this amazing community!",
				image: _2020_hailey,
				video: "https://www.youtube.com/embed/n-XRlNDY6Gw"
			},
			{
				name: "Louis Ta",
				statement: "Hi all!\nMy name is Louis, and I am running to be WINFO’s Hackathon Director. I am currently a junior and this will be my second year in Informatics. As a male candidate, it would be an honor to be a part of WINFO as I am extremely passionate about empowering women in technology. My focus as Hackathon Director will be to set up participants for success in their career-related goals. I’ve participated in hackathons before, including Facebook’s invite-only in Menlo Park, so I know that hackathons are a major growth (and clout) opportunity. They can also be used as a stepping stone for internships and career goals, or just a fun thing to do with friends. However, the hackathon experience and its takeaways are in the hands of the coordinator. I developed an understanding of what the tech industry needs as an incoming Software Engineer Intern at T-Mobile, former intern at Microsoft and Moss Adams. Hence, I bring a good sense of what skills industry wants to see from us. Let’s be honest, it kind of feels like you need internships to get internships. My goals as Hackathon Director are for you guys to not only have fun, but make it so you can talk about your hackathon project as relevant experience. Ultimately, helping you with internships and career goals. In all my past internships, I didn’t encounter very many women engineers. However, the few I did encounter were the most bright-minded, inclusive, and down-to-earth engineers I have ever worked with. My commitment as Hackathon Director is to deliver a bomb hackathon, so you guys can talk about it with interviews or use it as a resume booster! Doing this would mean that I can see more of you awesome women engineers in the tech industry :’).",
				image: _2020_louis,
				video: "https://www.youtube.com/embed/K4Peh3GzNU4"
			}
		]
	},
	2021: {
		[Officers.PRESIDENT]: [
            {
				name: "Allison Geary",
				statement: "Hi all!\nMy name is Allison Geary and I am currently a junior in Informatics and one of Winfo’s current Co-Presidents. I am originally from Chicago and have loved making the Pacific Northwest my new home! Some of my interests include theatre, astrology, and anything that has to do with food :). Having grown up in the theater, I love communicating with others and have thoroughly enjoyed my time working alongside the current Winfo Officers. I would love to continue my work with Winfo, therefore I am running for Winfo President  for a second term.   For the past three years, I have been heavily involved in Winfo, first starting off as a First Year Representative to then as their Director of Public Relations, and now as one of their Co-Presidents.  With my background, I believe I can really make an impact by increasing awareness and interest in what Winfo is all about: female empowerment through technology.My leadership skills have grown immensely in the past couple years through being a TA for INFO 200. I want to not only incorporate these leadership skills, but also the knowledge I have gained from being on the Winfo team for the past three years into the President’s position for a second time. I am committed to making a positive impact and putting the time and effort in that’s needed to be a great Winfo President!",
				image: _2021_allison,
				pdf: _2021_allison_resume
			}
		],
		[Officers.VICE_PRESIDENT]: [
            {
                name: "Kayla Chea",
                statement: "Hi WINFO~\nMy name is Kayla and I am running to be your next WINFO Vice President! My Informatics journey began in 2018, the year I started my studies at UW. I had recently determined that pre-med wasn't for me and had no clue what to major in. As the anxiety set in, I luckily encountered Informatics through INFO200 and instantly fell in love. I worked hard to get into the major, and after being in the major for 2 years I can sincerely say I made the right decision.\nAfter getting admitted, I realized how welcoming the Informatics community is. I love how it embraces different backgrounds and offers help to those who need it. I genuinely enjoy connecting with people in the community and have been getting involved wherever I can. This past year I held various leadership positions in the iSchool. I served as WINFO's Creative Director, SUDO's Co-President, a TA for INFO466, and an Informatics tutor. Serving in these positions has greatly developed my ability to lead, communicate, work with people of varying backgrounds, listen to other's opinions, and meet my responsibilities in a timely manner. I believe the experience I gained from these positions would allow me to successfully fulfill the role of WINFO Vice President. \nAs WINFO Vice President, I will continue to foster an environment that celebrates diversity, promotes mutual respect and inclusivity, empowers women in tech, and encourages engagement from the members of the iSchool. I want students to feel like they have a say in decisions at the iSchool and will strive to listen and account for the opinions of the student body. If elected, I will work hard to improve the iSchool and make it a fun and safe space to connect with your peers and pursue your studies!",
                image: _2021_kayla,
                pdf: _2021_kayla_infographic
            },
            {
                name: "Rachel Kinkley",
                statement: "Hey INFO!!\nMy name is Rachel Kinkley and I hope to be WINFO’s next Vice President. Currently, I’m a second-year student pursuing a double major in Informatics and Psychology. The blend of these majors has allowed me to explore my passion of designing and managing technology that promotes social good and benefits the lives of people. Over the past two years, INFO has been such a welcoming space that has provided me with invaluable experiences. The support and sense of community that I have found within WINFO (especially throughout the pandemic) has transformed my college experience and is something that I would like to continue to spread. I believe that being WINFO’s Vice President would be a great way for me to accomplish this.\nI believe that I am qualified for this position because of my experience within WINFO, my leadership skills, and my passion for the INFO community. I am immensely grateful to have joined WINFO as a First-Year-Representative and that I continued as the Director of Community Efforts this past year. During my time in these roles, I gained leadership experience and have become very familiar with WINFO’s virtual and in-person operations. As a result, I have thorough knowledge of what it needed to allow WINFO’s officer team and RSO as a whole to thrive. In addition to my experiences with WINFO, I have grown as a leader while leading a team of nine people as PODUW’s Director of Visualization.  \nIf elected, I would work to emphasize a sense of community – especially in a virtual environment – and diversity within INFO. It is my goal to make all INFO students feel welcome and at home within our community, just as I have felt. \nI would greatly appreciate your vote for me as your next WINFO Vice President! Thank you!",
                image: _2021_rachel,
                video: "https://www.youtube.com/embed/fQ3kuXFSUYo"
            }
		],
		[Officers.FINANCE]: [

		],
		[Officers.CREATIVE]: [
            {
				name: "Dana Rin",
				statement: "Hi everyone! My name is Dana and I am super excited to be running as your Creative Director for WINFO this year! I’m currently a sophomore and a first-year INFO student focusing on the Human-Computer Interaction track.\nBefore coming to UW, I had no idea what informatics meant or that it even existed. I spoke to an advisor about my passions for technology and design and she gave me a little idea of what INFO was, and recommended I take INFO 200… I immediately fell in love with the concept of developing technology for the good of people and found myself wanting to learn more. As a result of this, I participated in WINFO’s 8th Annual Hackathon - my very first hackathon! Not knowing anyone prior, WINFO hosted a mixer where I was quickly welcomed by the WINFO community and was able to find teammates who were just as new to everything as I was. I remember feeling so at home and excited to be working on a day-long project that didn’t even feel like work because of how much fun I was having. This hackathon paved the way for my interests in user experience/interface design that I find so much joy and satisfaction in. \nAs Creative Director, I want to be able to continue WINFO’s mission of empowering women to thrive as producers of technology through creating designs representative of not just women in INFO, but in other areas of the tech world as well. I’m looking forward to meeting more students within the iSchool, so don’t be afraid to reach out to me with any feedback or suggestions you might have - I want to bring as much joy to you as I do when designing your merch for you! Thank you!",
				image: _2021_dana,
				pdf: _2021_dana_infographic
			}
		],
		[Officers.PUBLIC_RELATIONS]: [
            {
				name: "Sam Rondini",
				statement: "Hi INFO! My name is Sam and I am so excited to be in the running for the next WINFO Director of Public Relations position! I am a current junior Informatics student pursuing a custom track designed to explore data and design ethics. Upon admittance to the iSchool, I quickly searched for more ways to get involved and expand my network, leading me to join WINFO! \nThrough my experience as a WINFO First Year Representative, I found a community that values diverse thoughts and welcomes every identity and background. The FYR team and I had the opportunity to plan 3 different WINFO events, ranging from career workshops to social hours, and we were able to create a space where people felt like they could be themselves. \nBefore coming to UW, I had zero clue what informatics was. I knew I wanted to help people and design things that were ethical and just, but I did not know where to start. The WINFO platforms really demonstrated to me that there were people on campus that had the same passions. I have been so inspired by the incredible members of this organization and I hope to collaborate with them to ensure diversity, acceptance, and encouragement remain some of the top values of WINFO and its surrounding community.  \nIn order to accomplish this, I plan to expand WINFO’s social media presence and provide more opportunities for virtual user engagement, in and outside of the iSchool community. Social media is shifting to a platform for consistent learning and I want to provide easily accessible career and industry resources, creating a space where our members can constantly grow and develop.\nI have greatly appreciated my experiences in WINFO so far and I would love the opportunity to help WINFO reach new heights.\n\"Scroll\" through my instagram in the video below to learn more about me!",
				image: _2021_sam,
				video: 'https://www.youtube.com/embed/4ojfgcqmd8Y'
			}
		],
		[Officers.OUTREACH]: [
            {
				name: "Elise Adams",
				statement: "My name is Elise Adams, and I am currently a junior studying Informatics and Psychology at UW. I love exploring the intersection of people and technology, whether it be by navigating the intricacies of collaborative teamwork, identifying ways to satisfy people’s needs based on varied levels of ability, or turning raw data into information intended to influence decision making. I have been a member of the Winfo community since the beginning of my sophomore year, and recently assisted in planning and executing Winfo's 9th Annual Hackathon as a member of the Hackathon committee!",
				image: _2021_elise,
				pdf: _2021_elise_resume
			},
            {
				name: "Melina Perraut",
				statement: "Hi everyone! I’m Melina and I’m running to be WINFO’s next Director of Outreach.\nAs a freshman direct admit to Informatics, I entered the iSchool excited to study my dream major but uncertain of how well I would fit within a new, virtual community. However, I have been consistently blown away by the iSchool’s inclusivity. I am incredibly grateful for the chance to contribute to this community and foster that sense of belonging within others.\nAs a WINFO first year representative, I have helped plan community-building and career prep events such as Chatsgiving and Pitch Perfect. I have also shadowed the current Director of Outreach to better understand the role’s responsibilities. Beyond WINFO, I have experience conducting outreach for various organizations. As an intern at a legal non-profit assisting disadvantaged populations, I contacted political representatives and designed workshops to serve community members. As Vice President of my high school’s Science National Honors Society, I worked with elementary schools to increase awareness of STEM opportunities. I also helped run a middle school outreach program for my Speech and Debate team. I am passionate about using outreach to connect those in need with resources to help them succeed, which I hope to continue to do within WINFO. \nAs Director of Outreach, I would continue to foster WINFO’s partnerships with professional organizations while introducing new opportunities to further WINFO’s mission of empowering women and minorities within tech. I plan to strengthen WINFO’s bond with employers despite the pandemic through events such as virtual company information sessions and tours to expand industry connections and professional opportunities for Informatics students. \nWINFO and the iSchool have already helped me grow tremendously, and I hope to pay that forward. Thank you for your time, and I would be honored to serve as your WINFO Director of Outreach!",
				image: _2021_melina,
				pdf: _2021_melina_resume
			}
		],
		[Officers.DIVERSITY]: [
            {
				name: "Roshni Srikanth",
				statement: "Hi! I’m Roshni and I’m running to be WINFO’s next director of Diversity Efforts!\nI started college virtually, so I was expecting a lonely first year where I would stare at my computer all day. However, after my first week, I was amazed by how vibrant the iSchool community was, even through Zoom. \nI had the incredible experiences of being a first-year representative for WINFO and being a part of WINFO’s diversity committee. I worked with the other first-year representatives and officers to create events like Chatsgiving, Pitch Perfect, and the Microaggressions power hour. I also shadowed the current directors of Diversity Efforts and Community Efforts to learn about what diversity looks like and how to create events that best reflect the values of the iSchool. \nI want to be your next director of Diversity Efforts because I know how impactful informatics outreach can be. While in high school, I attended a workshop hosted by WINFO, which cemented my interest in pursuing technology as a career. My passion for outreach enabled me to co-found a company called the Legion of Bot, and become the manager of a club called STEM Reach. As part of these organizations, I planned workshops to encourage students from various backgrounds to pursue STEM. As diversity officer, I would use my connections to expand our relationship with K-12 schools, and use my event-planning experience to encourage more diverse people to learn about informatics. I would also work closely with the director of Community Efforts to host more DEI-centered events for minorities in the iSchool. \nAll the wonderful people I have met this year have made my experience at the iSchool incredible. I would love to be able to support this amazing community reach its goals of diversity, equity, and inclusion as your next Director of Diversity!",
				image: _2021_roshni,
				pdf: _2021_roshni_resume
			},
            {
				name: "Janvi Wadhawan",
				statement: "Hi, I’m Janvi! I am currently a Junior at the iSchool pursuing a custom track focusing on both HCI and BHI. In my spare time, I like to test out new recipes, go to the gym, and dabble in film photography. \nAs a freshman, who had just been introduced to this new major, I had didn’t have much understanding of the potential of informatics. After taking classes and speaking to iSchool alum I was intrigued by the opportunities to positively affect the technology that is consuming our world. Whether that be making it more accessible to people of different abilities or viewing it through ethical frameworks to help identify and change discriminatory systems. \nAs the director of diversity, I would like to focus on reaching young people interested in technology and especially young women who are typically discouraged away from STEM fields. I believe the impact of empowering more diverse young people to pursue tech is the start of making technology more equitable and accessible. \nAs an international student, I can empathize with the feelings of being the out-group and it would be my mission to advocate for anyone who feels unheard. Therefore, I would also like to expand diversity events to facilitate conversations among informatics students to voice their unique experiences and potential struggles they face in the iSchool and the greater campus. \nI would love to be a part of a team of inspiring and uplifting women and be able to contribute my own ideas and effort. Therefore, I believe I can make a positive impact on the growth and reach of the organization while supporting the women around me.",
				image: _2021_janvi,
				pdf: _2021_janvi_infographic
			}
		],
		[Officers.COMMUNITY_EFFORTS]: [
            {
				name: "Gisele Josephine Fox",
				statement: "Hey guys! My name is Gisele Fox, I use she/her or they/them pronouns, and I’m running for Director of Community Efforts.\nSince October I’ve been a part of WINFO’s Diversity Committee where I’ve had a hand in brainstorming and planning events like the imposter syndrome panel and microaggression power hour. I’d be excited to start working as the Director of Community Efforts as someone who’s worked closely with Rachel and Harkiran and has some ideas of their own to throw into the mix.\nOne idea I’m interested in pursuing is a WINFO podcast where me and the WINFO team can explore all the creative ways you can work with informatics as well as create a space where we can connect as classmates. We’ve already started recording some episodes and, even though I’m planning on pursuing it whether or not I get elected, I think being a member of the core team would be a great position for me to be in to bring this passion project to fruition.\nAs director of community efforts, not only do I want to continue to pursue live events but I also want to find ways to archive all the knowledge we learn from them. I want to create systems to make sure all the info we learn from these amazing guests can be easily accessed for years to come. That way you can find exactly what you’re looking for at any time, whether you’re wondering what it’s like to be a product manager or how to beat the classic imposter syndrome.\nIn the end, I want to make sure we as the students get a kind and accepting space for us to learn and grow as people. I’d love to be there for you as your next Director of Community Efforts!",
				image: _2021_gisele,
				video: 'https://www.youtube.com/embed/FJndt0k-uxg'
			},
            {
				name: "Emiri Nishizawa",
				statement: "Hi, all! I’m Emiri Nishizawa, a freshman direct admit to the Informatics major. I am running to be your next WINFO Director of Community Efforts! \nI was introduced to Informatics and the UW iSchool in my junior year of high school when I attended the UW WiSE conference. My friends and I had started a WiSE (Women in Science and Engineering) club earlier that year. Our focus was to introduce ourselves and others to the different opportunities within STEM. We also worked to learn about women’s experience in those fields. The iSchool advisor’s presentation at one of our meetings opened my eyes to the world of Informatics. I became interested in Informatic’s goals of working with technology to better the world. \nThrough many experiences, I have gained leadership experience that I hope to utilize and expand upon. In addition to co-leading the WiSE club with my friends, I was the co-captain for both my high school and club swim team. As an introvert myself, I find it important and fun to find ways to bring people within a community together. Through my journey at the iSchool, I hope to connect with more people in the diverse community. I am grateful for the opportunities and relationships that WINFO has provided me with, especially as a first-time college student during a pandemic. I was part of the Hackathon Committee this year that aided in planning the Hackathon and the preceding events. As the Director of Community Efforts, I hope to give back to the WINFO and iSchool community that welcomed me so warmly. \nThank you so much for your time, and I hope you consider me as your WINFO Director of Community Efforts. ",
				image: _2021_emiri,
				pdf: _2021_emiri_infographic
			}
		],
		[Officers.HACKATHON_DIRECTOR]: [
            {
				name: "Sharon Lin",
				statement: "Hi INFO! My name is Sharon, and I am running to be your next WINFO Hackathon Director! I am currently a junior in Informatics and Economics pursuing the custom track focusing on software development and data science. As someone passionate about women empowerment in tech, I am thrilled by the opportunity to be a part of an inclusive community that values diversity and inclusion and be coordinating one of the largest events in the iSchool!\nLike many students at UW, the WINFO Hackathon was the first collegiate hackathon I have ever attended. For me, it was inspiring to see students with different coding and design backgrounds collaborating on such impactful projects that address a wide array of issues. As your next WINFO Hackathon Director, I want to continue bringing these experiences that promote inclusivity, accessibility, and social good. In addition to that, I aim to make the experience even better by incorporating more workshops, prizes/tracks, mentorship, and networking opportunities, to further emphasize and reflect the great diversity within hackers. \nHaving attended hackathons as a hacker and organized an online hackathon last month as the Co-Director of Tech at TechTogether Seattle, I have gained significant experiences and insights into the necessary preparation and implementation that ensure a successful running of a hackathon. For the past school year, my RSO involvement through SUDO and the Society of Women Engineers at UW has also allowed me to build strong leadership and make meaningful connections with other students. I believe that these cumulative experiences make me a strong candidate for the role of Hackathon Director! \nThank you for taking the time to read my personal statement, and please support me in the running for WINFO's next Hackathon Director! I can't wait to serve this supportive and growing community!",
				image: _2021_sharon,
				pdf: _2021_sharon_resume
			}
		]
	}
}