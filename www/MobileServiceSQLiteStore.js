// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

var MobileServiceSQLiteStore = function (dbName) {
    /// <summary>
    /// Initializes a new instance of the MobileServiceStore class.
    /// </summary>

    var idProperty = "id";
    var tables = {};

    var db = sqlitePlugin.openDatabase({ name: dbName });

    this.upsert = function (tableName, instance) {

        var deferred = $.Deferred();

        setTimeout(function () {

            var table = tables[tableName] = tables[tableName] || {};

            var instanceId = instance[idProperty];

            // Make a deep copy of the object before inserting it. 
            // We don't want future changes to the object to directly update our table data.
            var newObject = JSON.parse(JSON.stringify(instance));
            table[instanceId] = newObject;

            // notify completion
            deferred.resolve();
        }, 0);

        return deferred.promise();
    };

    this.lookup = function (tableName, id) {

        var deferred = $.Deferred();

        setTimeout(function () {
            var table = tables[tableName];

            if (table === undefined) {
                deferred.reject("Undefined table");
            }

            // notify completion
            deferred.resolve(table[id]);
        }, 0);

        return deferred.promise();
    };
};

// Export
window.WindowsAzure = window.WindowsAzure || {};
window.WindowsAzure.MobileServiceSQLiteStore = MobileServiceSQLiteStore;

module.exports = MobileServiceSQLiteStore;
