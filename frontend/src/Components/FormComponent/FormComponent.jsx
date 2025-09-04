function FormComponent({ onSubmitHandler, children }) {
  return (
    <form
      className="flex flex-col justify-center items-center w-full mx-auto"
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >

    {children}
     
    </form>
  );
}

export default FormComponent;
