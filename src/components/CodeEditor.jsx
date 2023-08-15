/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import EditorHeader from "./EditorHeader";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
// import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";

function CodeEditor(props) {
  const { icon, name, onChange, value, setCode } = props;

  const [show, setShow] = useState(true);

  return (
    <div className="w-full flex flex-col h-full">
      <div>
        <EditorHeader
          icon={icon}
          name={name}
          setShow={setShow}
          setCode={setCode}
        />
      </div>
      {show && (
        <div className="w-full h-full rounded-md">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            wrap="off"
            className="p-3 resize-none min-h-full outline-none bg-stone-900 text-gray-200 text- font-mono h-full w-full"
          />
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
