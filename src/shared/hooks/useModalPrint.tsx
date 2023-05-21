import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IModalContextProps {
  openPrint: boolean;
  setOpenModalPrint: Dispatch<SetStateAction<boolean>>;
  openModalPrint: () => void;
  closeModalPrint: () => void;
}

interface IModalProviderProps {
  children: ReactNode;
}

const ModalPrintContext = createContext({} as IModalContextProps);

export function ModalPrint({ children }: IModalProviderProps) {
  const [openPrint, setOpenModalPrint] = useState(false);

  const openModalPrint = () => {
    setOpenModalPrint(true);
  };

  const closeModalPrint = () => {
    setOpenModalPrint(false);
  };

  return (
    <ModalPrintContext.Provider
      value={{ openPrint, setOpenModalPrint, openModalPrint, closeModalPrint }}
    >
      {children}
    </ModalPrintContext.Provider>
  );
}

export function useModalPrint() {
  return useContext(ModalPrintContext);
}
