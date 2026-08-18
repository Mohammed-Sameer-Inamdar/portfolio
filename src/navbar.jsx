import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";

function Navbar({ activeSection, PRIMARY_TEXT_GRADIENT }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const menuItems = ["home", "skills", "certifications", "projects", "journey", "contact"];

    return (
        <nav className="sticky top-0 backdrop-blur-md z-50 transition-colors duration-300 bg-theme-bg/50 border-b border-theme-border shadow-lg shadow-theme-border/20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Name */}
                <h2 className={`text-xl font-bold tracking-wide ${PRIMARY_TEXT_GRADIENT}`}>
                    Mohammed Sameer Inamdar
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium transition-colors text-theme-text-muted">
                    {menuItems.map((sec) => (
                        <li key={sec}>
                            <a
                                href={`#${sec}`}
                                className={`relative transition ${
                                    activeSection === sec
                                        ? "text-[#00ddff] border-b-2 border-[#00ddff] pb-1"
                                            : "hover:text-[#00ddff] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#00ddff] after:transition-all after:duration-300 hover:after:w-full"
                                }`}
                            >
                                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Theme Toggle & Hamburger */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full transition-all duration-300 hover:scale-110 bg-theme-card hover:bg-theme-border text-[#00ddff]"
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                    <button
                        className="md:hidden text-2xl transition-colors text-theme-text"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden transition-colors bg-theme-card border-t border-theme-border">
                    <ul className="flex flex-col items-center py-4 gap-4 text-theme-text-muted">
                        {menuItems.map((sec) => (
                            <li key={sec}>
                                <a
                                    href={`#${sec}`}
                                    className={`block text-lg transition-colors ${
                                        activeSection === sec ? "text-[#00ddff]" : "hover:text-[#00ddff]"
                                    }`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

