import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface MemberProps {
  user: {
    id: number,
    image: string,
    name: string,
    twitter?: string,
    linkedin?: string,
    instagram?: string,
    github?: string,
  }
}

const MemberCard: FC<MemberProps> = ({ user }) => {
  return (
    <div className='m-4 pb-3 text-center shrink shadow-cus grow max-w-cusXS border border-gray-800 rounded-2xl transform transition duration-500 hover:scale-105 ' >

      {/* Member Image(Used locally imported Github icon for user image placeholder) */}
      <div className='m-auto w-48 h-48 mt-4 relative rounded-full' >
        <Image className='rounded-full' src="/icons/icons8-github.svg" alt="Picture of the author" fill />
      </div>

      <h1 className='text-2xl m-1 font-semibold' >{user.name}</h1>  {/* Member Name  */}

      {/* Member Social Links (For the moment on the icons link to RDS twitter profile) */}
      <div className='flex justify-center gap-2.5 my-3' >
        {
          user.twitter && (
            <Link target="_blank" href={`${user.twitter}`}>
              <Image src="/icons/icons8-twitter.svg" alt="twitter icon" width={44} height={44} />
            </Link>
          )
        }

        {
          user.github && (
            <Link target="_blank" href={`${user.twitter}`}>
              <Image src="/icons/icons8-github.svg" alt="github icon" width={44} height={44} />
            </Link>
          )
        }


        {
          user.linkedin && (
            <Link target="_blank" href={`${user.twitter}`}>
              <Image src="/icons/icons8-linkedin.svg" alt="linkedin icon" width={44} height={44} />
            </Link>
          )
        }

        {
          user.instagram && (
            <Link target="_blank" href={`${user.twitter}`}>
              <Image src="/icons/icons8-instagram.svg" alt="linkedin icon" width={44} height={44} />
            </Link>
            // <a target="_blank" href={user.twitter}>

            // </a>
          )
        }
      </div>
    </div>
  )
}


export default MemberCard;
