/* eslint-disable max-len */
import { motion, AnimatePresence } from "framer-motion";
import DynamicHeroIcon from "./DynamicIcon";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { modalVariantAnimation } from "../utilities/Animation";
import { ModalTypes } from "../types";
import { confirmAction, closeModal } from "../redux/modal/modal";

function PopupModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const { open, confirmButtonMessage, confirmMessage, confirmTitle, type } =
    useAppSelector((state) => state.modal);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="pop-up-modal"
          variants={modalVariantAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 right-0 justify-center items-center
                  z-20 w-full h-full flex bg-gray-700 bg-opacity-60"
          onClick={() => setTimeout(() => dispatch(closeModal()), 200)}
        >
          <div
            className="z-30 relative p-4 w-full max-w-md max-h-lg
                    h-auto"
          >
            <div
              className="relative inset-0 bg-white 
                    rounded-lg shadow "
            >
              <div className="flex justify-between">
                <div />
                <button
                  type="button"
                  className="m-2"
                  onClick={() => dispatch(closeModal())}
                >
                  <DynamicHeroIcon
                    icon="XMarkIcon"
                    className="text-gray-500 w-6 h-6"
                  />
                </button>
              </div>

              <div className="p-6 pt-2 text-center">
                <h2 className="text-lg lg:text-xl mb-2">{confirmTitle}</h2>
                <h3
                  className="mb-5 text-lg font-normal
                             text-gray-500"
                >
                  {confirmMessage}
                </h3>

                <button
                  onClick={() => dispatch(closeModal())}
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white 
                                hover:bg-gray-100 focus:ring-4 
                                focus:outline-none focus:ring-gray-20
                                0 rounded-lg border 
                                 border-gray-200 text-sm font-medium 
                                 px-5 py-2.5 hover:text-gray-900 
                                 focus:z-10 mr-4"
                >
                  No, cancel
                </button>
                <button
                  onClick={() => dispatch(confirmAction())}
                  data-modal-toggle="popup-modal"
                  type="button"
                  className={`text-white
                                focus:ring-4 focus:outline-none
                                ${
                                  type === ModalTypes.DELETE ||
                                  type === ModalTypes.LOGOUT
                                    ? "focus:ring-red-300 bg-red-600 hover:bg-red-800"
                                    : ""
                                }

                                ${
                                  type === ModalTypes.EDIT &&
                                  "focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 "
                                }

                                ${
                                  type === ModalTypes.WARNING &&
                                  "focus:ring-yellow-300 bg-yellow-600 hover:bg-yellow-800"
                                }
                                 font-medium rounded-lg 
                                 text-sm inline-flex items-center px-5 py-2.5 
                                 text-center mr-2`}
                >
                  {confirmButtonMessage}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PopupModal;
