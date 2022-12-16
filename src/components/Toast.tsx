import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { removeToast } from "../redux/toast/toast";
import { toastVariantAnimation } from "../utilities/Animation";
import { NotificationType } from "../types";
import DynamicHeroIcon from "./DynamicIcon";

function Toast(): JSX.Element {
  const { message, messageType, buttonText, onClick } = useAppSelector(
    (state) => state.toast
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message) {
      setTimeout(
        () => {
          dispatch(removeToast());
        },
        buttonText ? 60 * 1000 : 3000
      );
    }
  }, [message, dispatch, buttonText]);

  return (
    <AnimatePresence mode="wait">
      {message && messageType ? (
        <motion.div
          key="toast"
          variants={toastVariantAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="right-5 top-5 fixed flex
        items-center p-4 mb-4 w-full z-50
         max-w-xs text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <div>
            {messageType === NotificationType.success && (
              <DynamicHeroIcon
                icon="CheckCircleIcon"
                className="w-5 text-green-400"
              />
            )}
            {messageType === NotificationType.warning && (
              <DynamicHeroIcon
                icon="ExclamationTriangleIcon"
                className="w-5 text-yellow-400"
              />
            )}
            {messageType === NotificationType.error && (
              <DynamicHeroIcon
                icon="ExclamationCircleIcon"
                className="w-5 text-red-400"
              />
            )}
          </div>
          <div className="ml-3 text-sm font-normal">
            {message}{" "}
            {buttonText && (
              <button
                className="ml-4 border p-1 rounded 
                                border-blue-500 capitalize
                                text-blue-500 text-xs
                                "
                type="button"
                onClick={onClick && onClick}
              >
                {buttonText}
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={() => dispatch(removeToast())}
            className="ml-auto -mx-1.5 -my-1.5 
            bg-white text-gray-400
             hover:text-gray-900 rounded-lg 
             focus:ring-2 focus:ring-gray-300 p-1.5 
             hover:bg-gray-100 inline-flex h-8 w-8"
            aria-label="Close"
          >
            <DynamicHeroIcon icon="XCircleIcon" className="w-5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default Toast;
