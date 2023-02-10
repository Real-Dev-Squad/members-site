import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import HOCNavbar from './HOCNavbar';
import styles from './navbar.module.scss';

const Navbar = () => {
  const GITHUB_LOGO = "/icons/github.png"
  const DEFAULT_AVATAR = '/images/Avatar.png';
  const [toggle, setToggle] = useState(false);
  const sidebarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.wrapper}>
        <nav className={styles.navBar}>
          <div className={styles.hamburger} onClick={sidebarToggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div className={styles.navBarLogin}>
            <Link
              className={styles.btnLogin}
              href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97"
            >
              <button className={styles.btnLoginText} >
                Sign In
                <Image
                  className={styles.githubLogo}
                  src={GITHUB_LOGO}
                  alt="GitHub Icon"
                  height={15}
                  width={15}
                />
              </button>
            </Link>
          </div>
          <ul
            className={`${styles.navBarMenu} ${toggle ? `${styles.active}` : ''
              }`}
          >
            <li className={styles.navBarLogoLi} >
              <Link href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97">
                <Image
                  src="/images/Real-Dev-Squad@1x.png"
                  alt="home nav logo"
                  height={50}
                  width={50}
                />
              </Link>
            </li>
            <Link className={styles.homeTab}href="http://realdevsquad.com/">Home</Link>
            <li><Link href="https://welcome.realdevsquad.com/">Welcome</Link></li>
            <li><Link href="https://www.realdevsquad.com/events">Events</Link></li>
            <li><Link href="https://members.realdevsquad.com/">Members</Link></li>
            <li><Link href="https://crypto.realdevsquad.com/">Crypto</Link></li>
            <li><Link href="https://status.realdevsquad.com/">Status</Link></li>
            <li className={styles.navBarLoginLi}>
              <Link
                className={styles.btnLogin}
                href="https://my.realdevsquad.com/profile"
              >
                <button className={styles.btnLoginText}>
                  Sign In With GitHub
                  <Image
                    className={styles.githubLogo}
                    src="/icons/github-white.png"
                    alt="GitHub Icon"
                    height={15}
                    width={15}
                  />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
