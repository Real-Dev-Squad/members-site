import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export default function MemberRoleUpdateModalPresentation({
  onClose,
  isOpen,
  promoteUserToMember,
  archieveMember
}: {
  onClose: () => void;
  isOpen: boolean;
  promoteUserToMember: () => void;
  archieveMember: () => void;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update User Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '10px',
          }}
        >
          <Button variant='primary' onClick={promoteUserToMember}>
            Promote To Member
          </Button>
          <Button variant='secondary' onClick={archieveMember}>
            Archieve Member
          </Button>
        </ModalBody>
        <ModalFooter>
          <Button sx={{ margin: '0 auto' }} variant='text'>
            Want to update user skills? click here!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
