import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const GITHUB_LOGO = "/icons/github-white.svg";
  const REALDEVSQUAD_IMAGE="/images/Real-Dev-Squad@1x.svg";
  let prev=false;
  const [toggle, setToggle] = useState<boolean>(false);
  const sidebarToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="font-bold text-base font-sans sticky z-1 insert-0">
        <nav className="bg-[#1d1283]">
          <div className="laptop:hidden h-[70px] w-[70px] p-[18px] inline-block cursor-pointer text-[20px] text-white" onClick={sidebarToggle}>
            <span className="block w-[25px] h-[3px] my-[5px] mx-auto bg-[#fff]"></span>
            <span className="block w-[25px] h-[3px] my-[5px] mx-auto bg-[#fff]"></span>
            <span className="block w-[25px] h-[3px] my-[5px] mx-auto bg-[#fff]"></span>
          </div>
          <div className="laptop:hidden block m-5 absolute top-0 right-0">
            <Link
              className='p-0 m-5.5'
              href="#"
            >
              <button className="rounded-md p-[5px] bg-[#1d1283] text-white cursor-pointer border-2 border-solid border-white flex justify-around" >
                Sign In
                <Image
                   className="ml-1 rounded-[50%] h-[20px] w-[20px]"
                  src={GITHUB_LOGO}
                  alt="GitHub Icon"
                  height={15}
                  width={15}
                />
              </button>
            </Link>
          </div>
          <ul
            className={`laptop:block laptop:list-none laptop:m-0 laptop:p-0 laptop:overflow-hidden laptop:bg-[#1d1283] ${toggle?'text-[#e30464] block shadow-lg':'hidden'}
            bg-white w-full py-2.5 px-0`}
          >
            <li className="laptop:block laptop:float-left laptop:py-3 laptop:px-5 hidden float-none" >
              <Link className='laptop:m-0 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:p-0 laptop:no-underline laptop:hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="">
                <Image
                  src={REALDEVSQUAD_IMAGE}
                  alt="home nav logo"
                  height={55}
                  width={55}
                />
              </Link>
            </li>
            <li className="laptop:float-left laptop:hidden block float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-2.5 px-10 text-[#1d1283]' href="http://realdevsquad.com/">Home</Link></li>
            <li className="laptop:float-left float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="https://welcome.realdevsquad.com/">Welcome</Link></li>
            <li className="laptop:float-left float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="https://www.realdevsquad.com/events">Events</Link></li>
            <li className="laptop:float-left float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="https://members.realdevsquad.com/">Members</Link></li>
            <li className="laptop:float-left float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="https://crypto.realdevsquad.com/">Crypto</Link></li>
            <li className="laptop:float-left float-none"><Link className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline hover:text-[#49a82e] py-[10px] px-[40px] text-[#1d1283]' href="https://status.realdevsquad.com/">Status</Link></li>
            <li className="laptop:block laptop:float-right hidden float-none">
              <Link className='laptop:m-[22px] block laptop:rounded-lg laptop:text-white laptop:text-center laptop:p-0 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-[#1d1283]'
                href="#"
              >
                <button className="rounded-md p-[5px] bg-[#1d1283] text-white cursor-pointer border-2 border-solid border-white flex justify-around">
                  Sign In With GitHub
                  <Image
                     className="ml-[4px] rounded-[50%] h-[20px] w-[20px]"
                    src={GITHUB_LOGO}
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
