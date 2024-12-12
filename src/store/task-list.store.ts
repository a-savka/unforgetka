
import { create } from "zustand";
import { Task } from "../model/task.model";
import { TODAY_TASKS } from "../mocks/today-tasks.mock";
import { TOMORROW_TASKS } from "../mocks/tomorrow-tasks.mock";

interface TaskListState {
  today: Task[];
  tomorrow: Task[];
  getTodayTasks: () => Task[];
  getTomorrowTasks: () => Task[];
  getTodayById: (id: string) => Task;
  getTomorrowById: (id: string) => Task;
  toggleTask: (taskId: string) => void;
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

export const useTaskListStore = create<TaskListState>((set, get) => ({
  today: [ ...TODAY_TASKS ],
  tomorrow: [ ...TOMORROW_TASKS ],

  getTodayTasks: () => {
    return get().today;
  },

  getTomorrowTasks: () => {
    return get().tomorrow;
  },

  getTodayById: (id: string) => {
    return get().today.find(task => task.id === id)!;
  },

  getTomorrowById: (id: string) => {
    return get().tomorrow.find(task => task.id === id)!;
  },

  addTask: (task: Task) => {
    set(state => {
      return { today: state.today, tomorrow: [ ...state.tomorrow, task ] };
    });
  },

  editTask: (task: Task) => {
    set(state => {
      const tomorrow = state.tomorrow
        .map(current => current.id === task.id ? { ...task } : current);
      return { tomorrow, today: state.today };
    });
  },

  deleteTask: (taskId: string) => {
    set(state => {
      const tomorrow = state.tomorrow
        .filter(current => current.id !== taskId);
      return { tomorrow, today: state.today };
    });
  },

  toggleTask: (taskId: string) => {
    set(state => {
      const today = state.today
        .map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task);
      return { today, tomorrow: state.tomorrow };
    });
  }

}));
