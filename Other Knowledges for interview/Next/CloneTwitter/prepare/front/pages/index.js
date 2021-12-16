// Next.js는 import React 안해도 됨!
// 왜냐하면 Next는 pages 폴더를 인식해서 pages 안의 파일들을 다 코드 스플리팅된 페이지 컴포넌트로 만들어 줌
// Next.js가 놀랍게도 매핑도 알아서 해 준다...
// 리액트 라우터를 쓰지 않아도 /profile을 하면 profile.js 컴포넌트를 열어준다.
// 자체적으로 라우터 기능을 탑재하고 있는 거시다...
import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  console.log("rendered!");
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
