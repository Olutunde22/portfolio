import { FormikButton } from "../types";

function SubmitButton(props: FormikButton): JSX.Element {
  const { disabled = false, disabledClasses, Text } = props;
  return (
    <button
      className={`${
        !disabled ? "bg-portfolio-400 " : `bg-portfolio-100 ${disabledClasses}`
      }
            focus:shadow-outline w-1/2 mx-auto lg:w-full 
focus:outline-none text-white
py-2 px-4 rounded mb-6`}
      type="submit"
      disabled={disabled}
    >
      {Text}
    </button>
  );
}

SubmitButton.defaultProps = {
  isSubmitting: false,
  extraClasses: "",
};

export default SubmitButton;
