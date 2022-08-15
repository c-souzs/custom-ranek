import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configure';
import { IInitialStateLocalization } from '../store/localizationReducer';
import { IInitialStateProduct } from '../store/productReducer';
import { IInitialStateUser } from '../store/userReducer';

interface IUseControReduxReturn {
  useAppDispatch: () => AppDispatch
  useAppSelector: TypedUseSelectorHook<{
    user: IInitialStateUser
    product: IInitialStateProduct
    localization: IInitialStateLocalization
  }>
}

const useControlRedux = (): IUseControReduxReturn => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  return {
    useAppDispatch,
    useAppSelector,
  };
};

export default useControlRedux;
