export interface TaskDetails {
  title: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  raisedBy: string;
  featureUrl: string;
  purpose:string
  id:string
  isNoteworthy:string
}

export type ContributionAccordionItemProps = Readonly<{
  task: TaskDetails;
  isTitle: boolean;
  openTaskStatusUpdateModal: (taskId: string, isTaskNoteworthy: string) => void;
}>;