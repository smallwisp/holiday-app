import { createContext, useContext } from "react";
import { holidaysContext } from "./holidaysContext";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext);
  const [{urlImg}] = useFetch(holiday ? `${URI_API}image/${holiday}` : '');

  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  )
}