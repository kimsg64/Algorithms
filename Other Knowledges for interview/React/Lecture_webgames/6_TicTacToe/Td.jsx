import React, { useCallback, memo, useRef, useEffect } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  //////////////////////////////////////////////////////////////////
  // useRef와 useEffect를 활용해서 어떤 프롭스가 바뀌는지 판단하기
  // 의존성 배열에 있는 애들이 바뀔 때마다 useEffect가 실행되기 때문에
  // ref는 useEffect 안에서 계속 바뀌는데
  // 전달받은 props 중에 바뀌지 않는 애가 있을 수 있다.
  // 바뀐 애들은 false, 안바뀐 애들은 true가 나오겠죠?
  // false인 애가 리렌더링의 주범입니다.
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      dispatch === ref.current[2],
      cellData === ref.current[3]
    );
    console.log(cellData, ref.current[3]);
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
  }, [rowIndex, cellIndex, dispatch, cellData]);
  //////////////////////////////////////////////////////////////////

  const onClickTd = useCallback(() => {
    console.log("td rendered");
    if (cellData) return;
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return <td onClick={onClickTd}>{cellData}</td>;
});

export default Td;
