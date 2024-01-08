import {
   Box,
   Button,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   Text,
} from '@chakra-ui/react'
import styles from './memberRoleUpdateModal.module.css'

export default function MemberRoleUpdateModalPresentation({
   onClose,
   promoteOrDemoteMember,
   archiveOrUnarchiveMember,
   isUserMember,
   isUserArchived,
   isRoleUpdating,
}: {
   onClose: () => void
   promoteOrDemoteMember: () => void
   archiveOrUnarchiveMember: () => void
   isUserMember: boolean
   isUserArchived: boolean
   isRoleUpdating: boolean
}) {
   let primaryCTA
   let secondaryCTA
   if (isUserMember) primaryCTA = 'Remove from member'
   else primaryCTA = 'Promote To Member'

   if (isUserArchived) secondaryCTA = 'Archive member'
   else secondaryCTA = 'Unarchive member'

   return (
      <Modal onClose={onClose} isOpen={true} isCentered>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Update User Role</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {isRoleUpdating && (
                  <Text className={styles.role_update_text}>
                     Updating user role...
                  </Text>
               )}
               <Box className={styles.button_container}>
                  <Button
                     disabled={isRoleUpdating}
                     variant="primary"
                     onClick={promoteOrDemoteMember}
                  >
                     {primaryCTA}
                  </Button>
                  <Button
                     disabled={isRoleUpdating}
                     variant="secondary"
                     onClick={archiveOrUnarchiveMember}
                  >
                     Archieve Member
                  </Button>
               </Box>
            </ModalBody>
         </ModalContent>
      </Modal>
   )
}
