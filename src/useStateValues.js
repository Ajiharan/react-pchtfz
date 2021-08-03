import { useState } from 'react';

const useStateValues = initialState => {
  const [data, setData] = useState(initialState);

  return [data, setData];
};

export default useStateValues;
