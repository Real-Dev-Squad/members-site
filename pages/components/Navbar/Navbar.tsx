import React, { useState } from 'react'
import Image from 'next/image';
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
      <>
        <nav className={styles.navBar}>
          <div className={styles.hamburger} onClick={sidebarToggle}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <div className={styles.navBarLogin}>
            <a
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
            </a>
          </div>
          <ul
            className={`${styles.navBarMenu} ${toggle ? `${styles.active}` : ''
              }`}
          >
            <li className={styles.navBarLogoLi} >
              <a href="https://github.com/login/oauth/authorize?client_id=23c78f66ab7964e5ef97">
                <Image
                  src="/images/Real-Dev-Squad@1x.png"
                  alt="home nav logo"
                  height={50}
                  width={50}
                />
              </a>
            </li>
            <li className={styles.homeTab}><a href="http://realdevsquad.com/">Home</a></li>
            <li><a href="https://welcome.realdevsquad.com/">Welcome</a></li>
            <li><a href="https://www.realdevsquad.com/events">Events</a></li>
            <li><a href="https://members.realdevsquad.com/">Members</a></li>
            <li><a href="https://crypto.realdevsquad.com/">Crypto</a></li>
            <li><a href="https://status.realdevsquad.com/">Status</a></li>
            <li className={styles.navBarLoginLi}>
              <a
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
              </a>
              {/* <div className={styles.userGreet}>
                <div className={styles.userGreetMsg}>Hello, User!</div>
                <Image className={styles.userProfilePic}/>
              </div> */}
            </li>
          </ul>
        </nav>
      </>
    </div>
  )
}

export default Navbar
