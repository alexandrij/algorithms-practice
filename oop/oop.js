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

/**
 * Singleton
 */
const StoreManager = (function () {
    var instance = null;

    const StoreManager = function (options) {
        if (instance) {
            return instance;
        }

        options = options || {};

        this.store = options.data || [];

        instance = this;
    }
    StoreManager.prototype.add = function (item) {
        this.store.push(item);
    }

    return StoreManager;
})();

/**
 * Модуль
 */
var example = (function () {
    let indexes = new Map();
    const getId = function (prefix) {
        prefix = String(prefix || 'sp');
        let index = (indexes.get(prefix) || 1);
        indexes.set(prefix, index + 1);
        return prefix + '-' + index;
    };
    return {
        print: () => { console.log(indexes) },
        getId: getId
    };
})();

let Company = (function () {
    let instance;
    const privateProps = {};
    const Constructor = function (options) {
        if (instance instanceof Constructor) {
            return instance;
        }

        options = options || {};
        privateProps.name = options.name;

        return (instance = this);
    };
    Constructor.prototype.getName = function () {
        return privateProps.name;
    };
    Constructor.prototype.setName = function (name) {
        privateProps.name = name;
    };
})();
