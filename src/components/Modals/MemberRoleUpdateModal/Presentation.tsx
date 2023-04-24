import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

export default function MemberRoleUpdateModalPresentation({onClose, isOpen}: {onClose: () => void, isOpen: boolean}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update User Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <Button>Promote To Member</Button>
          <Button>Archieve Member</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}