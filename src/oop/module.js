/**
 * Модуль
 */
const genId = (function () {
    let indexes = new WeakMap();
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
