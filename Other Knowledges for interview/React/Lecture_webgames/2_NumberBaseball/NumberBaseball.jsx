import React, { useState } from "react";

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), i)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevTries) => [
        ...prevTries.tries,
        { try: value, result: "홈런!" },
      ]);
      alert("게임을 다시 시작합니다...");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 틀려서 실패! 답은 ${answer.join(",")}였습니다~`);
        alert("게임을 다시 시작합니다...");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [
          ...prevTries,
          { try: value, result: `${strike} 스트라이크, ${ball} 볼` },
        ]);
      }
    }
  };
  onChangeInput = (e) => {
    console.log(answer);
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
};

export const hello = "hello!"; // import { hello }
export const bye = "bye..."; // import { bye }
// import { hello, bye }
export default NumberBaseball; // import Numberbaseball

///////////////////////////////////////////////////////
// exports.hello = "hello!";
// exports.bye = "bye...";
// module.exports = NumberBaseball;
