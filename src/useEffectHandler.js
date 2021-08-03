import { useEffect } from 'react';

const useEffectHandler = (aArr, ref1, ref2, setData, data, setArrData) => {
  useEffect(() => {
    // console.log('aArr', aArr, boxOne);
    // console.log(btnOneRef.current.disabled);
    aArr.length <= 0
      ? (ref1.current.disabled = true)
      : (ref1.current.disabled = false);

    if (!ref1.current.disabled && !ref2.current.disabled) {
      ref2.current.disabled = true;
      setData(
        data.map(res => {
          res.checked = false;
          return res;
        })
      );
      setArrData([]);
    }
  }, [aArr]);
};

export default useEffectHandler;
