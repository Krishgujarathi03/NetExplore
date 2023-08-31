import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
