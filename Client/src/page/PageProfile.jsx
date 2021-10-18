import React from "react";
import Profile from "./../components/Profile";
import style from "styled-components";

const Body = style.div`
height:auto
`;

const PageProfile = (props) => {
  return (
    <Body className="bg-gray-100">
      <Profile />
    </Body>
  );
};

export default PageProfile;
