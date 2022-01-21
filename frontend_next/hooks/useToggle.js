import { useCallback, useState } from "react";

export default function useToggle(defaultValue = false) {
  const [isToggle, setIsToggle] = useState(defaultValue);

  const handle = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  return [isToggle, handle];
}
