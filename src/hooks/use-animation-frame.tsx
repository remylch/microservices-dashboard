import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (enabled: boolean, callBack: () => void) => {
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame>>();
  const animate = useCallback(() => {
    callBack();
    requestRef.current = requestAnimationFrame(animate);
  }, [callBack]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
    return () => {
      console.log("should be enabled");
    };
  }, [enabled, animate]);
};

export default useAnimationFrame;
