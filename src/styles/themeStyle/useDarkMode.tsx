import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState<string>('dark');

    const [mountedComponent, setMountedComponent] = useState(false)
    const setMode = (mode : any )  => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () : void => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, mountedComponent] as const
};