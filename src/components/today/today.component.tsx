import { FC, ReactNode, useCallback, useMemo } from "react"
import { MainPageState } from "../../types/main-page-state.type"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useTaskListStore } from "../../store/task-list.store"
import TodayTask from "./today-task/today-task.component"

type Props = {
  pageState: MainPageState,
  onStateChange: (newState: MainPageState) => void
}

const Today: FC<Props> = ({ pageState, onStateChange }) => {

  const tasks = useTaskListStore(state => state.getTodayTasks());

  const handleTitleClick = useCallback((currentState: MainPageState) => {
    if (currentState === 'default' || currentState === 'tomorrow') {
      onStateChange('today');
    } else {
      onStateChange('default');
    }
  }, []);

  const classNames = useMemo(() => {
    const baseClasses = 'today day-container';
    if (pageState === 'today') {
      return `${baseClasses} opened`;
    } else if (pageState === 'tomorrow') {
      return `${baseClasses} closed`;
    } else {
      return `${baseClasses} semi-opened`;
    }
  }, [ pageState ]);

  const renderTasks = (): ReactNode[] => {
    return tasks
      .filter((_, idx) => pageState === 'today' || idx < 4)
      .map(task => {
        return <TodayTask key={ task.id } task={ task } />
      });
  }

  return <div className={ classNames }>
    <div 
      className="block-title"
      onClick={ () => handleTitleClick(pageState) }
    >
      <KeyboardArrowDownIcon />
      СЕГОДНЯ, Ср. 11 Дек.
    </div>
    <div className="block-body">
      { renderTasks() }
    </div>
  </div>;
}

export default Today;

