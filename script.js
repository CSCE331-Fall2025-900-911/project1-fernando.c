const themeSwitcherBtn = document.getElementById('themeSwitcher');
const stylesheet = document.getElementById('stylesheet');

themeSwitcherBtn.addEventListener('click', () => {
    const currentTheme = stylesheet.getAttribute('href');

    if (currentTheme === 'style1.css') {
        stylesheet.setAttribute('href', 'style2.css');
    } else {
        stylesheet.setAttribute('href', 'style1.css');
    }
});