import React, { useEffect } from 'react';
import './style.css';
import useApp from './useApp';
import useStateValues from './useStateValues';
import useEffectHandler from './useEffectHandler';
import useSplit from './useSplit';
import useHandler from './useHandler';
import ComponentDiv from './ComponentDiv';

export default function App() {
  const btnOneRef = useApp().refe;
  const btnTwoRef = useApp().refe;

  const [boxOne, setBoxOne] = useStateValues([
    { name: 'one', checked: false },
    { name: 'two', checked: false },
    { name: 'three', checked: false },
    { name: 'four', checked: false }
  ]);

  const [boxTwo, setBoxTwo] = useStateValues([]);
  const [aArr, setaArr] = useStateValues([]);
  const [bArr, setbArr] = useStateValues([]);

  useEffectHandler(aArr, btnOneRef, btnTwoRef, setBoxTwo, boxTwo, setbArr);
  useEffectHandler(bArr, btnTwoRef, btnOneRef, setBoxOne, boxOne, setaArr);

  const splitArrA = useSplit(
    setBoxOne,
    boxOne,
    aArr,
    setBoxTwo,
    boxTwo,
    setaArr
  );

  const splitArrB = useSplit(
    setBoxTwo,
    boxTwo,
    bArr,
    setBoxOne,
    boxOne,
    setbArr
  );
  const changeHandlerOne = (chk, target, i, name) => {
    useHandler(setBoxOne, boxOne, aArr, setaArr)(chk, target, i, name);
  };
  const changeHandlerTwo = (chk, target, i, name) => {
    useHandler(setBoxTwo, boxTwo, bArr, setbArr)(chk, target, i, name);
  };

  return (
    <div className="container">
      <ComponentDiv box={boxOne} changeHandler={changeHandlerOne} />
      <div className="buttons">
        <button
          ref={btnOneRef}
          onClick={() => {
            splitArrA();
          }}
        >
          {'>>'}
        </button>
        <button
          ref={btnTwoRef}
          onClick={() => {
            splitArrB();
          }}
        >
          {'<<'}
        </button>
      </div>
      <ComponentDiv box={boxTwo} changeHandler={changeHandlerTwo} />
    </div>
  );
}
