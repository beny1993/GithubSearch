import React from "react";
import Warning from "../warning/Warning";
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      id: "admin",
    };
  }

  onChangeHandler1 = (e) => {
    this.setState({ user: e.target.value });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    console.log(this.state.user);

    if (this.state.user === this.state.id) {
      return this.props.history.push("/password");
    } else {
      return <Warning />;
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
  render() {
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
                  value={this.state.user}
                  onChange={this.onChangeHandler1}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal text-white font-bold py-2 px-4 rounded"
                  onClick={this.onClickHandler}
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
}
