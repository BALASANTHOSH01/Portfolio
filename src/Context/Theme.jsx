import { createContext, useContext, useState } from "react";

const ThemeMode = createContext({});

export const ThemeModeProvider = ({children}) =>{

    const [Theme,setTheme]=useState("light");

    const toggle =(Theme)=>{
        setTheme(Theme);
    };

    const ThemeValue = {
        Theme,
        toggle
    };

    return <ThemeMode.Provider value={ThemeValue}>{children}</ThemeMode.Provider>;
}

export default function usetheme() {
    
    const themecontext = useContext(ThemeMode);

    if(!themecontext){
        throw new Error("problem in your theme mode");
    }

    return themecontext;
}

