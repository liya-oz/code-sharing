import "./Button.css";
const Button = ({ onClick, label , type }) => {
  return <button onClick={onClick} className="custom-btn" type={type}> {label} </button>;
};
export default Button;
