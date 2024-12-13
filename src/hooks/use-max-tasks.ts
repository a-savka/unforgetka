import { useMemo } from "react";
import useWindowSize from "./use-window-size";

const useMaxTasks = (altCount: number = 3) => {
  const [windowHeight, _windowWidth] = useWindowSize();
  const maxItems = useMemo(() => {
    return windowHeight > 840 ? 4 : altCount;
  }, [ windowHeight ]);
  return maxItems
}

export default useMaxTasks;

