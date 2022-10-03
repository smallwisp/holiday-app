import { createContext } from "react";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const holiday = useSelector(state => state.holidays.holiday);
  const [{urlImg}] = useFetch(holiday ? `${URI_API}image/${holiday}` : '');

  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  )
}