import React, { memo, useMemo } from "react";
import Td from "./Td";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  console.log("tr rendered");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) =>
          useMemo(
            () => (
              <Td
                key={i}
                rowIndex={rowIndex}
                cellIndex={i}
                dispatch={dispatch}
                cellData={rowData[i]}
              />
            ),
            [rowData[i]]
          )
        )}
    </tr>
  );
});

export default Tr;
