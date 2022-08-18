import React,{useState} from "react";
import { createContext } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [singlepage, setSinglePage] = useState([]);

  return <NewsContext.Provider value={{singlepage, setSinglePage}}>{children}</NewsContext.Provider>;

};
