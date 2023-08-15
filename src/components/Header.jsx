/* eslint-disable react/prop-types */
import Button from "./Button";

function Header(props) {
  const { setHtml, setCss, setJavascript } = props;

  function handelClear() {
    setHtml("");
    setCss("");
    setJavascript("");
  }

  return (
    <div className="text-white flex gap-3 justify-between items-center px-4 py-3">
      <div className="w-6 cursor-pointer gap-4 flex">
        <img src="/codepen_logo.jpg" className="w-full" />
        <h1>CodePen</h1>
      </div>
      <div className="text-md mx-4">
        <Button onClick={handelClear}>Clear All</Button>
      </div>
    </div>
  );
}

export default Header;
