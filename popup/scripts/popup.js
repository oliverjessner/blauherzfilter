"use strict";
const socialMedias = [...document.querySelectorAll('.social-medias input')].map(function (input) {
    return {
        name: input.id,
        input: input,
    };
});
function sendMessageToContent(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]?.id) {
            chrome.tabs.sendMessage(tabs[0].id, message, () => { });
        }
    });
    chrome.storage.sync.set({ [message.name]: message.checked });
}
socialMedias.forEach(function setCheckboxes({ name, input }) {
    // prevents a race condition error
    requestAnimationFrame(() => {
        chrome.storage.sync.get(name, function (items) {
            input.checked = items[name] || false;
        });
    });
    input.addEventListener('click', function () {
        sendMessageToContent({ checked: input.checked, name });
    });
});
