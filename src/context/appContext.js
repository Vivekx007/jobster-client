import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { CLEART_ALERT, DISPLAY_ALERT } from "./action";
// const [state, dispatch] = useReducer(reducer, initialState);

export const initialState = {
  isLoading: "false",
  showAlert: "false",
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const displayAlert = (alertText) => {
    dispatch({ type: DISPLAY_ALERT, payload: { alertText } });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEART_ALERT,
      });
    }, 3000);
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// coustom hook
export const useAppContext = () => {
  return useContext(AppContext);
};
