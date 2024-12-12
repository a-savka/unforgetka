import { FC, ReactNode, useRef } from "react";
import { Task } from "../../model/task.model";
import { TextField } from "@mui/material";

import './task-form.scss';

interface Props {
  task: Task,
  actionRenderer: (onSubmit: () => void) => ReactNode[],
  onFormSubmit: (task: Task) => void
};

const TaskForm: FC<Props> = ({ task, actionRenderer, onFormSubmit }) => {

  const titleInput = useRef<HTMLInputElement>();
  const descriptionInput = useRef<HTMLInputElement>();

  const onSubmit = () => {
    const title = titleInput.current?.value;
    const description = descriptionInput.current?.value;
    if (!!title && !!description) {
      onFormSubmit({ ...task, title, description });
    }
  }

  return <div className="task-form">
    <div className="field-wrapper">
      <TextField
        id='taskTitle'
        inputRef={ titleInput }
        label='Не забудь'
        variant='filled'
        defaultValue={ task.title }
        fullWidth
        color="secondary"
      />
    </div>
    <div className="field-message">Коротко, что не забыть</div>
    <div className="field-wrapper">
      <TextField
        id='taskDescription'
        inputRef={ descriptionInput }
        label='Подробности'
        variant='filled'
        defaultValue={ task.description }
        multiline
        rows={ 7 }
        fullWidth
        color="secondary"
      />
    </div>
    <div className="field-message">А тут можно расписать все детальнее</div>
    <div className="form-spacer">
      &nbsp;
    </div>
    <div className="form-action">
      { actionRenderer(onSubmit) }
    </div>
  </div>
}

export default TaskForm;
