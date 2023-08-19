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
  promoteOrDemoteMember,
  archiveOrUnarchiveMember,
  isUserMember,
  isUserArchived,
}: {
  onClose: () => void;
  isOpen: boolean;
  promoteOrDemoteMember: () => void;
  archiveOrUnarchiveMember: () => void;
  isUserMember: boolean;
  isUserArchived: boolean;
}) {
  let primaryCTA;
  let secondaryCTA;
  if (isUserMember) primaryCTA = 'Remove from member';
  else primaryCTA = 'Promote To Member';

  if (isUserArchived) secondaryCTA = 'Archive member';
  else secondaryCTA = 'Unarchive member';
  
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
            marginBottom: '20px',
          }}
        >
          <Button variant='primary' onClick={promoteOrDemoteMember}>
            {primaryCTA}
          </Button>
          <Button variant='secondary' onClick={archiveOrUnarchiveMember}>
            Archieve Member
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
