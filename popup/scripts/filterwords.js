"use strict";
const input = document.querySelector('.filter-words input');
const filterWordsList = document.querySelector('.filter-words-list');
const storageKey = 'filterWords';
async function renderFilterWords() {
    const { filterWords } = await chrome.storage.sync.get(storageKey);
    filterWordsList.innerHTML = '';
    filterWords.forEach(function (word) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        li.classList.add('flex', 'justify-between', 'items-center', 'text-sm', 'hover:color-gray-500');
        span.textContent = word;
        button.textContent = 'X';
        li.appendChild(span);
        li.appendChild(button);
        filterWordsList.appendChild(li);
        button.addEventListener('click', async function () {
            const { filterWords } = await chrome.storage.sync.get(storageKey);
            const index = filterWords.indexOf(word);
            filterWords.splice(index, 1);
            await chrome.storage.sync.set({ filterWords: filterWords });
            li.remove();
        });
    });
}
input?.addEventListener('keydown', async function (e) {
    let { filterWords } = await chrome.storage.sync.get(storageKey);
    if (e.key === 'Enter') {
        const word = input?.value.trim().toLowerCase();
        if (word === '' || (Array.isArray(filterWords) && filterWords.includes(word))) {
            return;
        }
        if (!Array.isArray(filterWords)) {
            filterWords = [];
        }
        filterWords.push(word);
        input.value = '';
        await chrome.storage.sync.set({ filterWords: filterWords });
        return renderFilterWords();
    }
});
renderFilterWords();
