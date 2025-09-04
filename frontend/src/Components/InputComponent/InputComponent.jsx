function InputComponent({
  inputType,
  placeholder,
  inputValue,
  onChangeHandler,
  inputName
}) {
  return (
    <>
      <div className="my-3 w-full">
        <input
          type={inputType}
          name={inputName}
          placeholder={placeholder}
          className="px-8 py-3 bg-white w-full text-black"
          value={inputValue}
          onChange={onChangeHandler}
        />
      </div>
    </>
  );
}

export default InputComponent;
