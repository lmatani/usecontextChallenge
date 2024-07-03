import {createContext, useContext, useState} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const changeThemeMode = (newMode) => {
        setTheme(newMode);
    };

    return (
        <ThemeContext.Provider value={{theme, changeThemeMode}}>
            {children}
        </ThemeContext.Provider>    
    )
};


export const useTheme = () => useContext(ThemeContext);