import { FC } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: any;
  error?: string;
}

const InputField: FC<InputProps> = ({ type, placeholder, name, register, error }) => {
  return (
    // <div className="flex flex-col">
    //   <input
    //     type={type}
    //     placeholder={placeholder}
    //     {...register(name)}
    //     className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
    //   />
    //   {/* {error && <span className="text-red-500 text-sm mt-1">{error}</span>} */}
    //   <p className="text-red-500 text-sm min-h-[20px]">{error || ""}</p>
    // </div>
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border p-2 w-full rounded"
      />
      <p className="text-red-500 text-sm min-h-[20px]">{error || ""}</p>
    </div>
  );
};

export default InputField;
