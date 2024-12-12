import { FC, ReactNode, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskListStore } from "../../store/task-list.store";
import { Button } from "@mui/material";
import { Task } from "../../model/task.model";
import PageContainer from "../../components/page-container/page-container";
import TaskForm from "../../components/task-form/task-form";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const EditTask: FC = () => {

  const navigate = useNavigate();
  const taskId = useParams().id!;
  const task = useTaskListStore().getTomorrowById(taskId);
  const editTask = useTaskListStore().editTask;

  useEffect(() => {
    if (task === undefined) {
      navigate('/');
    }
  }, []);

  if (task === undefined) {
    return null;
  }

  const renderAction = (onSubmit: () => void): ReactNode[] => {
    return [
      <Button
        key='cancel-btn'
        startIcon={ <ClearIcon /> }
        variant="outlined"
        onClick={ () => navigate('/') }
      >
        Отмена
      </Button>,
      <Button
        key='submit-btn'
        startIcon={ <CheckIcon /> }
        variant="contained"
        onClick={ onSubmit }
      >
        Сохранить
      </Button>
    ];
  }

  const onFormSubmit = useCallback((task: Task) => {
    editTask(task);
    navigate('/');
  }, []);

  return <div className="page">
    <PageContainer title="ИЗМЕНИТЬ ЗАДАЧУ">
      <TaskForm
        task={ task }
        actionRenderer={ renderAction }
        onFormSubmit={ onFormSubmit }
      />
    </PageContainer>
  </div>

}


export default EditTask;