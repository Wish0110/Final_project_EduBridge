import { useContext } from 'react';
import { RouterContext } from 'react-router';

const useNavigation = () => {
  const router = useContext(RouterContext);
  const history = router.history;

  const goBack = () => {
    history.goBack();
  };

  return { goBack };
};

export default useNavigation;