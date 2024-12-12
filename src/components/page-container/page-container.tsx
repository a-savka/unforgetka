import { FC } from "react";
import './page-container.scss';

interface Props {
  title: string,
  children: React.ReactNode
};

const PageContainer: FC<Props> = ({ title, children }) => {
  return <div className="page-container">
    <div className="page-title">{ title }</div>
    <div className="page-body">
      { children }
    </div>
  </div>
}

export default PageContainer;
