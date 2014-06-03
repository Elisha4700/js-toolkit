function BowerHelper() {
    'use strict';

    var _b = require('bower');

    this.search = function (searchText, callback) {
        if (!searchText) {
            console.warn('Can`t search for nothing!');
            return;
        }
        _b.commands.search(searchText).on('end', callback);
    };

    this.install = function (path, callback) {
        // TODO: implement bower install action.

        //    bower.commands
        //        .install([packageDir], undefined, config)
        //        .on('end', function (installed) {
        //
        //            expect(fs.existsSync(path.join(tempDir, process.pid + ' ' + packageName))).to.be(true);
        //
        //            next();
        //        });
    };

    this.uninstall = function (path) {
        // TODO: implement bower uninstall action.
    };

    this.list = function (path) {
        // TODO: implement bower list action.
    };

    this.version = function () {

    }

}