document.addEventListener('DOMContentLoaded', () => {
    const styleToggleBtn = document.getElementById('themeSwitcher');
    const stylesheet = document.getElementById('stylesheet');

    const setTheme = (theme) => {
        if (theme === 'dark') {
            stylesheet.href = 'style2.css';
            localStorage.setItem('theme', 'dark');
        } else {
            stylesheet.href = 'style1.css';
            localStorage.setItem('theme', 'light');
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    styleToggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});