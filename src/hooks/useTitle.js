import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Toytopia`;
  }, [title]);
};

export default useTitle;
