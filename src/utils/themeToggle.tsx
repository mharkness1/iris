import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// Get system preference
function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Apply theme to <html>
function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(getSystemTheme());
  const [manualOverride, setManualOverride] = useState<boolean>(false);

  // Listen to system preference changes if no manual override
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!manualOverride) {
        const sysTheme: Theme = e.matches ? "dark" : "light";
        setThemeState(sysTheme);
        applyTheme(sysTheme);
      }
    };

    // Firefox requires addEventListener for "change"
    if (mql.addEventListener) mql.addEventListener("change", handleChange);
    else mql.addListener(handleChange); // Safari fallback

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handleChange);
      else mql.removeListener(handleChange);
    };
  }, [manualOverride]);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setThemeState(newTheme);
    applyTheme(newTheme);
    setManualOverride(true); // user now overrides system
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2"
    >
      {theme === "light" ?
      
    <svg className="w-12 h-12 secondary-col" viewBox="0 0 1182 1182" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fill: "currentColor", stroke: "currentColor", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
<g id="Sun" transform="matrix(3.98906e-16,6.51463,-6.51463,3.98906e-16,4598.92,-1738.84)">
        <g transform="matrix(6.12323e-17,-1,1,6.12323e-17,-464.978,847.67)">
            <path d="M189.028,827.761L189.028,798.302L198.465,798.302L198.465,788.837L208.292,788.837L208.292,779.621L255.889,779.654L255.889,789.091L265.354,789.091L265.354,798.528L274.819,798.528L274.819,846.686L265.383,846.686L265.383,856.151L255.946,856.151L255.946,865.617L208.018,865.617L208.018,856.18L198.553,856.18L198.553,846.743L189.088,846.743L189.088,827.761L189.028,827.761ZM207.902,807.767L207.902,817.689L208.018,817.689L208.018,837.306L217.484,837.306L217.484,846.743L237.072,846.743L237.072,846.686L246.509,846.686L246.509,837.221L255.946,837.221L255.946,808.022L246.423,807.964L246.423,798.528L227.165,798.528L227.165,798.551L217.338,798.551L217.338,807.767L207.902,807.767Z"/>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,913.908,714.83)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,904.471,705.365)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(3.06388e-17,-0.798977,0.801398,3.07317e-17,144.274,1286.12)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(3.06388e-17,-0.798977,0.801398,3.07317e-17,153.739,1276.69)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,1027.95,705.108)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(3.06388e-17,-0.798977,0.801398,3.07317e-17,258.345,1172.08)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,904.284,768.534)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,885.411,768.534)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,1047.05,768.534)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,1028.18,768.534)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,966.358,828.987)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,966.358,847.917)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,966.358,704.479)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(-0.798977,9.78464e-17,-9.81429e-17,-0.801398,966.358,685.548)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
        <g>
            <g transform="matrix(3.06388e-17,-0.798977,0.801398,3.07317e-17,268.667,1286.33)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
            <g transform="matrix(0.798977,1.59124e-16,-1.59606e-16,0.801398,-198.308,516.719)">
                <rect x="750" y="177.165" width="23.622" height="23.622"/>
            </g>
        </g>
    </g>
</svg>

:
<svg
  className="w-12 h-12 secondary-col"
  viewBox="0 0 1182 1182"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid meet"
  style={{
    stroke: "currentcolor",
    fill: "currentcolor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
  }}
>
    <g id="Moon" transform="matrix(6.56645,0,0,6.56645,-2387.78,-4748.36)">
        <path d="M410.556,836.92L410.556,788.993L419.993,788.993L419.993,779.528L438.866,779.528L438.866,798.458L448.303,798.458L448.303,817.519L463.42,817.519L463.42,827.398L487.082,827.398L487.082,846.328L477.645,846.328L477.645,855.794L429.487,855.794L429.487,846.357L420.021,846.357L420.021,836.92L410.556,836.92Z"/>
    </g>
</svg>

}

    </button>
  );
}
