import React, { useState } from 'react';
import Link from 'next/link';
import iugaLogoImage from '../_assets/navbarImages/IUGA-header-image.jpg';
import './NavigationBar.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { navigationBarLinks, NavigationBarLink } from '../_data/navigationBarLinks';

type NavigationBarProps = {
    pathname: string
}

/**
 * NavigationBar is the main navigation bar of the IUGA website. A lot of it is boilerplate code
 * that can be found on the reactstrap documentation: 
 * 
 * https://reactstrap.github.io/components/navbar/
 * 
 * Note that at the moment the Reactstrap documentation has a dependency that's actually blocked by
 * adblockers.
 * 
 * Last Modified:
 *      William Kwok
 *      June 5, 2019
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({ pathname }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <header>
        <Navbar className="navigation-bar" light expand="md">
            <Link href="/">
                <a>
                    <img alt="IUGA Logo" id="iuga-logo" src={iugaLogoImage} />
                </a>
            </Link>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {navigationBarLinks.map((navbarLink: NavigationBarLink) => {
                        return <NavItem className="navbar-item" key={navbarLink.name}>
                            {/** Check the current page name */}
                            <Link href={navbarLink.link}>
                                <a className={`navbar-link ${pathname === navbarLink.link ?
                                    "navbar-link-active" : ""}`}>{navbarLink.name}</a>
                            </Link>
                        </NavItem>
                    })}
                </Nav>
            </Collapse>
        </Navbar>
    </header>
}