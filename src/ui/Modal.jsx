import styled from "styled-components";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 2rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  overflow: scroll;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({children, name}) {
 
  const { openName, close } = useContext(ModalContext);
  
  const ref = useOutsideClick(close);

  if(name !== openName) return null;

  return createPortal( 
    <Overlay>  
      <StyledModal style={ name === 'contact-form' ? { height: '95%', overflowX: 'hidden' , overflowY: 'scroll'} : {backgroundColor: 'var(--color-grey-0)'} } className="w-[90dvw] sm:w-[60dvw] min-[440px]:flex min-[440px]:items-normal min-[440px]:justify-center" ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>
        <div className="mt-20">{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>, document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
