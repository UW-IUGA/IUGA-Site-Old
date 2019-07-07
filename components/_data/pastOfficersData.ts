import { Officers, OfficerInfo } from "./homePageData";

/** 2019 officer images */
import _2019_alejandro from "../_assets/electionsImages/2019/alejandro.jpg";
import _2019_william from "../_assets/electionsImages/2019/williamkwok.jpg";
import _2019_casey from "../_assets/electionsImages/2019/caseytran.jpg";
import _2019_godgiven from "../_assets/electionsImages/2019/godgiven.jpg";
import _2019_shruti from "../_assets/electionsImages/2019/shrutir.jpg";
import _2019_allison from '../_assets/electionsImages/2019/allison_lee.jpg';
import _2019_dayoung from '../_assets/electionsImages/2019/dayoung.jpg';
import _2019_kiran from '../_assets/electionsImages/2019/kiran.jpg';

/** 2017 officer images */
import _2017_alex from '../_assets/electionsImages/2017/alex-gilbert.jpg';
import _2017_brendan from '../_assets/electionsImages/2017/brendan-kellogg.jpg';
import _2017_chris from '../_assets/electionsImages/2017/chris-oh.jpg';
import _2017_davin from '../_assets/electionsImages/2017/davin-lee.jpg';
import _2017_ethan from '../_assets/electionsImages/2017/ethan-anderson.jpg';
import _2017_jessica from '../_assets/electionsImages/2017/jessica-libman.jpg';
import _2017_rosemary from '../_assets/electionsImages/2017/rosemary-adams.jpg';
import _2017_sanjana from '../_assets/electionsImages/2017/sanjana-galgalikar.jpg';


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
const _2015_lopez = require('../_assets/electionsImages/2015/Lopez.png');

/**
 * PastOfficersData uses OfficerInfo from the homePageData file. Sorry for inconsistencies
 * for whoever modifies this in the future. Just know it was better than the previous stack.
 * 
 * Last Modified
 *      William Kwok
 *      July 6, 2019
 */
type PastOfficersData = {
    [year: number]: OfficerInfo[]
}

/**
 * Contains all the data about past officers.
 * 
 * Last Modified
 *      William Kwok
 *      July 6, 2019
 */
