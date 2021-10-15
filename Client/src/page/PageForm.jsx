import React from "react";
import PostForm from "../components/PostForm";
import styled from 'styled-components';

const Body = styled.body`
   height:
`

const PageForm = () => {
  return (
    <div className="bg-gray-100 h-auto pt-24" >
      <span>
        <PostForm />
      </span>
    </div>
  );
};
export default PageForm
