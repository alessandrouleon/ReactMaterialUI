import { ReactNode, createContext, useContext, useState } from "react";

interface ISearchProps {
  column: string;
  value: string;
}

interface ISearchContextData {
  obj: ISearchProps | undefined;
  setObj: (value: ISearchProps) => void;
  clearSearch: boolean;
  setClearSearch: (value: boolean) => void;
  isFilled: boolean;
  resetSearchProvider: () => void;
}

interface ISearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext({} as ISearchContextData);

export function SearchProvider({ children }: ISearchProviderProps) {
  const [obj, setObj] = useState<ISearchProps>();
  const [clearSearch, setClearSearch] = useState(false);
  const isFilled = Boolean(obj?.column && obj?.value);
  const resetSearchProvider = () => {
    setObj({ column: "", value: "" });
  };

  return (
    <SearchContext.Provider
      value={{
        obj,
        setObj,
        clearSearch,
        setClearSearch,
        isFilled,
        resetSearchProvider,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
