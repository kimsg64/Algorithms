// 페이지가 아닌 컴포넌트는 components 폴더에! (이건 필수는 아님)
// 넥스트에는 router 기능과 hot-loader 기능까지 포함되어 있어서 Link는 그냥 next에서 가져오면 되고
// 저장하면 알아서 개발 서버가 핫 리로딩된다

import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>노드버드</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

// 타입은 노드인데, 여기서 노드는 return 부에 들어갈 수 있는 모든 것을 의미한다.
// 타입 스크립트 대용인 듯
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
