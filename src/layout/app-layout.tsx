import { FC } from "react";
import { Outlet } from "react-router-dom";
import nezabudka from '../assets/nezabudka.svg';
import './app-layout.scss';

const  AppLayout: FC = () => {

  return <div className="app-wrapper">
    <div className="app-title">
      <img width="240" src={ nezabudka } />
    </div>
    <div className="app-body">
      <Outlet />
    </div>
  </div>;

}

export default AppLayout
