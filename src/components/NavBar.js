import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aLink = links.map((element) => {
    return (
      <li key={element}>
        <a href={`#${element}`}>{element}</a>
      </li>
    );
  });

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      <ol>{aLink}</ol>
    </nav>
  );
}

export default NavBar;
