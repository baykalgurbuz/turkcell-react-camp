import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="pages">Pages</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Menu;
