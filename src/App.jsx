import React, { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numAllow) {
      string += "0123456789";
    }

    if (charAllow) {
      string += "~`!@#$%^&*()_|:<>,.?/";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllow, numAllow, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllow, numAllow, setPassword]);

  return (
    <div className="w-1/2 bg-[#9999] b-2 border-red-400 text-white mt-5 m-auto p-4 rounded-md">
      <h1 className="w-1/2 mb-3 text-3xl m-auto">Password Generator</h1>
      <input
        className="w-[100%] bg-orange-100 p-2 rounded-md outline-none text-black text-2xl font-medium inline-block mb-3"
        type="text"
        readOnly={true}
        value={password}
      />
      <div className="w-full bg-lime-300 p-2 rounded-md  text-black text-xl font-medium flex gap-x-1 items-center ">
        <input
          type="range"
          className="inline-block ml-16"
          min={8}
          max={100}
          onChange={(e) => setlength(e.target.value)}
        />
        <label htmlFor="" className="mx-2 inline-block">
          Length :{length}{" "}
        </label>
        <input
          className="w-4 h-4 mr-1 inline-block"
          type="checkbox"
          name=""
          id="charInput"
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}
        />
        <label htmlFor="charInput" className="mr-2 inline-block">
          Allow Character
        </label>
        <input
          className="w-4 h-4 mr-1inline-block"
          type="checkbox"
          name=""
          id="numInput"
          onChange={() => {
            setNumAllow((prev) => !prev);
          }}
        />
        <label htmlFor="numInput" className="inline-block">
          Allow Number
        </label>
      </div>
    </div>
  );
};

export default App;
