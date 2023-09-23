import { useEffect, useState } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = "light" | "dark";

type useThemeReturn = [Theme, (e: ChangeEvent) => void];

export const useTheme = (initialTheme: Theme): useThemeReturn => {
    // Intenta obtener el tema almacenado en localStorage, si no existe, usa el tema inicial.
    const storedTheme = localStorage.getItem("theme") as Theme || initialTheme;

    const [theme, setTheme] = useState<Theme>(storedTheme);

    const handleChange = (e: ChangeEvent) => {
        const newTheme = e.target.checked ? "dark" : "light";
        setTheme(newTheme);

        // Guarda el tema seleccionado en localStorage.
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        // Actualiza el atributo de data-theme en el body para cambiar el tema.
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return [theme, handleChange];
};
