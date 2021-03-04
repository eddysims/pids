import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  "default",
  () => "default",
]);

export function useColorMode() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  readonly initialColorMode?: string;
}

export function ThemeProvider({
  children,
}: PropsWithChildren<ThemeProviderProps>) {
  const [colorMode, setColorMode] = useState("default");

  useEffect(() => {
    const currentColorMode = getLocalStorageItem("pids-color-mode");
    if (currentColorMode) {
      setColorMode(currentColorMode);
      addColorModeToHtml();
    }
  }, []);

  useEffect(() => {
    addColorModeToHtml();
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={[colorMode, setColorMode]}>
      {children}
    </ThemeContext.Provider>
  );

  function addColorModeToHtml() {
    const docRoot = document.querySelector("html");
    if (docRoot && colorMode) {
      setLocalStorageItem("pids-color-mode", colorMode);
      docRoot.setAttribute("data-color-mode", colorMode);
    }
  }
}

function getLocalStorageItem(item: string) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(item) as string;
  }

  return undefined;
}

function setLocalStorageItem(item: string, value: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(item, value);
  }
}
