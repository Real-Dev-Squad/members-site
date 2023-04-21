import { Box, Text, Flex, Skeleton } from '@chakra-ui/react';
import { user } from '../types/MembersSection.type';
import Image from 'next/image';
import Socials from './Socials';

export default function MembersCard({member}: {member: user}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 250px',
        margin: '20px',
        border: '1px solid #413f3f',
        padding: '20px 10px',
        background: 'white',
        cursor: 'pointer',
        maxWidth: '270px',
        boxShadow: '0 0 15px -7px rgba(0, 0, 0, 0.65)',
        borderRadius: '5%',
        transition: 'box-shadow 0.38s ease-out',
        alignItems: 'center',
        '&:hover': {
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
      }}
    >
      <Box
        role='section'
        sx={{
          margin: '0 auto',
          marginTop: '4px',
          position: 'relative',
          borderRadius: '50%',
          width: '12rem',
          height: '12rem',
        }}
      >
        <Image
          className='rounded-full'
          src={member.image}
          alt='Picture of the author'
          fill
        />
      </Box>
      <Text
        as='h1'
        sx={{ fontSize: '2rem', margin: '1rem', fontWeight: '600' }}
      >
        {member.name}
      </Text>
      <Flex
        justify='center'
        sx={{
          gap: '2.5',
          marginTop: '3',
          marginBottom: '3',
        }}
      >
        {member.twitter && (
          <Socials
            url={member.twitter}
            icon='/icons/icons8-twitter.svg'
            alt='twitter icon'
          />
        )}
        {member.github && (
          <Socials
            url={member.github}
            icon='/icons/icons8-github.svg'
            alt='github icon'
          />
        )}
        {member.linkedin && (
          <Socials
            url={member.linkedin}
            icon='/icons/icons8-linkedin.svg'
            alt='linkedin icon'
          />
        )}
        {member.instagram && (
          <Socials
            url={member.instagram}
            icon='/icons/icons8-instagram.svg'
            alt='instagram icon'
          />
        )}
      </Flex>
    </Box>
  );
}