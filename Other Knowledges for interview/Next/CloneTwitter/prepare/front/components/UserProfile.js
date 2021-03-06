import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
  const { logOutLoading } = useSelector((state) => state.user);
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("in user profile", me);
  const onLogout = useCallback(() => {
    dispatch({ type: LOG_OUT_REQUEST });
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {me.Posts.length}
        </div>,
        <div key="followings">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="followers">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
