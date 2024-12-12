import { FC, useState } from "react";
import Today from "../../components/today/today.component";
import Tomorrow from "../../components/tomorrow/tomorrow.component";
import { MainPageState } from "../../types/main-page-state.type";

const MainPage: FC = () => {

  const [ pageState, setPageState ] = useState<MainPageState>('default');

  return (
      <div className='page'>
        <Today pageState={ pageState } onStateChange={ setPageState } />
        <Tomorrow pageState={ pageState } onStateChange={ setPageState } />
      </div>
    );
}

export default MainPage;
