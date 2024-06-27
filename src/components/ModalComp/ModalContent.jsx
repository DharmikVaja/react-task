// eslint-disable-next-line react/prop-types
function ModalContent({ closeModal }) {
  return (
    <>
      <div className="flex absolute -top-0 bg-gray-500 bg-opacity-50 left-0 w-screen h-screen text-center justify-center items-center  ">
        <div className="flex flex-col bg-opacity-30 bg-white  text-center   w-[300px] h-[200px]">
          <div className="flex justify-end p-1">
            <span
              className="cursor-pointer text-black font-bold bg-white opacity-50 rounded-full px-2 "
              onClick={closeModal}
            >
              &times;
            </span>
          </div>
          <div className="flex flex-grow text-black  items-center justify-center text-2xl">
            This is Modal
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
