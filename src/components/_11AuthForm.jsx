import { useState } from "react";
const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [psd, setPsd] = useState("");
  const [isPsdVisible, setIsPsdVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className="flex flex-row">
        <h1>{isRegistered ? "Register" : "Login"}</h1>
        <input
          type="email"
          placeholder="enter your email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={isPsdVisible ? "password" : "text"}
          placeholder="enter your password here"
          onChange={(e) => setPsd(e.target.value)}
        />
        <span
          className="cursor-pointer"
          onClick={() => setIsPsdVisible(!isPsdVisible)}
        >
          &#x1f440;
        </span>
        <button type="submit">{isRegistered ? "Register" : "Login"}</button>
      </div>
      <div className="flex flex-row">
        {isRegistered ? (
          <p>
            Already registered? <a>Login here</a>
          </p>
        ) : (
          <p>
            Don&apos;t have an account? <a>Register from here</a>{" "}
          </p>
        )}
        <button onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? "Login" : "Register"}{" "}
        </button>
      </div>
    </>
  );
};
export default AuthForm;
