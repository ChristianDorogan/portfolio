import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navContainer">
                <button
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className={`navMenu ${isOpen ? "active" : ""}`}>
                    <li className="navItem">
                        <a href="#about" className="navLink" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#projects" className="navLink" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#skills" className="navLink" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#resume" className="navLink" onClick={closeMenu}>
                            Resume
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className="navLink" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
