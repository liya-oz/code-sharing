import "./Button.css";
const Button = ({ onClick, label }) => {
  return <button onClick={onClick} className="custom-btn"> {label} </button>;
};
export default Button;
