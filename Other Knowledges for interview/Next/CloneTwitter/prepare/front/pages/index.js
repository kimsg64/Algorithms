// Next.js는 import React 안해도 됨!
// 왜냐하면 Next는 pages 폴더를 인식해서 pages 안의 파일들을 다 코드 스플리팅된 페이지 컴포넌트로 만들어 줌
// Next.js가 놀랍게도 매핑도 알아서 해 준다...
// 리액트 라우터를 쓰지 않아도 /profile을 하면 profile.js 컴포넌트를 열어준다.
// 자체적으로 라우터 기능을 탑재하고 있는 거시다...
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch({ type: LOAD_POSTS_REQUEST });
  }, []);

  // 무한 스크롤
  useEffect(() => {
    function onScroll() {
      console.log(
        window.scrollY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
      // window.scrollY: 내려간 스크롤의 길이
      // document.documentElement.clientHeight: 보이는 화면의 길이
      // document.documentElement.scrollHeight: 스크롤의 총 길이
      // 이므로 document.documentElement.scrollHeight = window.scrollY + document.documentElement.clientHeight임을 이용해 무한스크롤을 구현할 것
      if (hasMorePosts && !loadPostsLoading) {
        if (
          window.scrollY + document.documentElement.clientHeight ==
          document.documentElement.scrollHeight - 300
        ) {
          dispatch({ type: LOAD_POSTS_REQUEST });
        }
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  console.log("rendered!");
  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
