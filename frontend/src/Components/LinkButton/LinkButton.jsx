import { Link } from "react-router-dom";

function LinkButton({
  buttonText,
  linkTo,
  buttonCategory,
  buttonType = "button",
  buttonTextColor,
}) { 
  return (
    <Link to={linkTo}>
      <button
        className={`btn btn-${buttonCategory} rounded-md px-2 mx-5 hover:bg-green-400 text-${buttonTextColor}`}
        type={buttonType}
      >
        {buttonText}
      </button>
    </Link>
  );
}

export default LinkButton;
