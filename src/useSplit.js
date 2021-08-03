const useSplit = (setDataOne, dataOne, arr, setDataTwo, dataTwo, setarr) => {
  const splitArr = _ => {
    setDataOne(
      dataOne.filter(res => !arr.includes(arr.find(r => r.name === res.name)))
    );

    setDataTwo([
      ...dataTwo,
      ...arr.map(res => {
        res.checked = false;
        return res;
      })
    ]);
    setarr([]);
  };

  return splitArr;
};

export default useSplit;
