import React from "react";
import {useSelector} from 'react-redux'

const HomeCon = () => {
  const state = useSelector(state => state);
  console.log(state)
  return (
    <div>
      <span>Home</span>
    </div>
  );
};

export default HomeCon
