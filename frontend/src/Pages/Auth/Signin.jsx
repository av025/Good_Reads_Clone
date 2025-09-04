import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "src/Components/Button/Button";
import FormComponent from "src/Components/FormComponent/FormComponent";
import InputComponent from "src/Components/InputComponent/InputComponent";
import LinkButton from "src/Components/LinkButton/LinkButton";
import Layout from "src/Layouts/Layout";
import { signin } from "src/Store/Slices/authSlice";

function Signin() {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function resetSigninForm() {
    setSignInDetails({
      email: "",
      password: "",
    });
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setSignInDetails({
      ...signInDetails,
      [name]: value,
    });
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    const response = await dispatch(signin(signInDetails));
    if (response?.payload?.data) {
      navigate("/dashboard");
    }
    resetSigninForm();
  }

  useEffect(() => {
    if (state.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Layout>
      <div className="h-[100vh] flex flex-col items-center justify-center mx-auto">
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
            <InputComponent
              inputType={"email"}
              inputName={"email"}
              placeholder={"Email..."}
              inputValue={signInDetails.email}
              onChangeHandler={handleFormChange}
            />
            <InputComponent
              inputType={"password"}
              inputName={"password"}
              placeholder={"Password..."}
              inputValue={signInDetails.password}
              onChangeHandler={handleFormChange}
            />
            <Button
              buttonText={"Submit"}
              buttonType="submit"
              buttonWidth={"w-full"}
              buttonCategory={"success"}
            />
          </FormComponent>
        </div>
      </div>
    </Layout>
  );
}

export default Signin;
