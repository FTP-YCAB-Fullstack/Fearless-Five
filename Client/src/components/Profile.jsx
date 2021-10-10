import React, {useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const getProfile = async (token) => {
    try {
      const data = await axios.get("http://localhost:3001/users", {
        headers: {
          token,
        },
      });
      dispatch({ type: "ADD_LOGIN", payload: data.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfile(token);
  }, []);

  return (
    <React.Fragment>
      {!user.name ? null : (
        <div>
          <h1>{user.name}</h1>
          <p>{user.jobTitle}</p>
          <p>{user.summary}</p>
          <p>{user.email}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
