import { useState } from "react";
import ModalContent from "./_03.2ModalContent";

function Modal() {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <div className="flex justify-center relative items-center overflow-y-hidden overflow-x-hidden w-screen h-screen bg-black">
        <div className="flex  items-center flex-col gap-y-5 text-red-200">
          <p className="text-2xl">Click Here to Open Modal:</p>
          <button
            className="bg-blue-400 text-white p-2 rounded-lg w-1/3"
            onClick={handleModal}
          >
            Open
          </button>
          {show && (
            <div className="modal_div">
              <ModalContent closeModal={closeModal} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
