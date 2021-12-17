import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";
// head 태그를 수정하고 싶을 때는 next의 Head를 사용

// 이것은 children과 같음... index.js, profile.js, signup.js 같은 페이지들이 컴포넌트로 들어와서 위에서 import한 친구들을 입힌 뒤 리턴된다고 보면 된다.
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
