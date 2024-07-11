import { useState } from "react";

const BgChanger = () => {
  const [favColor, setFavColor] = useState("orange");
  return (
    <>
      <div className="flex flex-col">
        <h1 style={{ backgroundColor: favColor }}>
          My fav color is {favColor}!
        </h1>
        <button type="button" onClick={() => setFavColor("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setFavColor("purple")}>
          purple
        </button>
        <button type="button" onClick={() => setFavColor("yellow")}>
          yellow
        </button>
        <button type="button" onClick={() => setFavColor("cyan")}>
          Cyan
        </button>
      </div>
    </>
  );
};

export default BgChanger;
