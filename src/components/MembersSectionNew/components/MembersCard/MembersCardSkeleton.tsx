import { Box, Skeleton } from '@chakra-ui/react'
import styles from './membersCard.module.css'

export default function MembersCardSkeleton() {
   return <Skeleton width="100%" className={styles['member_card_skeleton']} />
}
