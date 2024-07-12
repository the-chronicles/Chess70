import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 uppercase">
      <div className="flex items-center gap-4 text-[#7f7e7d]">
        <div>
          <h1 className="text-4xl font-semibold">Chess70</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/play">Play</NavLink>
          </li>
          <li>
            <NavLink to="/puzzle">Puzzles</NavLink>
          </li>
          <li>
            <NavLink to="/learn">Learn</NavLink>
          </li>
          <li>
            <NavLink to="/watch">Watch</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/tools">Tools</NavLink>
          </li>
          <li className="text-[#BF811D]">
            <NavLink to="/donate">Donate</NavLink>
          </li>
        </ul>
      </div>
      <ul className="text-blue-500">
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
