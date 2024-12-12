import { createId } from "@paralleldrive/cuid2";
import { Task } from "../model/task.model";

export const TODAY_TASKS: Task[] = [
  {
    id: createId(),
    position: 1,
    title: 'Собрать портель',
    description: 'Сделаны домашние задания,  собраны все тетрадки, не забыть ручку, карандаши и фломастеры, проверить что есть учебники по физике и алгебре.',
    isCompleted: false
  },
  {
    id: createId(),
    position: 2,
    title: 'Положить завтрак',
    description: '',
    isCompleted: true
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
    isCompleted: true
  }
];
