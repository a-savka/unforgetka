import { FC, ReactNode, useCallback, useState } from "react";
import PageContainer from "../../components/page-container/page-container";
import { createId } from "../../services/cuid";
import { Task } from "../../model/task.model";
import TaskForm from "../../components/task-form/task-form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useTaskListStore } from "../../store/task-list.store";

const CreateTask: FC = () => {

  const navigate = useNavigate();
  const addTask = useTaskListStore().addTask;

  const [ task, _ ] = useState<Task>({
    id: createId(),
    title: '',
    description: '',
    position: 1,
    isCompleted: false
  });

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
        Создать
      </Button>
    ];
  }

  const onFormSubmit = useCallback((task: Task) => {
    addTask(task);
    navigate('/');
  }, []);

  return <div className="page">
    <PageContainer title="СОЗДАТЬ ЗАДАЧУ">
      <TaskForm 
        task={ task }
        actionRenderer={ renderAction }
        onFormSubmit={ onFormSubmit }
      />
    </PageContainer>
  </div>
}

export default CreateTask;
