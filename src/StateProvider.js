import { createContext, useReducer, useContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
export default StateProvider;
