function StoreHelper() {
    'use strict';

    this.set = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    this.get = function (key) {
        return JSON.parseJson(localStorage.getItem(key));
    };
}