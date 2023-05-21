import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IModalContextProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  idObject: any;
  setIdObject: Dispatch<SetStateAction<any>>;
  buttonState: boolean;
  setButtonState: (value: boolean) => void;
  listName: string;
  setListName: (value: string) => void;
}

interface IModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as IModalContextProps);

export function ModalProvider({ children }: IModalProviderProps) {
  const [open, setOpen] = useState(false);
  const [idObject, setIdObject] = useState(null);
  const [buttonState, setButtonState] = useState(false);
  const [listName, setListName] = useState("");

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setIdObject(null);
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        openModal,
        closeModal,
        idObject,
        setIdObject,
        buttonState,
        setButtonState,
        listName,
        setListName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
