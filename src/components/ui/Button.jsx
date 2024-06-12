const Button = (props) => {
  return (
    <button className="bg-gray-200 p-2 border border-red-800 hover:bg-gray-400">
      {props.children}
    </button>
  );
};
export default Button;
