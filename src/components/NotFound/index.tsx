import { Box, Text } from '@chakra-ui/react';
import styles from './notFound.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound({ text }: { text: string }) {
  return (
    <Box className={styles.not_found_container}>
      <Box className={styles.not_found_image_container}>
        <Image
          src='/images/page-not-found.png'
          fill
          alt=''
        />
      </Box>
      <Text className={styles.not_found_text}>{text}</Text>
      <Link className={styles.link} href='/'>Go to members page</Link>
    </Box>
  );
}
