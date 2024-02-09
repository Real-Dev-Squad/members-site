import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => (
  <Box as="footer" role="contentinfo" className={styles.footer}>
    <Text>
      The contents of this website are deployed from this{' '}
      <Link
        className={styles.footer_link}
        href="https://github.com/Real-Dev-Squad/members-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        open source repository
      </Link>
    </Text>
  </Box>
);

export default Footer;
