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

const IUGA_ELECTIONS_ORDER_PRIORITY = [
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

const IUGA_ELECTIONS: Elections = {
	2015: {
		[Officers.PRESIDENT]: [
			{
				name: "Daniel Sebring",
				elected: true,
				image: _2015_sebring,
				video: "https://www.youtube.com/embed/FQtWwfO0jAg",
				statement: "I'm accepting the nomination for the role of president because there's nothing more important to me than Informatics and the Informatics family.  The exceptional students, professors, and staff mean so much to me and I want to do anything I can to further improve our status at UW and in the local tech community, while working to keep up the tradition of bringing the major closer together for a more enriching college experience and connections that extend beyond our limited time in school.  I want to keep up the good work and build on the foundation laid by our fantastic current executive board, and make sure the Informatics program grows even more relevant, more useful, and of course- more fun.  Thank you."
			},
		]
	}
}