export const pastOfficersData: PastOfficersData = {
    // 2019: [
    //     {
    //         position: Officers.PRESIDENT,
    //         name: "Alejandro Huante",
    //         picture: _2019_alejandro,
    //         github: "https://github.com/ahuante-1741170",
    //         linkedin: "https://www.linkedin.com/in/alejandro-huante-28533a141/"
    //     },
    //     {
    //         position: Officers.VICE_PRESIDENT,
    //         name: "James Kim",
    //         github: "https://github.com/thejameskim",
    //         linkedin: "https://www.linkedin.com/in/thejameskim/"
    //     },
    //     {
    //         position: Officers.FINANCE,
    //         name: "Kiran Pradhan",
    //         picture: _2019_kiran,
    //         github: "https://github.com/kiranpradhan01",
    //         linkedin: "https://www.linkedin.com/in/kiran-pradhan-aa8861162/"
    //     },
    //     {
    //         position: Officers.CREATIVE,
    //         name: "Casey Tran",
    //         picture: _2019_casey,
    //         linkedin: "https://www.linkedin.com/in/caseytran/"
    //     },
    //     {
    //         position: Officers.PUBLIC_RELATIONS,
    //         name: "Allison Lee",
    //         picture: _2019_allison,
    //         github: "https://github.com/alliL",
    //         linkedin: "https://www.linkedin.com/in/allison20/"
    //     },
    //     {
    //         position: Officers.OUTREACH,
    //         name: "Dayoung Cheong",
    //         picture: _2019_dayoung,
    //         github: "https://github.com/dayoungcheong",
    //         linkedin: "https://www.linkedin.com/in/dayoungcheong/"
    //     },
    //     {
    //         position: Officers.DIVERSITY,
    //         name: "Godgiven Reamico",
    //         picture: _2019_godgiven,
    //         linkedin: "https://www.linkedin.com/in/godgiven1/"
    //     },
    //     {
    //         position: Officers.IT,
    //         name: "William Kwok",
    //         picture: _2019_william,
    //         github: "https://github.com/kwokwilliam",
    //         linkedin: "https://www.linkedin.com/in/william-w-kwok/",
    //         website: "https://williamk.info"
    //     },
    //     {
    //         position: Officers.ACADEMIC,
    //         name: "Shruti Rajagopalan",
    //         picture: shruti,
    //         github: "https://github.com/ShrutiR5",
    //         linkedin: "https://www.linkedin.com/in/shrutira/"
    //     }
    // ],
    2018: [
        {
            position: Officers.PRESIDENT,
            name: "",
            picture: ""
        },
        {
            position: Officers.VICE_PRESIDENT,
            name: "",
            picture: ""
        },
        {
            position: Officers.FINANCE,
            name: "",
            picture: ""
        },
        {
            position: Officers.CREATIVE,
            name: "",
            picture: ""
        },
        {
            position: Officers.PUBLIC_RELATIONS,
            name: "",
            picture: ""
        },
        {
            position: Officers.OUTREACH,
            name: "",
            picture: ""
        },
        {
            position: Officers.IT,
            name: "",
            picture: ""
        },
        {
            position: Officers.DIVERSITY,
            name: "",
            picture: ""
        },
    ],
    2017: [
        {
            position: Officers.PRESIDENT,
            name: "",
            picture: ""
        },
        {
            position: Officers.VICE_PRESIDENT,
            name: "",
            picture: ""
        },
        {
            position: Officers.FINANCE,
            name: "",
            picture: ""
        },
        {
            position: Officers.CREATIVE,
            name: "",
            picture: ""
        },
        {
            position: Officers.PUBLIC_RELATIONS,
            name: "",
            picture: ""
        },
        {
            position: Officers.OUTREACH,
            name: "",
            picture: ""
        },
        {
            position: Officers.IT,
            name: "",
            picture: ""
        },
        {
            position: Officers.DIVERSITY,
            name: "",
            picture: ""
        },
    ],
    2016: [
        {
            position: Officers.PRESIDENT,
            name: "Jonathan Li",
            picture: _2016_li,
            linkedin: "https://www.linkedin.com/in/jonathanpli",
            github: "https://github.com/jonathanpli"
        },
        {
            position: Officers.VICE_PRESIDENT,
            name: "Rutvi Patel",
            picture: _2016_patel,
            linkedin: "https://www.linkedin.com/in/rutvimpatel",
            github: "https://github.com/rutvimpatel"
        },
        {
            position: Officers.FINANCE,
            name: "Benjamin Leeds",
            picture: _2016_leeds,
            linkedin: "https://www.linkedin.com/in/benjaminleeds"
        },
        {
            position: Officers.CREATIVE,
            name: "Jenna Han",
            picture: _2016_han,
            linkedin: "https://www.linkedin.com/in/jennahan"
        },
        {
            position: Officers.PUBLIC_RELATIONS,
            name: "Brad Holland",
            picture: _2016_holland,
            linkedin: "https://www.linkedin.com/in/bradleyrholland"
        },
        {
            position: Officers.OUTREACH,
            name: "Natasha Dietzler",
            picture: _2016_dietzler,
            linkedin: "https://www.linkedin.com/in/ndietzler"
        },
        {
            position: Officers.IT,
            name: "Alexander Bell-Towne",
            picture: _2016_belltowne,
            linkedin: "https://www.linkedin.com/in/alexbbt",
            github: "https://github.com/alexbbt"
        },
        {
            position: Officers.DIVERSITY,
            name: "Royce Le",
            picture: _2016_le,
            linkedin: "https://www.linkedin.com/in/roycevanle"
        },
    ],
    2015: [
        {
            position: Officers.PRESIDENT,
            name: "Daniel Sebring",
            linkedin: "https://www.linkedin.com/in/danielsebring",
            picture: _2015_sebring
        },
        {
            position: Officers.VICE_PRESIDENT,
            name: "Allison Amaral",
            linkedin: "https://www.linkedin.com/in/allisonamaral",
            picture: _2015_amaral
        },
        {
            position: Officers.FINANCE,
            name: "Harry McDonough",
            picture: _2015_mcdonough
        },
        {
            position: Officers.PUBLIC_RELATIONS,
            name: "Kevin Yan",
            linkedin: "https://www.linkedin.com/in/kevinlyan",
            picture: _2015_yan
        },
        {
            position: Officers.OUTREACH,
            name: "Austin Woehrle",
            linkedin: "https://www.linkedin.com/in/austin-woehrle-75361a47",
            picture: _2015_woehrle
        },
        {
            position: Officers.OPERATIONS,
            name: "Linnea Watson",
            linkedin: "https://www.linkedin.com/in/linneawatson",
            picture: _2015_watson
        },
        {
            position: Officers.IT,
            name: "Hiram Munn",
            linkedin: "https://www.linkedin.com/in/hirammunn",
            website: "https://hmunn.com/",
            github: "http://www.github.com/hmunn",
            picture: _2015_munn
        },
        {
            position: Officers.DIVERSITY,
            name: "Jill Lopez",
            linkedin: "https://www.linkedin.com/in/lopezjill",
            picture: _2015_lopez
        }
    ]
}