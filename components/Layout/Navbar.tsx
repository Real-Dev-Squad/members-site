import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link'
import REALDEVSQUAD_IMAGE from "public/images/Real-Dev-Squad@1x.svg"
import GITHUB_LOGO from "public/icons/Github_Logo.svg"


const Navbar = () => {

    // maintains hamburger toggle state
    const [toggle, setToggle] = useState(false)

    // Handles toggle of hamburger
    const onClickHandler = () => {
        console.log(toggle)
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
                    <Link href="#">
                        <button className="border-2 rounded-lg text-sm p-1 gap-1 flex flex-row">
                            Sign In
                            <Image src={GITHUB_LOGO} alt="git" />
                        </button>
                    </Link>
                </div>
            </div>
            {/* nav for width greater then lg */}
            <ul className={`lg:flex flex-row ${toggle?'bg-white text-[#1d1283] py-2 shadow-[#334155] shadow-2xl':'hidden'} justify-between w-full`}>
                <div className="lg:flex flex-row">
                    <li className="px-4 py-2 lg:flex items-center hidden">
                        <Link href="https://realdevsquad.com/">
                            <Image src={REALDEVSQUAD_IMAGE} alt="RDS" width={50} />
                        </Link>
                    </li>
                    <li className="flex items-center m-2 px-7 py-2 lg:px-5 lg:py-5 font-bold"><Link href="#home">Home</Link></li>
                    <li className="flex items-center m-2 px-7 lg:px-5 py-2 lg:py-5 font-bold" ><Link href="#welcome">Welcome</Link></li>
                    <li className="flex items-center m-2 px-7 lg:px-5 py-2 lg:py-5 font-bold" ><Link href="#event">Events</Link></li>
                    <li className="flex items-center m-2 px-7 lg:px-5 py-2 lg:py-5 font-bold" ><Link href="#member">Members</Link></li>
                    <li className="flex items-center m-2 px-7 lg:px-5 py-2 lg:py-5 font-bold" ><Link href="#crypto">Crypto</Link></li>
                    <li className="flex items-center m-2 px-7 lg:px-5 py-2 lg:py-5 font-bold" ><Link href="#status">Status</Link></li>
                </div>
                <div className="lg:flex flex-row hidden">
                    <li className="flex items-center m-2 px-5 py-3">
                        <Link href="#">
                            <button className="flex flex-row border-2 rounded-lg text-sm p-1 gap-1">
                                Sign In With GitHub
                                <Image src={GITHUB_LOGO} alt="git" />
                            </button>
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar