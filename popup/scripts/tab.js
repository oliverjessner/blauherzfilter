"use strict";
const tabSelect = [...document.querySelectorAll('.tab-select')];
const tabMenus = [...document.querySelectorAll('.tab-menu')];
tabSelect.forEach(tab => {
    tab.addEventListener('click', () => {
        const menuFor = tab.getAttribute('data-for');
        const menu = tabMenus.find(menu => menu.getAttribute('data-for') === menuFor);
        if (tab.classList.contains('tab-active')) {
            return;
        }
        tabSelect.forEach(tab => tab.classList.remove('tab-active'));
        tab.classList.add('tab-active');
        tabMenus.forEach(menu => menu.classList.add('hidden'));
        menu?.classList.remove('hidden');
    });
});
