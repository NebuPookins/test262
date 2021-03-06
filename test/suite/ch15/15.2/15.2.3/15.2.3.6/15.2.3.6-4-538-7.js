// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-538-7
description: >
    ES5 Attributes - Updating an indexed accessor property 'P' whose
    [[Configurable]] attribute is true to a data property is
    successful, 'O' is the global object
includes:
    - runTestCase.js
    - fnGlobalObject.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var obj = fnGlobalObject();

        obj.verifySetFunc = "data";
        var getFunc = function () {
            return obj.verifySetFunc;
        };

        var setFunc = function (value) {
            obj.verifySetFunc = value;
        };
        try {
            Object.defineProperty(obj, "0", {
                get: getFunc,
                set: setFunc,
                enumerable: true,
                configurable: true
            });
            var desc1 = Object.getOwnPropertyDescriptor(obj, "0");

            Object.defineProperty(obj, "0", {
                value: 1001
            });
            var desc2 = Object.getOwnPropertyDescriptor(obj, "0");

            return desc1.hasOwnProperty("get") && desc2.hasOwnProperty("value") &&
                typeof desc2.get === "undefined" && typeof desc2.get === "undefined" &&
                dataPropertyAttributesAreCorrect(obj, "0", 1001, false, true, true);
        } finally {
            delete obj[0];
            delete obj.verifySetFunc;
        }
    }
runTestCase(testcase);
