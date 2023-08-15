import Result from "./components/Result";
import Header from "./components/Header";
import {
  UilHtml5,
  UilCss3Simple,
  UilJavaScript,
} from "@iconscout/react-unicons";
import CodeEditor from "./components/CodeEditor";
import { useState } from "react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("* {color:#fff; margin:0; padding:0;}");
  const [javascript, setJavascript] = useState("");

  return (
    <div className="flex flex-col h-screen justify-start w-screen divide-y divide-gray-800">
      <div>
        <Header
          setHtml={setHtml}
          setCss={setCss}
          setJavascript={setJavascript}
        />
      </div>
      <div className="gap-4 w-full h-full flex relative justify-between px-3 ">
        <div className="w-full">
          <CodeEditor
            setCode={setHtml}
            name="HTML"
            onChange={setHtml}
            value={html}
            icon={<UilHtml5 size={14} />}
          />
        </div>
        <div className="w-full">
          <CodeEditor
            setCode={setCss}
            onChange={setCss}
            name="CSS"
            value={css}
            icon={<UilCss3Simple size={14} />}
          />
        </div>

        <div className="w-full">
          <CodeEditor
            setCode={setJavascript}
            onChange={setJavascript}
            name="JS"
            value={javascript}
            icon={<UilJavaScript size={14} />}
          />
        </div>
      </div>
      <div className="mt-2 col-start-1 bg-stone-800 w-full h-full">
        <Result html={html} css={css} js={javascript} />
      </div>
    </div>
  );
}

export default App;
