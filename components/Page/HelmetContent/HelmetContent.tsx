import React from 'react';
import { Helmet } from 'react-helmet';
import bbqbanner from '../../_assets/site/bbq_banner.jpg';
import monogram from '../../_assets/site/IUGA-Monogram.jpg';
/**
 * png files have to be `require`d and cannot be imported correctly.
 */
const icon = require('../../_assets/site/icon.png');

/**
 * HelmetContent contains crucial metadata about the website, like the title elements, banner
 * content for linked things, the icon, etc.
 * 
 * Last Modified
 *      William Kwok
*       June 9, 2019
 */
export const HelmetContent = () => {
    return <Helmet>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#39275b"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/** OpenGraph content. Used for when our page is linked to other websites like Facebook or Slack */}
        <meta property="og:title" content="Informatics Undergraduate Association (IUGA)" />
        <meta property="og:site_name" content="Informatics Undergraduate Association (IUGA)" />
        <meta property="og:description" content="The Informatics Undergraduate Association (IUGA) is a Registered Student Organization that functions as a student government for Informatics students." />
        <meta property="og:image" content={bbqbanner} />
        <meta property="og:type" content="school" />

        {/** Twitter graph content. Used when our page is shared on twitter. */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@iugauw" />
        <meta name="twitter:title" content="Informatics Undergraduate Association" />
        <meta name="twitter:description" content="The Informatics Undergraduate Association (IUGA) is a Registered Student Organization that functions as a student government for Informatics students." />
        <meta name="twitter:image" content={monogram} />
        <meta name="twitter:image:alt" content="Informatics Undergraduate Association (IUGA) Logo" />

        <link rel="shortcut icon" href={icon} />
        <title>IUGA</title>
    </Helmet>
}