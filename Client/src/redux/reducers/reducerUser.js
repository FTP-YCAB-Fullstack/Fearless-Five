const initialState = {
  user: {},
  isAuthenticated: false
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LOGIN":
      const data = { ...action.payload };
      return { 
        isAuthenticated: true,
        user: data
       };
    default:
      return state;
  }
};

export default reducerUser;
