import React from 'react';
const ComponentDiv = ({ box, changeHandler }) => {
  return (
    <div className="componentA">
      {box.map((res, i) => (
        <p key={i}>
          <input
            type="checkbox"
            checked={res.checked}
            value={res.name | ''}
            name={res.name}
            onChange={e => {
              changeHandler(res.checked, e.target, i, res.name);
            }}
          />
          <span>{res.name}</span>
        </p>
      ))}
    </div>
  );
};

export default ComponentDiv;
