import { RootState } from '@/src/store';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';
import { useDispatch, useSelector } from 'react-redux';
import TaskStatusUpdatePresentation from './Presentation';
import { useUpdateTaskStatusMutation } from '@/src/services/serverApi';
import { notifyError, notifySuccess } from '@/src/utils/toast';
import { CTA_TEXT, MESSAGES } from './taskStatusUpdate.constant';

export default function TaskStatusUpdate() {
  const { taskId, isTaskNoteworthy } = useSelector(
    (state: RootState) => state.superUserOption
  );
  const [updateTaskStatus, { isLoading }] = useUpdateTaskStatusMutation();
  const buttonText = getButtonText();
  const reduxDispatch = useDispatch();

  function closeModal() {
    reduxDispatch(
      setIsTaskUpdateModalVisible({
        visibility: false,
        taskId: null,
        isTaskNoteworthy: false,
      })
    );
  }

  function getButtonText() {
    if (isLoading) return CTA_TEXT.UPDATING;
    if (isTaskNoteworthy) return CTA_TEXT.MOVE_TO_ALL;
    else return CTA_TEXT.MOVE_tO_NOTEWORTHY;
  }

  function updateTaskStatusFunction() {
    const successText = isTaskNoteworthy
      ? MESSAGES.MOVED_TO_ALL
      : MESSAGES.MOVE_TO_NOTEWORTHY;
    updateTaskStatus({ isNoteworthy: !isTaskNoteworthy, taskId })
      .unwrap()
      .then(() => {
        notifySuccess(successText);
      })
      .catch((err) => {
        const errorMessage = err?.data?.message || MESSAGES.ERROR_MESSAGE;
        notifyError(errorMessage);
      });
  }

  return (
    <TaskStatusUpdatePresentation
      isOpen={isTaskNoteworthy}
      onClose={closeModal}
      buttonText={buttonText}
      updateTaskStatus={updateTaskStatusFunction}
      isUpdating={isLoading}
    />
  );
}
