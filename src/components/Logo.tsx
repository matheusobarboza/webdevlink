import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex my-5 text-5xl sm:text-7xl font-bold">
        <h1 className="text-white">Dev</h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Link</h1>
      </div>
    </Link>
  );
};
