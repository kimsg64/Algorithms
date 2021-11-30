import React, { memo } from "react";

// state를 쓰지 않는 경우에는 이처럼 그냥 함수 컴포넌트로 만들 수 있다.
const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }
  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
});

export default Ball;
