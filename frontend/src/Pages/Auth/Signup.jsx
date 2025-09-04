import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "src/Components/Button/Button";
import FormComponent from "src/Components/FormComponent/FormComponent";
import InputComponent from "src/Components/InputComponent/InputComponent";
import LinkButton from "src/Components/LinkButton/LinkButton";
import { signup } from "src/Store/Slices/authSlice";

function Signup() {
  const [signupDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

async  function onSubmitHandler(event) {
    event.preventDefault();
    const response =  await dispatch(signup(signupDetails));
    if (response?.payload?.data) {
      navigate("/signin");
    } 
    resetSignupForm(); 
  } 

  function resetSignupForm() {
    setSignupDetails({
      username:"",
      email:"",
      password:"",

    })
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-white text-3xl">Create a New Account</h1>
      </div>
      <div className="mt-4">
        <span className="text-white">Already have an account ?</span>
        <LinkButton
          buttonText={"Sign In"}
          linkTo={"/signin"}
          buttonCategory={"success"}
        />
      </div>
      <div className="w-full">
        <FormComponent onSubmitHandler={onSubmitHandler}>
          <InputComponent
            inputName={"username"}
            inputType={"text"}
            placeholder={"Username..."}
            inputValue={signupDetails.username}
            onChangeHandler={handleFormChange}
          />
          <InputComponent
            inputType={"email"}
            inputName={"email"}
            placeholder={"Email..."}
            inputValue={signupDetails.email}
            onChangeHandler={handleFormChange}
          />
          <InputComponent
            inputName={"password"}
            inputType={"password"}
            placeholder={"Password..."}
            inputValue={signupDetails.password}
            onChangeHandler={handleFormChange}
          />
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

export default Signup;
