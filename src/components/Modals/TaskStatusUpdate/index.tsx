import { RootState } from '@/src/store'
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions'
import { useDispatch, useSelector } from 'react-redux'
import TaskStatusUpdatePresentation from './Presentation'
import { useUpdateTaskStatusMutation } from '@/src/services/serverApi'
import { notifyError, notifySuccess } from '@/src/utils/toast'
import { CTA_TEXT, MESSAGES } from './taskStatusUpdate.constant'
import { useRouter } from 'next/router'

export default function TaskStatusUpdate() {
   const { taskId, isTaskNoteworthy } = useSelector(
      (state: RootState) => state.superUserOption,
   )
   const router = useRouter()
   const [updateTaskStatus, { isLoading }] = useUpdateTaskStatusMutation()
   const reduxDispatch = useDispatch()
   const buttonText = getButtonText()

   // call this method whenever you want to refresh server-side props
   const refreshData = () => router.replace(router.asPath)

   function closeModal() {
      reduxDispatch(
         setIsTaskUpdateModalVisible({
            visibility: false,
            taskId: null,
            isTaskNoteworthy: false,
         }),
      )
   }

   function getButtonText() {
      if (isLoading) return CTA_TEXT.UPDATING
      if (isTaskNoteworthy) return CTA_TEXT.MOVE_TO_ALL
      else return CTA_TEXT.MOVE_tO_NOTEWORTHY
   }

   function updateTaskStatusFunction() {
      const successText = isTaskNoteworthy
         ? MESSAGES.MOVED_TO_ALL
         : MESSAGES.MOVE_TO_NOTEWORTHY
      updateTaskStatus({ isNoteworthy: !isTaskNoteworthy, taskId })
         .unwrap()
         .then(() => {
            notifySuccess(successText)
            refreshData()
            closeModal()
         })
         .catch((err) => {
            const errorMessage = err?.data?.message || MESSAGES.ERROR_MESSAGE
            notifyError(errorMessage)
            closeModal()
         })
   }

   return (
      <TaskStatusUpdatePresentation
         onClose={closeModal}
         buttonText={buttonText}
         updateTaskStatus={updateTaskStatusFunction}
         isUpdating={isLoading}
      />
   )
}
