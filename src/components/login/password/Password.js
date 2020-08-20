import React, { useState } from "react";

export default function Password(props) {
  const [password, setPassword] = useState("");

  function onChangeHandler(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function onClickHandler(e) {
    const pass = "admin";
    e.preventDefault();
    if (password === pass) {
      return props.history.push("/search");
    } else {
      alert("wrong user pass");
    }
  }

  return (
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="w-1/3">
        <h1 className="font-hairline mb-6 text-center">Login to our Website</h1>
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Password
            </label>
            <input
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Password"
              type="password"
              value={password}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-teal text-white font-bold py-2 px-4 rounded"
              onClick={onClickHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
