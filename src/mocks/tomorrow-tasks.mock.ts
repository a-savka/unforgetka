import { createId } from "@paralleldrive/cuid2";
import { Task } from "../model/task.model";

export const TOMORROW_TASKS: Task[] = [
  {
    id: createId(),
    position: 1,
    title: 'Собрать портель',
    description: '',
    isCompleted: false
  },
  {
    id: createId(),
    position: 2,
    title: 'Положить завтрак',
    description: '',
    isCompleted: false
  },
  {
    id: createId(),
    position: 3,
    title: 'Взять сменную обувь',
    description: '',
    isCompleted: false
  },
  {
    id: createId(),
    position: 4,
    title: 'Фломастеры',
    description: '',
    isCompleted: false
  },
  {
    id: createId(),
    position: 5,
    title: 'Краски',
    description: '',
    isCompleted: false
  }
];
