import React from "react";
import PostForm from "../components/PostForm";
import style from 'styled-components';

const Body = style.div`
height:36rem
`

const PageForm = () => {
  return (
    <Body className="bg-gray-100 pt-1 h-auto">
      <span>
        <PostForm />
      </span>
    </Body>
  );
};
export default PageForm
