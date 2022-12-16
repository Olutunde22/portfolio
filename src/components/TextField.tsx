import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import DynamicHeroIcon from "./DynamicIcon";
import { Textfield, InputTypes } from "../types";

function TextField({
  id,
  label,
  name,
  type,
  placeholder,
  labelStyle,
  FieldStyle,
  checked,
  errors,
  touched,
  value,
}: Textfield): JSX.Element {
  const password = type;
  const [show, setShow] = useState(InputTypes.PASSWORD);
  return (
    <div>
      <label
        className={`${
          labelStyle !== undefined ? labelStyle : "font-normal text-md"
        } mb-1`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="flex flex-row items-center">
        <Field
          className={`${
            FieldStyle !== undefined
              ? FieldStyle
              : "mt-1 py-4 sm:text-sm " + "block w-full rounded-md"
          } ${
            errors && touched
              ? "border-red-500 "
              : FieldStyle
              ? ""
              : "focus:border-portfolio-500 border-gray-300"
          }`}
          id={id ? id : name}
          name={name}
          type={type === InputTypes.PASSWORD ? show : type}
          placeholder={placeholder}
          value={value}
          checked={checked}
        />
        {password === InputTypes.PASSWORD && show === InputTypes.PASSWORD ? (
          <DynamicHeroIcon
            icon="EyeIcon"
            onClick={() => {
              setShow(InputTypes.TEXT);
            }}
            className="h-5 -ml-10 md:-ml-8"
          />
        ) : null}

        {password === InputTypes.PASSWORD && show === InputTypes.TEXT ? (
          <DynamicHeroIcon
            icon="EyeSlashIcon"
            onClick={() => {
              setShow(InputTypes.PASSWORD);
            }}
            className="h-5 -ml-10 md:-ml-8"
          />
        ) : null}
      </div>

      <ErrorMessage
        className="text-red-500 ml-2 mt-1"
        component="div"
        name={name}
      />
    </div>
  );
}

export default TextField;
