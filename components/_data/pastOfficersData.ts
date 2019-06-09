import { Officers, OfficerInfo } from "./homePageData";
import _2015_sebring from '../_assets/electionsImages/2015/Sebring.jpg';
import _2015_amaral from '../_assets/electionsImages/2015/Amaral.jpg';
import _2015_mcdonough from '../_assets/electionsImages/2015/Harry.jpg';
import _2015_yan from '../_assets/electionsImages/2015/Yan.jpg';
import _2015_woehrle from '../_assets/electionsImages/2015/Austin.jpg';
import _2015_watson from '../_assets/electionsImages/2015/Watson.jpg';
import _2015_munn from '../_assets/electionsImages/2015/Munn.jpg';
const _2015_lopez = require('../_assets/electionsImages/2015/Lopez.jpg');


type PastOfficersData = {
    [year: number]: OfficerInfo[]
}

export const pastOfficersData: PastOfficersData = {
    2019: [
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
            picture: ""
        },
        {
            position: Officers.VICE_PRESIDENT,
            name: "Rutvi Patel",
            picture: ""
        },
        {
            position: Officers.FINANCE,
            name: "Benjamin Leeds",
            picture: ""
        },
        {
            position: Officers.CREATIVE,
            name: "Jenna Han",
            picture: ""
        },
        {
            position: Officers.PUBLIC_RELATIONS,
            name: "Brad Holland",
            picture: ""
        },
        {
            position: Officers.OUTREACH,
            name: "Austin Woehrle",
            picture: ""
        },
        {
            position: Officers.IT,
            name: "Alexander Bell-Towne",
            picture: ""
        },
        {
            position: Officers.DIVERSITY,
            name: "Royce Le",
            picture: ""
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