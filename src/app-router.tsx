import { createHashRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import MainPage from "./pages/main/main-page";
import TaskDetail from "./pages/task-detail/task-detail";
import CreateTask from "./pages/create-task/create-task";
import EditTask from "./pages/edit-task/edit-task";

export const appRouter = createHashRouter([{
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: 'detail/:id',
      element: <TaskDetail />
    },
    {
      path: 'create',
      element: <CreateTask />
    },
    {
      path: 'edit/:id',
      element: <EditTask />
    }
  ]
}]);
