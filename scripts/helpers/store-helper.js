function StoreHelper() {
    'use strict';

    this.set = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    this.get = function (key, defaultValue) {
        var result = localStorage.getItem(key);
        if (!result) {
            return defaultValue;
        }
        return JSON.parse(result);
    };

    this.remove = function (key) {
        localStorage.removeItem(key);
    }
}