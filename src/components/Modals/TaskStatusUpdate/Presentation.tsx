import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

export default function TaskStatusUpdatePresentation({
  onClose,
  buttonText,
  updateTaskStatus,
  isUpdating,
}: {
  onClose: () => void
  buttonText: string
  updateTaskStatus: () => void
  isUpdating: boolean
}) {
  return (
    <Modal onClose={onClose} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader sx={{ padding: '10px' }}>Update Task Status</ModalHeader>
        <ModalCloseButton />
        <ModalBody sx={{ padding: '10px' }}>
          <Button
            sx={{ opacity: isUpdating ? 0.4 : 1 }}
            disabled={isUpdating}
            onClick={updateTaskStatus}
            variant="primary"
          >
            {buttonText}
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
