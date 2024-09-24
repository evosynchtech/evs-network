import React from "react";
import { Link } from "react-router-dom";

function NavButton({ to, title, isActive, onClick }) {
    
  return (
    <div>
      <Link
        to={to}
        onClick={onClick}
        class={`block py-2 px-3 ${
          isActive ? "text-[#AAFF00]" : "text-white"
        } rounded md:bg-transparent md:p-0`}
        aria-current="page"
      >
        {title}
      </Link>
    </div>
  );
}

export default NavButton;
