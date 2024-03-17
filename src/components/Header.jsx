import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="bg-[#22d3ee] p-5 h-20">
      <Link to="/" class="text-3xl font-bold flex float-start">
        QuizId
      </Link>
      <Link to="/Login" class="float-right text-2xl">
        Login
      </Link>
    </nav>
  );
};

export default Header;
