import { useEffect } from 'react';
import { Category } from '@/core/types';
import AppRoutes from '@/core/routes';
import { useReduxDispatch, useReduxSelect } from "@/redux/hooks.ts";
import { selectCategories, setCategories } from "@/redux/slices/categories";

function App() {
  const dispatch = useReduxDispatch();
  const priceList: Category[] = useReduxSelect(selectCategories);

  useEffect(() => {
    (async function () {
      const response = await fetch('https://66796b2318a459f6394fb1e8.mockapi.io/categories');
      const categories: Category[] = await response.json();

      dispatch(setCategories(categories));
    })();
  }, [dispatch]);

  if (!priceList?.length) {
    return <></>;
  }

  return (
      <AppRoutes/>
  );
}

export default App;
