import { Textarea } from "../types";

function TextArea({
  label,
  name,
  rows,
  placeholder,
  defaultValue,
}: Textarea): JSX.Element {
  return (
    <div>
      <label className="text-blue-500 font-normal text-lg" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="shadow-sm 
        focus:ring-indigo-500 
        focus:border-indigo-500 
        mt-1 block w-full 
        sm:text-sm border 
        border-gray-300 rounded-md"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default TextArea;
