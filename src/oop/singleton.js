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
    StoreManager.prototype.getRange = function () {
        return this.store.data;
    }

    return StoreManager;
})();

console.log(StoreManager.getRange());
