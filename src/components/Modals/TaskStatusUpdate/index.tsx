import { RootState } from '@/src/store';
import { setIsTaskUpdateModalVisible } from '@/src/store/superUserOptions';
import { useDispatch, useSelector } from 'react-redux';
import TaskStatusUpdatePresentation from './Presentation';
import { useUpdateTaskStatusMutation } from '@/src/services/serverApi';

export default function TaskStatusUpdate() {
  const { taskId, isTaskNoteworthy } = useSelector(
    (state: RootState) => state.superUserOption
  );
  const [updateTaskStatus] = useUpdateTaskStatusMutation()
  const buttonText = isTaskNoteworthy
    ? 'Move to all contributions'
    : 'Move to noteworthy contributions';
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

  function updateTaskStatusFunction() {
    updateTaskStatus({ isNoteworthy: isTaskNoteworthy, taskId })
    .unwrap()
    .then(() => {
      
    })
    .catch(() => {

    });
  }

  return (
    <TaskStatusUpdatePresentation
      isOpen={isTaskNoteworthy}
      onClose={closeModal}
      buttonText={buttonText}
      updateTaskStatus={updateTaskStatusFunction}
    />
  );
}
