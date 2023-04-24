import { Box, Text, Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';

import Socials from '../Socials';

import { user } from '../../types/MembersSection.type';

import styles from './membersCard.module.css';

export default function MembersCardPresentation({ member, openModal }: { member: user, openModal: () => void }) {
  return (
    <Box className={styles.member_card}>
      <Box className={styles.member_card__image_container}>
        <Image
          className={styles.member_card__image}
          src={member.image}
          alt='Picture of the author'
          fill
        />
      </Box>
      <Text as='h1' className={styles.member_card__username}>
        {member.name}
      </Text>
      <Flex justify='center' className={styles.member_card__socials}>
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
      <Button
        as='button'
        position='absolute'
        top='0'
        right='0'
        background='none'
        _hover={{ bg: 'none' }}
        onClick={(e) => {
          e.stopPropagation()
          openModal();
        }}
      >
        <Image src='/icons/setting.svg' alt='' width={20} height={20} />
      </Button>
    </Box>
  );
}
