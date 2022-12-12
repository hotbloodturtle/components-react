import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(true);

  const hideModal = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };
  return {
    visible,
    showModal,
    hideModal,
  };
};

export default useModal;
