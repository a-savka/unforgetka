import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskListStore } from "../../store/task-list.store";
import PageContainer from "../../components/page-container/page-container";
import { Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import './task-detail.scss';
import IOSSwitch from "../../components/generic/ios-switch";

const TaskDetail: FC = () => {

  const navigate = useNavigate();
  const taskId = useParams().id!;
  const task = useTaskListStore().getTodayById(taskId);
  const toggleTask = useTaskListStore().toggleTask;

  if (task === undefined) {
    setTimeout(() => navigate('/'), 0);
    return null;
  }

  return <div className="page">
    <PageContainer title="ПОДРОБНЕЕ ПРО ЗАДАЧУ">
      <div className="task-title">
        { task.title }
      </div>
      <div className="task-description">
        { task.description }
      </div>
      <div className="task-switch-wrapper">
        <div className="task-switch-control">
          <IOSSwitch
            checked={ task.isCompleted }
            onChange={ () => toggleTask(task.id) }
          />
        </div>
        <div className="task-switch-title">{ task.isCompleted ? 'Выполнено' : 'Не выполнено' }</div>
      </div>
      <div className="task-spacer">
        &nbsp;
      </div>
      <div className="task-action">
        <Button
          startIcon={ <ClearIcon /> }
          onClick={ () => navigate('/') }
          variant="contained"
        >
          Закрыть
        </Button>
      </div>
    </PageContainer>
  </div>
}

export default TaskDetail;
