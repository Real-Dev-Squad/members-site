import { Button } from '@chakra-ui/react';
import Image from 'next/image';

export default function SettingButton({
  openModal,
}: {
  openModal: () => void;
}) {
  return (
    <Button
      as='button'
      position='absolute'
      top='0'
      right='0'
      background='none'
      _hover={{ bg: 'none' }}
      onClick={(e) => {
        e.stopPropagation();
        openModal();
      }}
    >
      <Image src='/icons/setting.svg' alt='' width={20} height={20} />
    </Button>
  );
}
