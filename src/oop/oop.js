/**
 *  Наследование
 */
const Component = function (options) {
    options = options || {};

    this.disabled = options.disabled || false;
}
Component.prototype.getDisabled = function () {
    return this.disabled;
}

const Panel = function (options) {
    options = options || {};

    Component.apply(this, arguments);

    this.title = options.title || '';
}
Panel.prototype = Object.create(Component.prototype);
Panel.prototype.getTitle = function () {
    return this.title;
}

