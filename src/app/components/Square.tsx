import React from 'react';

function Square(props: {
  onClick: () => void;
  value: null | string;
}): JSX.Element {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
