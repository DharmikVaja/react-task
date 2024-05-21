import { useState } from "react";
import bgImg from "../assets/Images/Background.png";
import Logo from "../assets/Images/logo.png";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", fullName: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };
  return (
    <>
      <div className="relative w-screen min-h-screen flex justify-center overflow-y-hidden">
        <img
          src={bgImg}
          alt="bg Image"
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="relative flex items-center px-auto rounded-3px  max-w-[1300px] justify-center  min-h-screen z-10">
          <div className="flex flex-col min-h-screen  md:flex-row rounded-3xl bg-white shadow-lg overflow-hidden">
            <div className="sec-1 md:w-2/5 bg-[#084B3E] flex flex-col md:p-10 md:max-w-[800px] justify-between items-left ps-8 py-8">
              <img
                src={Logo}
                alt="logo"
                className="md:w-40 w-28  max-w-xs object-cover space-y-3 md:pt-0 "
              />
              <p className="text-[#F9E2BA]  text-sm md:text-4xl pe-5 font-semibold pb-6">
                Say hello to global food and beverage producers and suppliers,
                all in one place
              </p>
            </div>
            <div className="sec-2 md:w-3/5 p-8 text-black md:pe-40 md:ps-14 flex flex-col justify-between">
              <div className="py-8 text-black font-semibold text-lg md:text-3xl">
                <p>Let’s get started</p>
                <p>with a few simple steps</p>
              </div>
              <div className="inputFields">
                <form onSubmit={handleSubmit} className="inputFields">
                  <div className="flex flex-col py-5 pe-5 text-sm space-y-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email here"
                      className="border-b-2 border-black focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col py-5 pe-5 text-sm space-y-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your Full Name here"
                      className="border-b-2 border-black focus:outline-none"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs">
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col py-5 pe-5 text-sm space-y-2">
                    <label className="font-semibold">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password here"
                      className="border-b-2 border-black focus:outline-none"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <span className="text-red-500 text-xs">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col py-7 pe-5 font-semibold">
                    <input
                      type="submit"
                      value="Sign up"
                      className="bg-[#00C38B] hover:bg-[#084B3E] text-lg text-white py-6 rounded-2xl cursor-pointer"
                    />
                  </div>
                </form>
              </div>
              <div className="pt-14 text-xs flex flex-col font-semibold  text-gray-400">
                <p>
                  By signing up, you agree to our{" "}
                  <a className="text-[#00C38B] border-b-2 cursor-pointer border-[#00C38B]">
                    Terms of Service
                  </a>
                  .
                </p>
                <p>
                  Already have an account?{" "}
                  <a className="text-[#00C38B] border-b-2 cursor-pointer border-[#00C38B]">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
