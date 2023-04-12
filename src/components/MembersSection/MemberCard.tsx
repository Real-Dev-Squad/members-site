import Image from 'next/image'
import Link from 'next/link'
import { MemberProps } from './membersSection.type'

const MemberCard = ({ user }: MemberProps) => {
  return (
    <div className='flex-1 flex flex-col border border-black bg-white cursor-pointer transition duration-380 ease-out shadow-lg hover:shadow-2xl content-center text-center w-[320px] flex-none'>
      {/* Member Image(Used locally imported Github icon for user image placeholder) */}
      <div className='m-auto w-48 h-48 mt-4 relative rounded-full border border-black'>
        <Image
          className='rounded-full'
          src='/icons/icons8-github.svg'
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