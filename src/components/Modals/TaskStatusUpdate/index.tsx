import { RootState } from '@/src/store';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';
import { useDispatch, useSelector } from 'react-redux';
import TaskStatusUpdatePresentation from './Presentation';
import { useUpdateTaskStatusMutation } from '@/src/services/serverApi';
import { notifyError, notifySuccess } from '@/src/utils/toast';

export default function TaskStatusUpdate() {
  const { taskId, isTaskNoteworthy } = useSelector(
    (state: RootState) => state.superUserOption
  );
  const [updateTaskStatus, { isLoading }] = useUpdateTaskStatusMutation()
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
    if (isLoading) return 'Updating...'
    if (isTaskNoteworthy) return 'Move to all contributions';
    else return 'Move to noteworthy contributions';
  }

  function updateTaskStatusFunction() {
    const successText = isTaskNoteworthy ? 'Task moved to all contributions!' : 'Task moved to noteworthy contributions!'
    updateTaskStatus({ isNoteworthy: !isTaskNoteworthy, taskId })
    .unwrap()
    .then(() => {
      notifySuccess(successText)
    })
    .catch((err) => {
      const errorMessage = err?.data?.message || 'Something went wrong'
      notifyError(errorMessage)
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
