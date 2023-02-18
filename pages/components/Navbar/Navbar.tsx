import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const GITHUB_LOGO = "/icons/github-white.svg";
  const REALDEVSQUAD_IMAGE="/images/Real-Dev-Squad@1x.svg";
  const NAVMENU = [
    {
      id: '1',
      name: 'Home',
      path: 'https://www.realdevsquad.com',
    },
    {
      id: '2',
      name: 'Welcome',
      path: 'https://welcome.realdevsquad.com/',
    },
    {
      id: '3',
      name: 'Events',
      path: 'https://www.realdevsquad.com/events.html',
    },
    {
      id: '4',
      name: 'Members',
      path: 'https://members.realdevsquad.com/',
    },
    {
      id: '5',
      name: 'Crypto',
      path: 'https://crypto.realdevsquad.com/',
    },
    {
      id: '6',
      name: 'Status',
      path: 'https://status.realdevsquad.com/',
    },
  ];
  const [toggle, setToggle] = useState<boolean>(false);
  const sidebarToggle = () => {
    setToggle(toggle=>!toggle);
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
              <button className="rounded-md p-[5px] bg-[#1d1283] text-white cursor-pointer border-2 border-solid border-white flex justify-around" onClick={()=> {throw new Error('Function is not declared')}}>
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
            {NAVMENU.map((nav) => {
              return (
                <li
                  className={nav.name === 'Home' ? "laptop:float-left laptop:hidden block float-none" : "laptop:float-left float-none"}
                  key={nav.id}
                >
                
                  <Link href={nav.path}
                    className='laptop:m-2.5 block laptop:rounded-lg laptop:text-white laptop:text-center laptop:py-5 laptop:px-4 laptop:no-underline laptop:hover:text-[#49a82e] hover:text-[#49a82e] py-2.5 px-10 text-left text-[#1d1283]'
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            })}
            <li className="laptop:block laptop:float-right hidden float-none">
              <Link className='laptop:m-[22px] block laptop:rounded-lg laptop:text-white laptop:text-center laptop:p-0 laptop:no-underline laptop:hover:text-[#49a82e] py-2.5 px-10 text-[#1d1283]'
                href="#"
              >
                <button className="rounded-md p-[5px] bg-[#1d1283] text-white cursor-pointer border-2 border-solid border-white flex justify-around" onClick={()=> {throw new Error('Function is not declared')}}>
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
