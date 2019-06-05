import React from 'react';
import Link from 'next/link';
import iugaLogoImage from '../_assets/navbarImages/IUGA-header-image.jpg';

type NavigationBarProps = {

}

export const NavigationBar: React.FC<NavigationBarProps> = () => {

    return <header>
        <nav>
            <div>
                <Link href="/">
                    <img alt="IUGA Logo" id="iuga-logo" src={iugaLogoImage} />
                </Link>
            </div>
        </nav>
    </header>
}