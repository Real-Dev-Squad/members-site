import Image from 'next/image'
import Link from 'next/link'
import { MemberProps } from './membersSection.type'

const MemberCard = ({ user }: MemberProps) => {
  return (
    <div className='flex-1 flex flex-col border border-black bg-white cursor-pointer transition duration-380 ease-out shadow-[0_0_15px_-7px_rgba(0,0,0,0.65)] content-center text-center w-[240px] rounded-[5%] shadow-lg hover:shadow-2xl flex-none'>
      {/* Member Image(Used locally imported Github icon for user image placeholder) */}
      <div className='m-auto w-48 h-48 mt-4 relative rounded-full border border-black'>
        <Image
          className='rounded-full'
          src={user.image}
          alt='Picture of the author'
          fill
        />
      </div>
      <h1 className='text-2xl m-1 font-semibold'>{user.name}</h1>{' '}
      {/* Member Name  */}
      {/* Member Social Links (For the moment on the icons link to RDS twitter profile) */}
      <div className='flex justify-center gap-2.5 my-3'>
        {user.twitter && (
          <Link target='_blank' href={`${user.twitter}`}>
            <Image
              src='/icons/icons8-twitter.svg'
              alt='twitter icon'
              width={44}
              height={44}
            />
          </Link>
        )}

        {user.github && (
          <Link target='_blank' href={`${user.twitter}`}>
            <Image
              src='/icons/icons8-github.svg'
              alt='github icon'
              width={44}
              height={44}
            />
          </Link>
        )}

        {user.linkedin && (
          <Link target='_blank' href={`${user.twitter}`}>
            <Image
              src='/icons/icons8-linkedin.svg'
              alt='linkedin icon'
              width={44}
              height={44}
            />
          </Link>
        )}

        {user.instagram && (
          <Link target='_blank' href={`${user.twitter}`}>
            <Image
              src='/icons/icons8-instagram.svg'
              alt='linkedin icon'
              width={44}
              height={44}
            />
          </Link>
          // <a target="_blank" href={user.twitter}>

          // </a>
        )}
      </div>
    </div>
  );
}


export default MemberCard;