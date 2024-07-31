"use strict";
const smns = Object.freeze({
    tiktok: new TikTok('[data-e2e="comment-level-1"]', '[data-e2e="comment-level-2"]'),
    instagram: new Instagram('.x1lliihq.x1plvlek.xryxfnj', '._ap3a._aaco._aacu._aacx._aad7._aade'),
    youtube: new YouTube('ytd-comment-thread-renderer .yt-core-attributed-string', undefined),
    x: new X('.css-146c3p1.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41.r-bnwqim'),
    threads: new Threads('.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.xjohtrz.xo1l8bm.xp07o12.x1yc453h.xat24cr.xdj266r'),
});
const socialMediasNames = Object.keys(smns);
const url = window.location.toString();
const activeSMN = socialMediasNames.find(smn => url.includes(smn));
function start() {
    chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
        smns[request.name].active = request.checked || false;
        smns[request.name].findComments();
        return sendResponse({ status: 'ok' });
    });
    chrome.storage.sync.get(activeSMN, items => {
        const obj = smns[activeSMN];
        obj.active = items[activeSMN] || false;
        if (obj.active) {
            return obj.start();
        }
    });
}
if (activeSMN) {
    start();
}
