"use strict";
class SocialMedia {
    constructor(name, filter) {
        this.filter = '';
        this.name = '';
        this.active = false;
        this.name = name;
        this.filter = filter;
    }
    setDisplay(comments, display) { }
    toogleComments(comments) { }
    findComments() { }
}
globalThis.SocialMedia = SocialMedia;
