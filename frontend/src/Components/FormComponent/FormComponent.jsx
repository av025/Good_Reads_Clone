import Button from "../Button/Button";
import InputComponent from "../InputComponent/InputComponent";

function FormComponent({ onSubmitHandler, children }) {
  return (
    <form
      className="flex flex-col justify-center items-center w-3/4 mx-auto"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >

    {children}
     
    </form>
  );
}

export default FormComponent;
