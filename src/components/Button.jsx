/* eslint-disable react/prop-types */
function Button({ onClick, icon, children }) {
  return (
    <button
      className="bg-gray-600 p-2 flex items-center gap-1 rounded-md text-md"
      onClick={onClick}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
}

export default Button;
