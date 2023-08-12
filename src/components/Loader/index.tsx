import { Box, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './loader.module.css';

export default function Loader() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  if (loading) return (
    <Box className={styles.backdrop}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        color='black.500'
        size='xl'
        width={50}
        height={50}
      />
    </Box>
  );

  return null;
}
