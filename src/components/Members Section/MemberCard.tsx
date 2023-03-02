import  {FC} from 'react'

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

const MemberCard: FC<MemberProps> = ({user}) =>  {
  return (
    <div className='m-4 pb-3 text-center shrink shadow-cus grow max-w-cusXS border border-gray-800 rounded-2xl transform 
     transition duration-500 hover:scale-105 ' >
    
    {/* Member Image */}
    <div className='m-auto w-48 h-48 mt-4' >
      <img className='w-full h-full rounded-full' src={user.image} alt="randomS" />
    </div>
      
    <h1 className='text-2xl m-1 font-semibold' >{user.name}</h1>  {/* Member Name  */}

    {/* Member Social Links */}
    <div className='flex justify-center gap-2.5 my-3' > 
      {
        user.twitter && (
            <a target="_blank" href={user.twitter}>
              <img className='h-8' src="/icons/twitter.png" alt="twitter icon" />
            </a>
        )
      }

      {
        user.github && (
          <a target="_blank" href={user.twitter}>
            <img className='h-8' src="/icons/github.png" alt="github icon" />
          </a>
        )
      }


       {
        user.linkedin && (
              <a target="_blank" href={user.linkedin}>
                <img className='h-8' src="/icons/linkedin.png" alt="linkedin icon" />
              </a>
        )
       } 

       {
        user.instagram && (
            <a target="_blank" href={user.twitter}>
              <img className='h-8' src="/icons/instagram.png" alt="instagram icon" />
            </a>
        )
       }


    </div>

    </div>
  )
}


export default MemberCard;