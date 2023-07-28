import { useSelector, useDispatch } from "react-redux";
import { setIsMobileDevice } from "../redux/utils/utilsSlice";

interface IState {
  utils: {
    isMobileDevice: boolean;
  };
}

export const useUtils = () => {
  const dispatch = useDispatch();
  const isMobileDevice = useSelector(
    ({ utils }: IState) => utils.isMobileDevice
  );

  const setIsMobile = (isMobileDevice: boolean) => {
    dispatch(setIsMobileDevice({ isMobileDevice }));
  };

  return { isMobileDevice, setIsMobile };
};
