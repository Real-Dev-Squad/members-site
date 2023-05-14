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
  archieveMember,
  isUserMember
}: {
  onClose: () => void;
  isOpen: boolean;
  promoteUserToMember: () => void;
  archieveMember: () => void;
  isUserMember: boolean
}) {
  let primaryCTAButton;
  if (isUserMember) primaryCTAButton = (
    <Button sx={{background: 'red'}} variant='primary' onClick={promoteUserToMember}>
      Remove from member
    </Button>
  );
  else primaryCTAButton = (
    <Button variant='primary' onClick={promoteUserToMember}>
      Promote To Member
    </Button>
  );

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
            marginBottom: '20px'
          }}
        >
          {primaryCTAButton}
          <Button variant='secondary' onClick={archieveMember}>
            Archieve Member
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
