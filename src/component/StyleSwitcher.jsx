import { useEffect, useState } from "react";

const StyleSwitcher = () => {
    // Style Switcher Open/Close
    const [open, setOpen] = useState(false);

    // Theme Mode
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Apply saved color on page load
    useEffect(() => {
        const savedColor =
            localStorage.getItem("color") || "#ec1839";

        document.documentElement.style.setProperty(
            "--skin-color",
            savedColor
        );
    }, []);

    // Apply Dark / Light Mode
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Change Theme Color
    const handleColorChange = (color) => {
        document.documentElement.style.setProperty(
            "--skin-color",
            color
        );

        localStorage.setItem("color", color);
    };

    // Toggle Dark/Light
    const handleMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <div className={`style-switcher ${open ? "open" : ""}`}>
            {/* Gear Button */}
            <div
                className="style-switcher-toggler s-icon"
                onClick={() => setOpen(!open)}
            >
                <i className="fas fa-cog fa-spin"></i>
            </div>

            <h4>Theme Color</h4>

            <div className="colors">
                <span
                    className="color-1"
                    onClick={() => handleColorChange("#ec1839")}
                ></span>

                <span
                    className="color-2"
                    onClick={() => handleColorChange("#fa5b0f")}
                ></span>

                <span
                    className="color-3"
                    onClick={() => handleColorChange("#37b182")}
                ></span>

                <span
                    className="color-4"
                    onClick={() => handleColorChange("#1854b4")}
                ></span>

                <span
                    className="color-5"
                    onClick={() => handleColorChange("#f021b2")}
                ></span>
            </div>

            {/* Dark / Light */}
            <div
                className="day-night s-icon"
                onClick={handleMode}
            >
                <i
                    className={`fas ${darkMode ? "fa-sun" : "fa-moon"
                        }`}
                ></i>
            </div>
        </div>
    );
};

export default StyleSwitcher;