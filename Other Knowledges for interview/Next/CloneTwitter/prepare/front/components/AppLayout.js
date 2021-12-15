// 페이지가 아닌 컴포넌트는 components 폴더에! (이건 필수는 아님)
// 넥스트에는 router 기능과 hot-loader 기능까지 포함되어 있어서 Link는 그냥 next에서 가져오면 되고
// 저장하면 알아서 개발 서버가 핫 리로딩된다
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Input, Menu, Row, Col } from "antd";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  // 이건 더미 데이터임. 서버 만들면 없앨 예정
  const { isLoggedIn } = useSelector((state) => state.user);
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // 위 두 개는 똑같음(성능이 살짝 다르지만 미미하다.)

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* 거터는 컬럼들 사이의 간격이다. Col 양쪽에 4px씩 패딩이 생긴다 */}
      <Row gutter={8}>
        {/*
        xs는 모바일, sm은 태블릿, md는 작은 데스크탑이다.
        아래의 의미는, Col 하나가 모바일 화면을 24/24만큼 사용하고, 작은 데스크탑에서는 6/24를 사용한다는 뜻 
        아래 친구는, 모바일에서는 Col 하나가 화면 하나를 차지하여 세 페이지가 나올 것이고, 데스크탑에서는 25% 50% 25%로 나눠서 가져갈 것이다.
        */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* target _blank를 사용할 때는 rel="noreferrer noopener"을 반드시 써야 보안 위협이 줄어든다. */}
          {/* 새 창을 열었을 때 어떤 창에서 정보가 들어왔는지가 전달되는데, 이런 정보의 유출을 방지하기 위함(referrer가 이전 창, opener가 새 창) */}
          <a
            href="https://kimsg64.github.io/GyuTube/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made By Kim
          </a>
        </Col>
      </Row>
    </div>
  );
};

// 타입은 노드인데, 여기서 노드는 return 부에 들어갈 수 있는 모든 것을 의미한다.
// 타입 스크립트 대용인 듯
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
