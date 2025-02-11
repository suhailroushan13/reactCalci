import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <>
  
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-xl w-80">
      <h1 className="text-center text-4xl">React Calculator </h1>
      <br />
          <input
            type="text"
            value={display}
            className="w-full text-right text-2xl p-2 mb-4 border rounded"
            disabled
          />
          <div className="grid grid-cols-4 gap-2">
            <button className="btn bg-gray-300" onClick={clearDisplay}>
              C
            </button>
            <button
              className="btn bg-gray-300"
              onClick={() => appendToDisplay("(")}
            >
              {" "}
              ({" "}
            </button>
            <button
              className="btn bg-gray-300"
              onClick={() => appendToDisplay(")")}
            >
              )
            </button>
            <button
              className="btn bg-yellow-400"
              onClick={() => appendToDisplay("/")}
            >
              /
            </button>
            <button className="btn" onClick={() => appendToDisplay("7")}>
              7
            </button>
            <button className="btn" onClick={() => appendToDisplay("8")}>
              8
            </button>
            <button className="btn" onClick={() => appendToDisplay("9")}>
              9
            </button>
            <button
              className="btn bg-yellow-400"
              onClick={() => appendToDisplay("*")}
            >
              *
            </button>
            <button className="btn" onClick={() => appendToDisplay("4")}>
              4
            </button>
            <button className="btn" onClick={() => appendToDisplay("5")}>
              5
            </button>
            <button className="btn" onClick={() => appendToDisplay("6")}>
              6
            </button>
            <button
              className="btn bg-yellow-400"
              onClick={() => appendToDisplay("-")}
            >
              -
            </button>
            <button className="btn" onClick={() => appendToDisplay("1")}>
              1
            </button>
            <button className="btn" onClick={() => appendToDisplay("2")}>
              2
            </button>
            <button className="btn" onClick={() => appendToDisplay("3")}>
              3
            </button>
            <button
              className="btn bg-yellow-400"
              onClick={() => appendToDisplay("+")}
            >
              +
            </button>
            <button
              className="btn col-span-2"
              onClick={() => appendToDisplay("0")}
            >
              0
            </button>
            <button className="btn" onClick={() => appendToDisplay(".")}>
              .
            </button>
            <button className="btn bg-green-400" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const btnStyle =
  "bg-gray-200 text-xl font-semibold p-4 rounded shadow hover:bg-gray-300";
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => btn.classList.add(...btnStyle.split(" ")));
