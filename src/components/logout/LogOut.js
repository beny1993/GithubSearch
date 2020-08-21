import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function LogOut() {
  return (
    <div>
      <Link
        to="/"
        className="float-left bg-red-300 rounded-md  border-2 shadow hover:bg-red-500 p-2 "
      >
        LogOut
      </Link>
    </div>
  );
}

export default LogOut;
