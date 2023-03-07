import React, { useEffect, useRef } from "react";

function Navbar() {
  const right = useRef(null);
  const subMenu = useRef(null);
  function handleNavToggle() {
    right.current.classList.toggle("show-right");
  }
  function handleSubBtn() {
    subMenu.current.classList.toggle("show-dropdown");
  }

  const navbar = useRef(null);
  useEffect(() => {
    function handleStickyNavbar() {
      navbar.current.classList.toggle("sticky", window.scrollY > 25);
    }
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);
  return (
    <>
      {/* <!-- Header --> */}
      <header>
        {/* <!-- Navigation bar --> */}
        <nav className="navbar" ref={navbar}>
          <div className="navbar-center">
            <div className="logo">
              <h2>Ocean Vista</h2>
              <button className="nav-toggle" onClick={handleNavToggle}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="right" ref={right}>
              <ul className="menu">
                <li className="menu-items">
                  <a href="#home">Home</a>
                </li>
                <li className="menu-items">
                  <a href="#about">About</a>
                </li>
                <li className="menu-items">
                  <a href="#" className="sub-btn" onClick={handleSubBtn}>
                    Services<i className="fa-solid fa-caret-down side"></i>
                  </a>
                  <ul className="sub-menu" ref={subMenu}>
                    <li className="sub-items">
                      <a href="#">sub-items1</a>
                    </li>
                    <li className="sub-items">
                      <a href="#">sub-items2</a>
                    </li>
                    <li className="sub-items">
                      <a href="#">sub-items3</a>
                    </li>
                    <li className="sub-items">
                      <a href="#">sub-items4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-items">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <button className="btn">
                <a href="#">Log in</a>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
