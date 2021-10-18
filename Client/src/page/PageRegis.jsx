import React from "react";
import RegisForm from "../components/RegisForm";
import style from "styled-components";

const Body = style.div`
height:36rem
`;

const PageRegis = () => {
  return (
    <Body className="bg-gray-100">
      <RegisForm />
    </Body>
  );
};

export default PageRegis;
