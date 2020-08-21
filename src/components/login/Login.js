import React, { useState } from "react";
import { useAlert } from "react-alert";
export default function Login(props) {
  const [user, setUser] = useState("");
  const alert = useAlert();

  const id = "admin";

  const onChangeHandler1 = (e) => {
    setUser(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (user === id) {
      return props.history.push("/password");
    } else {
      alert.error("Wrong UserName");
      setUser("");
    }

    // var config = {
    //   method: "get",
    //   url: "https://api.github.com/user",
    //   headers: {
    //     "Authorization": "Basic YmVueTE5OTM6Y2hlaHJhemlAMTIz",
    //   },
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <h1 className="font-hairline mb-6 text-center">
            Login to our Website
          </h1>
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="font-bold text-grey-darker block mb-2">
                Username
              </label>
              <input
                className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
                placeholder="Your Username"
                type="text"
                value={user}
                onChange={onChangeHandler1}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal text-white font-bold py-2 px-4 rounded"
                onClick={onClickHandler}
              >
                Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
