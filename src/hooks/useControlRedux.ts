import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configure';
import { InitialStateLocalization } from '../store/localizationReducer';
import { InitialStateProduct } from '../store/productReducer';
import { InitialStateUser } from '../store/userReducer';

interface UseControReduxReturn {
  useAppDispatch: () => AppDispatch
  useAppSelector: TypedUseSelectorHook<{
    user: InitialStateUser
    product: InitialStateProduct
    localization: InitialStateLocalization
  }>
}

const useControlRedux = (): UseControReduxReturn => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  return {
    useAppDispatch,
    useAppSelector,
  };
};

export default useControlRedux;
