import { useState } from "react";

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(true);
  const handleTOggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <>
      <div>
        <label htmlFor="toggle">
          Are you eligible?
          <input type="checkbox" id="toggle" onChange={handleTOggle} />
        </label>
      </div>
      <div>
        <p>
          Then you are
          {isToggle ? (
            <>
              <span> below 18</span>
              <div>Off</div>
            </>
          ) : (
            <>
              <span> above 18</span>
              <div>On</div>
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Toggle;
