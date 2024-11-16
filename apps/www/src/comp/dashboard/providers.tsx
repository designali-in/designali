"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext } from "react";

import { useSignInModal } from "./sign-in-modal";

export const ModalContext = createContext<{
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}>({
  setShowSignInModal: () => {},
});

export default function ModalProvider({ children }: { children: ReactNode }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <ModalContext.Provider
      value={{
        setShowSignInModal,
      }}
    >
      <SignInModal />
      {children}
    </ModalContext.Provider>
  );
}
