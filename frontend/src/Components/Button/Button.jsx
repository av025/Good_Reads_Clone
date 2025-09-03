function Button({
  buttonText,
  buttonType = "button",
  buttonWidth,
  buttonTextColor,
  buttonCategory,
}) {
  return (
    <button
      className={`btn btn-${buttonCategory} rounded-md px-2 py-1 ${buttonWidth} text-${buttonTextColor} hover:bg-green-400`}
      type={buttonType}
    >
      {buttonText}
    </button>
  );
}

export default Button;
