import { Box, Text, Flex, Skeleton } from '@chakra-ui/react';
import { user } from '../../types/MembersSection.type';
import Image from 'next/image';
import Socials from '../Socials';

import styles from './membersCard.module.css'

export default function MembersCard({ member }: { member: user }) {
  return (
    <Box className={styles['member_card']}>
      <Box className={styles['member_card__image']}>
        <Image src={member.image} alt='Picture of the author' fill />
      </Box>
      <Text as='h1' className={styles['member_card__username']}>
        {member.name}
      </Text>
      <Flex justify='center' className={styles['member_card__socials']}>
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
