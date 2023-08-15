/* eslint-disable react/prop-types */
import { UilArrowDown, UilCancel } from "@iconscout/react-unicons";

function EditorHeader({ icon, name, setShow, setCode }) {
  return (
    <div className="flex justify-between h-full text-white font-semibold bg-black text-xs">
      <label className="bg-stone-900 border-t-4 p-2 border-gray-600 flex justify-center items-center gap-1 tracking-widest">
        <span>{icon}</span>
        {name}
      </label>
      <div className="flex gap-1 items-center mr-3">
        <span
          className="cursor-pointer bg-gray-600 px-2 hover:bg-gray-400 rounded-sm py-1"
          onClick={() => setCode("")}
        >
          <UilCancel size={12} />
        </span>
        <span
          className="cursor-pointer bg-gray-600 px-2 hover:bg-gray-400 rounded-sm py-1"
          onClick={() => setShow((prev) => !prev)}
        >
          <UilArrowDown size={12} />
        </span>
      </div>
    </div>
  );
}

export default EditorHeader;
