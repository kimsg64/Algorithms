const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("첫단어");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [wordList, setWordList] = useState([]);
  const inputRef = useRef(null);

  console.log("rendered");
  console.log(inputRef);

  onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(wordList);
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      // setWordList((prevList) => prevList.push(value));
      setWordList((prevList) => [...prevList, value]);
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    inputRef.current.focus();
  };

  onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button id="button">입력!</button>
      </form>
      <div>{result}</div>
      <div>{wordList}</div>
    </>
  );
};

module.exports = WordRelay;
