import { createContext, useState } from "react";
export const OurContext = createContext();
export const OurProvider = ({children}) => {
    const [theme,setTheme] = useState("dark");
     const [ison,setIsOn] = useState(false);
     const [show,setShow] = useState(false);
     const [search,setSearch] = useState("");
     const [filter,setFilter] = useState("All");
     
        const toggleTheme = () => {
         setTheme((prev)=>(prev==="dark"?"light":"dark"));
         setIsOn((prev)=>!prev);
        }
        
return(
  <OurContext.Provider value={{theme,ison,toggleTheme,show,setShow,search,setSearch,filter,setFilter,navigation}}>
    {children}
  </OurContext.Provider>

)
}
