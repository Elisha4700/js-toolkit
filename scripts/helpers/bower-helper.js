function BowerHelper() {
    'use strict';

    var _b = require('bower');

//    this.bower = _b;

    this.search = function (searchText, callback) {
        if (!searchText) {
            consoe.warn('Can`t search for nothing!');
            return;
        }
        _b.commands.search(searchText).on('end', callback);
    }
}