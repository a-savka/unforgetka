import { FC, useCallback } from "react";
import { Task } from "../../../model/task.model";
import IOSSwitch from "../../generic/ios-switch";

import './today-task.component.scss';
import { useNavigate } from "react-router-dom";
import { useTaskListStore } from "../../../store/task-list.store";

interface Props {
  task: Task
};

const TodayTask: FC<Props> = ({ task }) => {

  const navigate = useNavigate();
  const toggleTask = useTaskListStore().toggleTask;

  const onTaskClick = useCallback(() => {
    navigate(`/detail/${task.id}`);
  }, []);

  return <div className="task-wrapper">
    <div className="task-title" onClick={ () => onTaskClick() }>
      { task.title }
    </div>
    <div className="task-switch">
      <IOSSwitch
        checked={ task.isCompleted }
        onChange={ () => toggleTask(task.id) }
      />
    </div>
  </div>;
}

export default TodayTask;
