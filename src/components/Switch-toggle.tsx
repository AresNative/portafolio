import { SvgMoon } from "../assets/moon";
import SvgSun from "../assets/sun";
import { useTheme } from "../hooks/useTheme";

export const SwitchToggle = () => {
    const [theme, handleChange] = useTheme('dark');
    return (
        <div className="container-switch">
            <label className="switch">
                <input
                    className="checkbox"
                    type="checkbox"
                    onChange={handleChange}
                    checked={theme === 'dark'} />
                <span className="slider">
                    <SvgSun />
                    <SvgMoon />
                </span>

            </label>
        </div>
    )
}
/* 


*/