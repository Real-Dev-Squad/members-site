// Internal library imports
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

// static file imports
import REALDEVSQUAD_IMAGE from "public/images/Real-Dev-Squad@1x.svg"
import GITHUB_LOGO from "public/icons/Github_Logo.svg"
import navItems from '@/constants/NavConstants';


const Navbar = () => {

    // maintains hamburger toggle state
    const [toggle, setToggle] = useState<Boolean>(false)

    // dynamic hamburger style on toggle
    const hamburgerStyle: String = toggle?'bg-white text-[#1d1283] py-2 shadow-[#334155] shadow-2xl':'hidden'

    // Handles toggle of hamburger
    const onClickHandler = () => {
        setToggle(preState => !preState)
    }

    return (
        <nav className = "bg-[#1d1283] text-white">
            {/* nav for width less then lg */}
            <div className="flex flex-row lg:hidden justify-between w-full">
                {/* hamburger menu */}
                <div className="m-2 px-5 py-4 space-y-2" onClick={onClickHandler}>
                    <span className="block w-8 h-1 bg-white"></span>
                    <span className="block w-8 h-1 bg-white"></span>
                    <span className="block w-8 h-1 bg-white"></span>
                </div>
                {/* Sign in with Github */}
                <div className="flex items-center m-2 px-5 py-3">
                        <button className="border-2 rounded-lg text-sm p-1 gap-1 flex flex-row">
                            Sign In
                            <Image src={GITHUB_LOGO} width={20} height={20} alt="git" />
                        </button>
                </div>
            </div>
            {/* nav for width greater then lg */}
            <ul className={`lg:flex flex-row ${hamburgerStyle} justify-between w-full`}>
                <div className="lg:flex flex-row">
                    {/* RDS Logo */}
                    <li className="px-4 py-2 lg:flex items-center hidden">
                        <Link href="https://realdevsquad.com/">
                            <Image src={REALDEVSQUAD_IMAGE} alt="RDS" width={50} />
                        </Link>
                    </li>
                    {/* iterating over navList */}
                    {
                        navItems.map((item)=>{
                            return (
                                <li className="flex items-center m-2 px-7 py-2 lg:px-5 lg:py-5 font-bold" id={`nav-item-${item.id}`}>
                                    <Link href={`${item.link}`}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </div>
                {/* Sign in with Github */}
                <div className="lg:flex flex-row hidden">
                    <li className="flex items-center m-2 px-5 py-3">
                            <button className="flex flex-row border-2 rounded-lg text-sm p-1 gap-1">
                                Sign In With GitHub
                                <Image src={GITHUB_LOGO} width={20} height={20} alt="git" />
                            </button>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar