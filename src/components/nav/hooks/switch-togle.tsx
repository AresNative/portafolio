import { SvgMoon } from "../../../assets/moon";
import SvgSun from "../../../assets/sun";
import { useTheme } from "./use-theme";
import '../theme/switch.css'
export const SwitchToggle = () => {
    const [theme, handleChange] = useTheme('light');
    return (
        <section className="container-switch">
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
        </section>
    )
}