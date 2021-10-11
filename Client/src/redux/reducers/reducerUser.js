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
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        user: {}
      }
    default:
      return state;
  }
};

export default reducerUser;
