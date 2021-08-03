const useHandler = (setData, data, arr, setArr) => {
  const changHandler = (chk, target, i, name) => {
    if (chk) {
      setData(
        data.map((res, j) => {
          if (i === j) {
            res.checked = false;
            return res;
          }
          return res;
        })
      );
    } else {
      setData(
        data.map((res, j) => {
          if (i === j) {
            res.checked = true;
            return res;
          }
          return res;
        })
      );
    }

    if (target.checked) {
      setArr([...arr, { name, checked: false }]);
    } else {
      const myarr = [...arr];
      const index = myarr.indexOf(myarr.find(res => res.name === name));
      myarr.splice(index, 1);
      // console.log(myarr);
      setArr(myarr);
    }
  };

  return changHandler;
};

export default useHandler;
