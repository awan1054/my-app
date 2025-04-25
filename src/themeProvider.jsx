import { createContext } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
