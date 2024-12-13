import { FC, ReactNode, useCallback, useMemo } from "react"
import { MainPageState } from "../../types/main-page-state.type"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useTaskListStore } from "../../store/task-list.store"
import TomorrowTask from "./tomorrow-task/tomorrow-task.component"
import { useNavigate } from "react-router-dom"
import useMaxTasks from "../../hooks/use-max-tasks"

type Props = {
  pageState: MainPageState,
  onStateChange: (newState: MainPageState) => void
}
const Tomorrow: FC<Props> = ({ pageState, onStateChange }) => {

 const tasks = useTaskListStore(state => state.getTomorrowTasks());
 const navigate = useNavigate();

  const handleTitleClick = useCallback((currentState: MainPageState) => {
    if (currentState === 'default' || currentState === 'today') {
      onStateChange('tomorrow');
    } else {
      onStateChange('default');
    }
  }, []);

  const classNames = useMemo(() => {
    const baseClasses = 'tomorrow day-container';
    if (pageState === 'tomorrow') {
      return `${baseClasses} opened`;
    } else if (pageState === 'today') {
      return `${baseClasses} closed`;
    } else {
      return `${baseClasses} semi-opened`;
    }
  }, [ pageState ]);

  const maxItems = useMaxTasks(2);

  const renderTasks = (): ReactNode[] => {
    return tasks
      .filter((_, idx) => pageState === 'tomorrow' || idx < maxItems)
      .map(task => {
        return <TomorrowTask key={ task.id } task={ task } />
      });
  }

  return <div className={ classNames }>
    <div
      className="block-title"
      onClick={ () => handleTitleClick(pageState) }
    >
      <KeyboardArrowDownIcon />
      ЗАВТРА, Чт. 12 Дек.
    </div>
    <div className="block-body">
      { renderTasks() }
    </div>
    <div className="block-action">
      <Button
        startIcon={ <AddIcon /> }
        className="block-button"
        variant="contained"
        onClick={ () => navigate('create') }
      >
        Добавить задачу
      </Button>
    </div>
  </div>;
}

export default Tomorrow;

