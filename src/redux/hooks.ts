import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store.ts';

export const useReduxDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelect: TypedUseSelectorHook<RootState> = useSelector;