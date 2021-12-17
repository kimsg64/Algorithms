import Link from "next/link";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";

import styled from "styled-components";
import { Form, Input, Button } from "antd";

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      {/* antd의 onFinish에는 e.preventDefault()가 적용되어 있다. */}
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/*
      사실 이렇게 인라인 스타일을 주면 안된다.
      왜냐하면 모든 객체는 다르기 때문에 ({} !== {})
      스타일에 전달되는 { marginTop: "10px" } 객체 때문에 실제로 변한 것이 없음에도 div태그 전체가 리렌더링되어버림
      */}
      {/* <div style={{ marginTop: "10px" }}> */}
      {/* 아니면 이렇게 useMemo를 써서 style에 들어갈 객체를 캐싱해 두면 리렌더링이 방지된다. */}
      {/* <div style={style}> */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
