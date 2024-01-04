"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
class Video extends Tag_1.Tag {
    constructor(children) {
        super("video", children);
    }
    autoplay(value) {
        if (value)
            this.setAttr("autoplay", value);
        return this;
    }
    buffered(value) {
        if (value)
            this.setAttr("buffered", value);
        return this;
    }
    controls(value) {
        if (value)
            this.setAttr("controls", value);
        return this;
    }
    crossorigin(value) {
        if (value)
            this.setAttr("crossorigin", value);
        return this;
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    loop(value) {
        if (value)
            this.setAttr("loop", value);
        return this;
    }
    muted(value) {
        if (value)
            this.setAttr("muted", value);
        return this;
    }
    playsinline(value) {
        if (value)
            this.setAttr("playsinline", value);
        return this;
    }
    poster(value) {
        if (value)
            this.setAttr("poster", value);
        return this;
    }
    preload(value) {
        if (value)
            this.setAttr("preload", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Video(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Video;
