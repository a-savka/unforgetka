import { FC, useCallback, useState } from "react";
import { Task } from "../../../model/task.model";
import DeleteIcon from '@mui/icons-material/Delete';

import './tomorrow-task.component.scss';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../confirmaton-dialog/confirmation-dialog";
import { useTaskListStore } from "../../../store/task-list.store";

interface Props {
  task: Task
};

const TomorrowTask: FC<Props> = ({ task }) => {

  const navigate = useNavigate();
  const deleteTask = useTaskListStore().deleteTask;
  const [ dialogOpen, setDialogOpen ] = useState(false);

  const onYes = useCallback(() => {
    setDialogOpen(false);
    deleteTask(task.id);
  }, []);

  const onNo = useCallback(() => {
    setDialogOpen(false);
  }, []);

  return <div className="task-wrapper">
    <div className="task-title" onClick={ () => navigate(`/edit/${ task.id }`) }>
      { task.title }
    </div>
    <div className="task-button">
      <IconButton onClick={ () => setDialogOpen(true) }>
        <DeleteIcon />
      </IconButton>
    </div>
    <ConfirmationDialog
      open={ dialogOpen }
      title="Есть вопросик"
      message="Точно удалить эту задачу?"
      onNo={ onNo }
      onYes={ onYes }
    />
  </div>;
}

export default TomorrowTask;
