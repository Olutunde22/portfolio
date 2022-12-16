/* eslint-disable react/button-has-type */
import { button } from "../types";
import DynamicHeroIcon from "./DynamicIcon";

const defaultProps = {
  type: "button",
};

function Button({
  type,
  text,
  icon,
  iconClassName,
  className,
  handleClick,
}: button): JSX.Element {
  return (
    <button
      onClick={handleClick && handleClick}
      className={`text-blue-400 bg-white whitespace-nowrap 
            hover:text-white ease-in-out
            px-4 py-2 border rounded-lg hover:bg-blue-400 border-blue-400
            hover:border-white duration-300 flex justify-center ${
              className && className
            }`}
      type={type}
    >
      {icon && (
        <DynamicHeroIcon icon={icon} className={`${iconClassName} mr-2`} />
      )}
      <span className="text-md">{text}</span>
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
