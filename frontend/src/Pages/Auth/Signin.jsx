import Button from "src/Components/Button/Button";
import FormComponent from "src/Components/FormComponent/FormComponent";
import InputComponent from "src/Components/InputComponent/InputComponent";
import LinkButton from "src/Components/LinkButton/LinkButton";

function Signin() {
  function onSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-white text-3xl">Login to Your Account</h1>
      </div>
      <div className="mt-4">
        <span className="text-white">Do not have an account ?</span>
        <LinkButton
          buttonText={"Sign Up"}
          linkTo={"/signup"}
          buttonCategory={"success"}
        />
      </div>
      <div className="w-full">
        <FormComponent onSubmitHandler={onSubmitHandler}>
          <InputComponent inputType={"email"} placeholder={"Email..."} />
          <InputComponent inputType={"password"} placeholder={"Password"} />
          <Button
            buttonText={"Submit"}
            buttonType="submit"
            buttonWidth={"w-1/3"}
            buttonCategory={"success"}
          />
        </FormComponent>
      </div>
    </div>
  );
}

export default Signin;
