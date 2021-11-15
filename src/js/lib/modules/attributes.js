import $ from '../core';

$.prototype.addAttr = function(attrName, attrValue) {
    if (!attrName) {
        return this;
    }

    if (attrValue === undefined) {
        attrValue = '';
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attrName, attrValue);
    }

    return this;
};

$.prototype.removeAttr = function(attrName) {
    if (!attrName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attrName);
    }

    return this;
};