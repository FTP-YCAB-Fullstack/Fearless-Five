import React from "react";
import Login from "../components/Login";
import style from "styled-components";

const Body = style.div`
height:36rem
`;

const PageLogin = () => {
  return (
    <Body className="bg-gray-100">
      <Login />
    </Body>
  );
};

export default PageLogin;
