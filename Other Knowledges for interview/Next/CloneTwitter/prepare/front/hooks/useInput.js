// 커스텀 훅스
// 인풋에서 유저가 입력한 값을 value로 설정하는 것과 같이
// 반복되는 기능은 커스텀 훅스로 만들면 편하다.
// 커스텀 훅스는 일반 훅스와 달리 컴포넌트 내의 최상위 스코프가 아니라도 사용 가능하다.

import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};
