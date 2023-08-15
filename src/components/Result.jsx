/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

function Result(props) {
  const { html, css, js } = props;
  const outputRef = useRef(null);

  useEffect(() => {
    outputRef.current.srcdoc = `
      <html>
        <body>
          ${html}
          <style>${css}</style>
          </body>
          <script>${js}</script>
      </html>
    `;
  }, [html, css, js]);

  return (
    <div className="w-full h-full relative overflow-auto">
      <iframe
        className="absolute top-0 left-0 w-full h-full "
        height="1000"
        ref={outputRef}
      >
        You need a Frames Capable browser to view this content.
      </iframe>
    </div>
  );
}

export default Result;
