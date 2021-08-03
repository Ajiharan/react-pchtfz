import { useRef } from 'react';

const useApp = () => {
  const refe = useRef();

  return { refe };
};

export default useApp;
