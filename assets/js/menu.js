function handleMenu (toggleID = 'main-menu-toggle', menuID = 'main-menu-list') {
    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(`button[id=${toggleID}]`);
        const menu = document.querySelector(`ul[id=${menuID}]`);
        let isMenuShown = false;

        // handle button click
        toggle.addEventListener('click', () => {
            isMenuShown = !!isMenuShown ? false : true;
            handleRender(isMenuShown);
        })

        // toggle menu being shown or hidden
        function handleRender(isShowing) {
            if (isShowing) {
                menu.classList.remove('mobile-hidden');
                toggle.textContent = 'Close Menu';
                document.body.style.position = 'fixed'; //prevent y-scrolling while menu is open
            } else {
                menu.classList.add('mobile-hidden');
                toggle.textContent = 'Menu';
                document.body.style.position = '';
            }
        }
    });
}