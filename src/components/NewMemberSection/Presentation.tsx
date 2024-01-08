import { Box } from '@chakra-ui/react'
//TODO change this
import NewMemberSectionSkeleton from './NewMemberSectionSkeleton'
import NewMemberCard from './NewMemberCard'

import { MemberProps } from '../MembersSectionNew/types/MembersSection.type'
import styles from './newMemberSection.module.css'

export default function NewMemberSectionPresentation({
   data,
   isLoading,
}: MemberProps) {
   let memberSection
   if (isLoading) memberSection = <NewMemberSectionSkeleton />
   else
      memberSection = data?.map((member) => (
         <NewMemberCard user={member} key={member.id} />
      ))

   return (
      <Box className={styles['new_member_section_container']}>
         {memberSection}
      </Box>
   )
}
