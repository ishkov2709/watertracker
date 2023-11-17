import { createContext ,useState, useCallback  } from 'react';

import { Backdrop } from 'components/common/Loader/Loader.styled';

export const ModalContext = createContext();


const ModalProvider = ({children}) => {
  const [modal, setModal] = useState(null);

  const toggleModal = useCallback((modal = null) => setModal(modal), []);
    console.log(modal)
  return (
    <ModalContext.Provider value={toggleModal}>
      {modal && <Backdrop>
        {modal}
          </Backdrop>}
          {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;